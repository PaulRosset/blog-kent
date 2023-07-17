import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";

import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";

export const siteTitle =
  "Blog Kent University / Epitech - 2017/2018 - Paul Rosset";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Un voyage captivant à travers ma vie en tant qu'étudiant dans une université étrangère. Rejoignez-moi alors que je partage des histoires de première main, des insights précieux et des conseils pratiques qui vous inspireront et vous guideront dans votre propre aventure d'études à l'étranger. De la navigation des différences culturelles à la résolution des défis académiques, j'explore les joies, les difficultés et les moments transformateurs qui ont façonné mon expérience d'éducation internationale. Découvrez des récits captivants, des conseils approfondis et un accompagnement d'experts sur des sujets allant du choix de la bonne destination à l'épanouissement dans un environnement multiculturel. Que vous soyez un étudiant potentiel envisageant d'étudier à l'étranger ou simplement curieux de la vie sur les campus étrangers, ce blog offre un trésor de connaissances et d'inspiration. Partons ensemble à la découverte de cette exploration immersive et révélons le pouvoir transformateur des études à l'étranger !"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="twitter:card"
          content="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
      </Head>
      <header className={styles.header}>
        <div className={styles.socials}>
          <Link
            href="https://github.com/PaulRosset"
            aria-label="Paul Rosset's Github Profile page"
            target="_blank"
          >
            <BsGithub className={styles.marginSocials} fill="#1C2D3E" />
          </Link>
          <Link
            aria-label="Paul Rosset's Instagram Profile page"
            href="https://www.instagram.com/paulrosset/"
            target="_blank"
          >
            <BsInstagram className={styles.marginSocials} fill="#1C2D3E" />
          </Link>
          <Link
            href="https://linkedin.com/in/paul-rosset-ab9891a8"
            target="_blank"
            aria-label="Paul Rosset's LinkedIn Profile page"
          >
            <BsLinkedin className={styles.marginSocials} fill="#1C2D3E" />
          </Link>
          <Link
            href="https://twitter.com/RossetPaul"
            aria-label="Paul Rosset's Twitter Profile page"
            target="_blank"
          >
            <BsTwitter className={styles.marginSocials} fill="#1C2D3E" />
          </Link>
          <Link
            href="https://me.paulrossethings.com/"
            target="_blank"
            style={{ color: "#1C2D3E" }}
            aria-label="Paul Rosset's personal page"
          >
            <RxAvatar className={styles.marginSocials} fill="#1C2D3E" />
          </Link>
          <Link href="/" aria-label="Website Home page">
            <HiHome className={styles.marginSocials} fill="#1C2D3E" />
          </Link>
        </div>
        <div className={styles.universities}>
          <a href="http://www.epitech.eu/" aria-label="Epitech Website">
            <Image
              alt="Epitech University logo"
              width={96}
              height={35}
              src="/images/epitech-fs8.png"
              style={{ objectFit: "contain" }}
            />
          </a>
          <a
            href="https://www.kent.ac.uk/"
            aria-label="Kent University Website"
          >
            <Image
              width={96}
              height={55}
              alt="Kent University logo"
              src="/images/kent-fs8.png"
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/" style={{ color: "#1C2D3E", fontWeight: "bold" }}>
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
