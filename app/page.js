// app/page.js

import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}><b>Welcome to My Personal Website 😊</b></h1>
      <p>Hi! I'm Yasasi Pathirana, a passionate IT student exploring the digital world.</p>
      <Link href="/about" className={styles.portfolioLink}>Learn more about me</Link>

      <h2 className={styles.title}>Portfolio</h2>
      <ul>
        <li>Project 1: <a href="[Link]" className={styles.portfolioLink}>View Project</a> - Description of project.</li>
        <li>Project 2: <a href="[Link]" className={styles.portfolioLink}>View Project</a> - Description of project.</li>
      </ul>

      <Link href="/contact" className={styles.portfolioLink}>Contact Me</Link>
    </section>
  );
}


