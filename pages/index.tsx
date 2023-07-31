import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import Image from "next/image";

import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    picture: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4ND80VL3JT" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-4ND80VL3JT');
        `}
      </Script>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.head}>
          <h1 className={utilStyles.headingLg}>
            Blog Kent University / Epitech - 2017/2018 - Etudiant
          </h1>
          <h2 className={utilStyles.headingLg}>🇬🇧 - 🇫🇷</h2>
          <p className={utilStyles.resume}>
            Nous, étudiants Epitech, embarquons pour notre "International Duty"
            à l'Université de Kent, en Angleterre. Nous partagerons ici notre
            voyage académique et personnel au cœur de Canterbury, une charmante
            cité du Kent.
            <br />
            Au cours de notre année à l'étranger, nous vous présenterons une
            série d'articles décrivant nos aventures. Nous vous donnerons un
            aperçu de la vie à l'Université de Kent, de la ville de Canterbury,
            et de nos activités. Notre blog vous accompagne depuis l'annonce de
            notre destination jusqu'à la fin de notre séjour.
            <br />
            <br />
            Partir à l'étranger avec des amis dans un pays inconnu est une
            expérience unique. Ce voyage représente un chapitre important de
            notre vie d'étudiant, rempli de souvenirs que nous sommes impatients
            de partager avec vous.
            <br />
            <br />
            Nous partagerons nos expériences et perceptions personnelles pour
            vous donner un aperçu authentique de notre voyage d'étude à
            l'Université de Kent.
            <br />
            <br />
            Vous avez des questions non abordées dans nos articles de blog ?
            N'hésitez pas à nous contacter sur les réseaux sociaux !
          </p>
        </div>
        <ul
          className={utilStyles.list}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "3rem",
            rowGap: 14,
            columnGap: 10,
          }}
        >
          {allPostsData.map(({ id, date, title, picture }) => (
            <li className={utilStyles.listItem} key={id}>
              <div style={{ position: "relative" }}>
                <Link href={`/posts/${id}`}>
                  <Image
                    src={picture}
                    width={400}
                    height={250}
                    alt={title}
                    style={{ objectFit: "fill" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                    }}
                  >
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {title}
                    </span>
                    <br />
                    <small
                      style={{ color: "white" }}
                      className={utilStyles.lightText}
                    >
                      <Date dateString={date} />
                    </small>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
