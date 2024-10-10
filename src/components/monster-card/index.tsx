import React from "react"
import styles from "./monster-card.module.css"
import { Monster } from "@/utils/types/monster"

export default function MonsterCard({ monster, isSelected }: { monster: Monster, isSelected: boolean }) {
  return (
    <div className={`${styles.container} ${isSelected ? styles.selected : ''}`}>
      <img
        className={styles.monster}
        src={monster.image_url}
        alt={monster.name}
      />
      <div className={styles.monsterInfo}>
        <h3>{monster.name}</h3>
        <p>HP: {monster.hp}</p>
        <p>Ataque: {monster.attack}</p>
        <p>Defesa: {monster.defense}</p>
        <p>Velocidade: {monster.speed}</p>
      </div>
    </div>
  )
}
