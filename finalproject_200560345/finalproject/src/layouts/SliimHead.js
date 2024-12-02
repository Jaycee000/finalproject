import Head from "next/head";
import { Fragment, useContext } from "react";
import { Context } from "../context/context";

const colors = [
  { id: 1, name: "amber" },
  { id: 2, name: "blue" },
  { id: 3, name: "brown" },
  { id: 4, name: "cyan" },
  { id: 5, name: "deeporange" },
  { id: 6, name: "deeppurple" },
  { id: 7, name: "green" },
  { id: 8, name: "grey" },
  { id: 9, name: "indigo" },
  { id: 10, name: "lightblue" },
  { id: 11, name: "pink" },
  { id: 12, name: "purple" },
  { id: 13, name: "red" },
  { id: 14, name: "teal" },
];

const SliimHead = () => {
  const { color } = useContext(Context);
  return (
    <Fragment>
      <Head>
        <title>Tran - Portfolio</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* Template Google Font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Template CSS Files */}
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/simplebar.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/owl.theme.default.min.css"
        />
        <link rel="stylesheet" href="css/style.css" />
        <link
          type="text/css"
          media="all"
          href={`css/skins/${color}.css`}
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
      </Head>
    </Fragment>
  );
};
export default SliimHead;
