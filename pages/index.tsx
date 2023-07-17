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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.head}>
          <h1 className={utilStyles.headingLg}>
            Blog Kent University / Epitech - 2017/2018
          </h1>
          <h2 className={utilStyles.headingLg}>🇬🇧 - 🇫🇷</h2>
          <p className={utilStyles.resume}>
            Nous sommes des étudiants à Epitech et souhaitons faire partager à
            notre tour notre "International Duty".
            <br />
            Nous avons choisi de faire cette dernière en Angleterre, à Kent
            University, une université au sein de Canterbury, qui est une petite
            cité du Kent.
            <br />
            Régulièrement, pendant notre année en Angleterre nous ferons de
            nombreux articles qui relateront nos aventures afin que vous ayez
            une idée de la destination tant du côté de l'université que du côté
            de la ville et de ses activités. Le blog qui suit démarrera à partir
            du moment où l'on connaitra notre destination jusqu'au retour et la
            fin de cette dernière.
            <br />
            <br />
            C'est également une sacré expérience que de partir avec des amis à
            l'étranger dans un pays que ne l'on ne connait pas, ce voyage est
            aussi pour nous une page de notre vie qui se doit d'être écrite
            comme il se doit ! Puis, à l'avenir cela nous permettra de se
            remémorer les bons souvenirs de la vie étudiante.
            <br />
            <br />
            Les faits et les appréciations que nous donnerons, seront uniquement
            nos ressentis.
            <br />
            <br />
            Les posts ne répondent pas à une de tes questions ? Contacte moi par
            grâce aux reseaux sociaux!
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
