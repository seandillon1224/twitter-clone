import * as React from "react";
import Head from "next/head";
import styled from "styled-components";
import LoginForm from "components/LoginForm";

const StyledHome = styled.main`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "why-loom looming-login";
  .why-loom-pane {
    grid-area: "why-loom";
    border: solid 1px black;
    height: 100%;
    background: rebeccapurple;
  }

  .looming-login {
    grid-area: "looming-login";
    border: solid 1px black;
    height: 100%;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title> Loom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledHome>
        <div className="why-loom-pane">
          <div className="loom-descriptions">
            <span className="why-loom-item"> Follow your interests </span>
            <span className="why-loom-item"> </span>
            <span className="why-loom-item"> Weave your own narrative</span>
          </div>
        </div>

        <div className="looming-login">
          <LoginForm />
        </div>
      </StyledHome>
    </>
  );
}
