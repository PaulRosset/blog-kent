import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";

import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";

export const siteTitle =
  "Blog Kent University / Epitech - 2017/2018 - Paul Rosset - Etudiant";

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
          content="En tant qu'étudiant Epitech, mon séjour à l'Université de Kent en Angleterre a été une aventure formatrice et enrichissante. Les préparations avant le départ étaient un labyrinthe de procédures, mais la perspective d'améliorer mon anglais m'a motivé. L'arrivée à Canterbury et l'accueil sur le campus compensèrent l'épuisement du voyage. J'ai été impressionné par la beauté du campus et par l'ambiance chaleureuse de mon bloc d'étudiants internationaux au Woolf College. Les premiers jours à l'Université de Kent étaient remplis de découvertes, de la ville animée de Canterbury à l'intégration avec mes colocataires de différents horizons. Malgré les défis, comme s'adapter à l'accent anglais, cette expérience a été très positive, offrant une véritable immersion dans la vie d'un étudiant universitaire international."
        />
        <meta
          name="keywords"
          content="Etudiant Epitech, Echange Université Kent, Woolf College, Canterbury, expérience internationale, Paul Rosset"
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
