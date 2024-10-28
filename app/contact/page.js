import styles from '../../styles/Contact.module.css';

export default function ContactPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <p>If you&apos;d like to get in touch, please reach out via the following:</p>
      <ul>
        <li>Email: <Link href="mailto:yasasipathirana123@gmail.com" className={styles.contactLink}>yasasipathirana123@gmail.com</Link></li>
        <li>LinkedIn: <Link href="https://www.linkedin.com/in/yasasi-pathirana-a89412300/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>My LinkedIn</Link></li>
        <li>GitHub: <Link href="https://github.com/yasasipathirana" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>My GitHub</Link></li>
      </ul>
    </section>
  );
}
