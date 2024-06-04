// import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <header className={styles.header}>
        <Link href={'./'} className={styles.logo}>logo</Link>

        <nav className={styles.navbar}>
            <Link href={'#'}>Cadastrar</Link>
        </nav>
    </header>
      <main className={styles.mainContent}>
      <div className={styles.apresentação}>
            <h1>Bem-vindo ao BusVoice</h1>
            <p>Compartilhe suas experiências e fique por dentro das últimas notícias sobre as linhas de ônibus da sua cidade.</p>
            <Link href={'./pages/Feedback'} className={styles.feedbackBtn}>Feedback</Link>
        </div>
      </main>
    </>
  );
}
