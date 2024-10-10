import { Monster } from "@/utils/types/monster"
import styles from "./winner.module.css"

export function Winner({ winner }: { winner: Monster }) {
    return (
        <div className={styles.container}>
            <div>
                <img 
                    className={styles.monster}
                    src={winner.image_url} 
                    alt={winner.name} 
                />
                <div className={styles.nameArea}>
                    <h3 className="text-black">Vencedor: {winner.name}</h3>
                </div>

                <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600" onClick={() => window.location.reload()}>Reiniciar</button>
            </div>
        </div>
    )
}