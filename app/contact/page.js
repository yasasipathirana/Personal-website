import styles from '../../styles/Contact.module.css';


export default function ContactPage() {
  return (
    <div>
      <p>If you&apos;d like to get in touch, please reach out via the following:</p>
      <ul>
        <li>Email: <a href="mailto:yasasipathirana123@gmail.com" className={styles.contactLink}>yasasipathirana123@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/yasasi-pathirana-a89412300/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>My LinkedIn</a></li>
        <li>GitHub: <a href="https://github.com/yasasipathirana" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>My GitHub</a></li>
      </ul>
    </div>
  );
}

