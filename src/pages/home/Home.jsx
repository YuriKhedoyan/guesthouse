import { React, lazy } from "react";
import { Container } from "@mui/material";

import { withSuspense } from "../../helpers/withSuspense";

import pic1 from "../../assets/images/9S5A9235-1-scaled.jpg"

import './Home.sass'

const Home = () => {

  const Img = withSuspense(lazy(() => import('../../compontents/img/Img')));
  const Header = withSuspense(lazy(() => import('../../section/header/Header')));

  return (
    <>

      <Img picture={pic1} alt="Spruce branch" imgId="mainImage" />
      <h2 className="centered">KHEDOYANS GUESTHOUSE</h2>
      <Container>
        <div className="top-left">
          <Header />
        </div>
      </Container>
      <br></br>
      <br></br>
    </>
  )
}

export default Home;
