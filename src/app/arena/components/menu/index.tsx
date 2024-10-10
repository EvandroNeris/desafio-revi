import { Monster } from "@/utils/types/monster"
import { useEffect, useState } from "react"
import { PrismaClient } from "@prisma/client"
import styles from "./menu.module.css"
import MonsterCard from "@/components/monster-card"

const prisma = new PrismaClient()

export default function Menu({
  onSelect,
  leftMonster,
  rightMonster
}: {
  onSelect: (monster: Monster) => void,
  leftMonster: Monster | null,
  rightMonster: Monster | null
}) {
  const [monsters, setMonsters] = useState<Monster[]>([])

  useEffect(() => {
    getMonsters()
  }, [])

  const getMonsters = async () => {
    try {
      const response = await fetch('/api/monsters')
      const data = await response.json()
      setMonsters(data)
    } catch (error) {
      console.error("Erro ao buscar monstros:", error)
    }
  }

  const handleClick = (monster: Monster) => {
    onSelect(monster)
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoArea}>
        <p>Escolha 2 monstros para iniciar a batalha:</p>
      </div>
      <div className={styles.monsterList}>
        {monsters.map(monster => (
          <button 
            onClick={() => handleClick(monster)}
          >
              <MonsterCard
                monster={monster}
                isSelected={monster.id === leftMonster?.id || monster.id === rightMonster?.id}
                key={monster.id}
              />
          </button>
        ))}
      </div>
    </div>
  )
}