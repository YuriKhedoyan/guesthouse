import React from "react";
import { Container} from "@mui/material";

import Header from "../../section/header/Header";

import './Home.sass'

const Home = () => {
  return (
    <>
      <Container>
        <Header/>
      </Container>
      <section>
        Section 1
      </section>
    </>
  )
}

export default Home;
