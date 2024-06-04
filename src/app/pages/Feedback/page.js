import styles from "./page.module.css";
import Link from "next/link";

export default function Feedback(){
  return(
    <>
        <header className={styles.header}>
        <Link href={'../'} className={styles.logo}>logo</Link>

        <nav className={styles.navbar}>
            <Link href={'#'}>Cadastrar</Link>
            
        </nav>
    </header>
    <main className={styles.mainContent}>
      <button  className={styles.Btn}>Adicionar feedback</button>
    </main>
    </>
  )
}