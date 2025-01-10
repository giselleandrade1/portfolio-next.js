import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  
  return (    
    <>
      <Head>
        <title>Portfólio Giselle</title>
        <meta name="description" content="Portfólio Giselle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/github.svg" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}> 
          <div>
          <Image
              aria-hidden
              src="/Giselleandrade1.png"
              alt="My Profile GitHub"
              width={150}
              height={150
              }
            />
          </div>
          <h1>Giselle Andrade</h1>
           <p>Seja muito bem vindo ao meu cantinho</p>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://www.instagram.com/giselleandrade.s2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/instagram.svg"
              alt="instagram icon"
              width={16}
              height={16}
            />
          </a>
          <a
            href="https://github.com/giselleandrade1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github.svg"
              alt="github icon"
              width={16}
              height={16}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/giselleandrades2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="linkedin icon"
              width={16}
              height={16}
            />
          </a>
          <a
            href="https://wa.link/ld6dq6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/whatsapp.svg"
              alt="whatsapp icon"
              width={16}
              height={16}
            />
          </a>
        </footer>
      </div>
    </>
  );
}
