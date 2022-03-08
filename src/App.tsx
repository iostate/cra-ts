import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Tag from './components/Tag/index'
import {Grid, Paper, Box} from '@mui/material';
import {Container, Row, Col} from 'react-grid-system';
import AppleRow from "./components/AppleRow"

const BUTTON = styled.button`
  border: 1px dotted yellow;
  background: white;
  color: black;
  font-weight: 500;  
`

const GradientBackground = styled.div`
  backgroundColor: 'linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)';
`;

// const Item2 = styled.Paper`

// `

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'purple',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className='app'>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          {/* <Item>1</Item> */}
          <p>1</p>
        </Grid>
        <Grid item xs={6}>
          {/* <Item>2</Item> */}
          <p>1</p>
        </Grid>
        <Grid item xs={6}>
          {/* <Item>3</Item> */}
          <p>1</p>
        </Grid>
        <Grid item xs={6}>
          {/* <Item>4</Item> */}
          <p>1</p> 
          <BUTTON>FIFTEEN
            
          </BUTTON>
        </Grid>
      </Grid>
    </Box>
      {/* <section>
        <BUTTON>First Btn</BUTTON>
        <BUTTON>Second Btn</BUTTON>
      </section> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Tag /> */}
    </div>
  );
}

export default App;
