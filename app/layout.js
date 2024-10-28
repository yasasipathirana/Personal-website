// app/layout.js

import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Personal Website',
  description: 'A personal website created with Next.js 13',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ textAlign: 'center', padding: '1rem' }}>
          <nav>
            <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
          <p>&copy; 2024 Yasasi Pathirana</p>
        </footer>
      </body>
    </html>
  );
}
