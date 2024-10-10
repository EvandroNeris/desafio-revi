"use client"

import { Monster } from "@/utils/types/monster"
import { useEffect, useState } from "react"
import Battle from "./components/battle"
import styles from "./arena.module.css"
import { Winner } from "./components/winner"
import Menu from "./components/menu"
import { Board } from "./components/board"

export default function Arena() {
  const [rounds, setRounds] = useState(0)
  const [winner, setWinner] = useState<Monster | null>(null)
  const [isBattleStarted, setIsBattleStarted] = useState(false)
  const [leftMonster, setLeftMonster] = useState<Monster | null>(null)
  const [rightMonster, setRightMonster] = useState<Monster | null>(null)

  const leftAttack = () => {
    if (leftMonster && rightMonster) {
      const damage = leftMonster.attack <= rightMonster.defense ? 1 : leftMonster.attack - rightMonster.defense

      setRightMonster(prev => prev ? { ...prev, is_attacking: !rightMonster.is_attacking, hp: prev.hp - damage } : null)
      setLeftMonster(prev => prev ? { ...prev, is_attacking: !leftMonster.is_attacking } : null)
    }
  }

  const rightAttack = () => {
    if (leftMonster && rightMonster) {
      const damageRight = rightMonster.attack <= leftMonster.defense ? 1 : rightMonster.attack - leftMonster.defense

      setLeftMonster(prev => prev ? { ...prev, is_attacking: !leftMonster.is_attacking, hp: prev.hp - damageRight } : null)
      setRightMonster(prev => prev ? { ...prev, is_attacking: !rightMonster.is_attacking } : null)
    }
  }

  const battle = () => {
    if (leftMonster && rightMonster && leftMonster.hp > 0 && rightMonster.hp > 0) {
      const timeoutId = setTimeout(() => {
        if (leftMonster.speed > rightMonster.speed || (leftMonster.speed === rightMonster.speed && leftMonster.attack > rightMonster.attack)) {
          leftAttack()
          rightAttack()
        } else {
          rightAttack()
          leftAttack()
        }

        setRounds(prev => prev + 1)
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }

  useEffect(() => {
    if (leftMonster && rightMonster) {
      if (leftMonster.hp <= 0) {
        setWinner(rightMonster)
      } else if (rightMonster.hp <= 0) {
        setWinner(leftMonster)
      } else if (isBattleStarted && leftMonster.hp > 0 && rightMonster.hp > 0) {
        const battleInterval = battle()
        return battleInterval
      }
    }
  }, [isBattleStarted, leftMonster?.hp, rightMonster?.hp])

  const fight = () => {
    setIsBattleStarted(true)
    setRounds(0)
    setWinner(null)
  }

  const handleSelect = (monster: Monster) => {
    if (!leftMonster) {
      setLeftMonster(monster)
    } else if (!rightMonster) {
      setRightMonster(monster)
    }
  }

  return (
    <div className={styles.bgArena}>
      {
        !leftMonster || !rightMonster ? (
          <Menu 
            onSelect={handleSelect} 
            leftMonster={leftMonster}
            rightMonster={rightMonster}
          />
        ) : ""
      }

      {
        leftMonster && rightMonster && !winner?.name && (
          <>
            <Battle 
              leftMonster={leftMonster}
              rightMonster={rightMonster}
            />
            <Board 
              leftMonster={leftMonster}
              rightMonster={rightMonster}
              rounds={rounds}
            />
            {
              !isBattleStarted && (
                <div className={styles.startButtonArea}>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={fight}>Iniciar Batalha</button>
                </div>
              )
            }
          </>
        )
      }
  
      {
        winner && <Winner winner={winner} />
      }
    </div>
  )
}