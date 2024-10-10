import { Monster } from "@/utils/types/monster"
import styles from "./board.module.css"

export function Board({ leftMonster, rightMonster, rounds }: { leftMonster: Monster, rightMonster: Monster, rounds: number }) {
  return (
    <div className={styles.screenInfo}>
      <div>
        <h2 className="text-black">Round: {rounds}</h2>
      </div>

      <div className={styles.monsterStatus}>
        <div>
          <h2 className="text-black"><strong>{leftMonster.name}</strong></h2>
          <div className={styles.healthBar}>
            <div
              className={styles.healthFill}
              style={{ width: `${leftMonster.hp}%` }}
            />
          </div>
          <span className="text-black">{leftMonster.hp} HP</span>
        </div>
        <div style={{ width: "10px" }}></div>
        <div>
          <h2 className="text-black"><strong>{rightMonster.name}</strong></h2>
          <div className={styles.healthBar}>
            <div
              className={styles.healthFill}
              style={{ width: `${rightMonster.hp}%` }}
            />
          </div>
          <span className="text-black">{rightMonster.hp} HP</span>
        </div>
      </div>
    </div>
  )
}