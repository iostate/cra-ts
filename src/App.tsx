import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import styled from "styled-components";
// import Tag from "./components/Tag/index";
import Grid from "uikit";
// import { Container, Row, Col } from "react-grid-system";
// import AppleRow from "./components/AppleRow";

const BUTTON = styled.button`
  border: 1px dotted yellow;
  background: white;
  color: black;
  font-weight: 500;
`;

const GradientBackground = styled.div`
  backgroundcolor: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)";
`;

const c = styled.div`
  display: flex
`

const z = "uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center uk-grid uk-grid-stack"
// const Item2 = styled.Paper`
// `

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'purple',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function App() {
  return (
    <div className={c}>

    <div className="uk-child-width-expand@s uk-text-center">
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      </div>
  
    </div>
  );
}

export default App;
