import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`

body {
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    background-color: aliceblue;

    div{
        max-width: 500px;
    }

    h2 {
        text-align: center;

    }
}

`;

const smallCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 100px;
  min-width: 320px;

  img {
    height: 32px;
    width: 32px;
    padding-right: 10px;
  }
`;

const bigCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
  min-width: 320px;

  img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
  }

  h4 {
    margin-bottom: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
  }
`;

const buttonStyles = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;

  img {
    width: 30px;
    margin-right: 10px;
  }
`;

export { smallCard, bigCard, globalStyles, buttonStyles };
