import styles from '../../styles/About.module.css';

export default function AboutPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}><b>About Me</b></h1>
      <p>
        <b>Hello!💁‍♀️</b> I'm Yasasi Pathirana, an undergraduate studying information technology.
        I can't wait to explore the digital world. My IT degree will provide me the tools to make an impact.
      </p>
      <h2 className={styles.title}><b>Specializations</b></h2>
      <p>Business Analysis and UI/UX Design:</p>
      <ul>
        <li>Business Analysis: Requirements gathering, data analysis, stakeholder management</li>
        <li>UI/UX Design: Proficient in wireframing, prototyping, and user-centered design</li>
        <li>Problem-Solving: Analytical thinking for effective solutions</li>
        <li>Communication: Bridging technical and non-technical gaps</li>
        <li>Attention to Detail: Ensuring a seamless user experience</li>
      </ul>
    </section>
  );
}

