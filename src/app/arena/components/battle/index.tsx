import { Monster } from "@/utils/types/monster"
import styles from "./battle.module.css"

export default function Battle({ leftMonster, rightMonster }: {
  leftMonster: Monster
  rightMonster: Monster
}) {
  return <div className={styles.container}>
    <img 
      className={`${styles.monster} ${leftMonster.is_attacking ? styles.attackLeft : styles.returnLeft}`}
      src={leftMonster.image_url} 
      alt={leftMonster.name} 
    />
    <img 
      className={`${styles.monster} ${rightMonster.is_attacking ? styles.attackRight : styles.returnRight}`} 
      src={rightMonster.image_url} 
      alt={rightMonster.name} 
    />
  </div>
}