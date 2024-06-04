"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logobus.png";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = () => {
    const busLineElement = document.getElementById("bus-line");
    const photoInputElement = document.getElementById("photo");
    const commentElement = document.getElementById("comment");

    if (!busLineElement || !photoInputElement || !commentElement) {
      console.error("Form elements not found");
      return;
    }

    const busLine = busLineElement.value;
    const photoInput = photoInputElement;
    const comment = commentElement.value;

    if (!busLine || !comment) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const newFeedback = {
      busLine,
      comment,
      photo: photoInput.files && photoInput.files[0]
        ? URL.createObjectURL(photoInput.files[0])
        : null,
    };

    setFeedbacks([...feedbacks, newFeedback]);

    // Limpa os campos do formulário
    busLineElement.value = "";
    photoInputElement.value = "";
    commentElement.value = "";
  };

  return (
    <>
      <header className={styles.header}>
        <Link href={"../"} className={styles.logo}>
          <Image src={Logo} className="logo"/>
        </Link>
        <nav className={styles.navbar}>
          <Link href={"#"}>Cadastrar</Link>
        </nav>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.feedbackForm}>
          <input type="text" id="bus-line" placeholder="Linha do ônibus" className={styles.input} />
          <input type="file" id="photo" className={styles.input} />
          <textarea id="comment" placeholder="Comentário" className={styles.input}></textarea>
          <button onClick={addFeedback} className={styles.Btn}>
            Adicionar feedback
          </button>
        </div>
        <div id="feedback-container" className={styles.feedbackContainer}>
          {feedbacks.map((feedback, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.busLine}>Linha: {feedback.busLine}</div>
              {feedback.photo && <img src={feedback.photo} alt="Foto do feedback" className={styles.photo} />}
              <div className={styles.comment}>{feedback.comment}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
