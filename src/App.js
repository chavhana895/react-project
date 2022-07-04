import './App.css';
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import logo from './logo.svg'
import './style.css'
import  StyledButton, {FancyButton, SubmitButton} from './components/Button';
import {AnimatedLogo, DarkButton} from './components/Button.styles'

const theme ={
  dark:{
    primary: '#000',
    text: '#fff'
  },
  light:{
    primary:'#fff',
    text:'#000'
  },
  fontFamily: 'Segoe UI'
}

const GlobalStyle = createGlobalStyle`
   button{
     font-family: ${(props) => props.theme.fontFamily};
   }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <div className="App">
      {/* <img src={logo} className='App-logo' alt='logo'/> */}
      <AnimatedLogo src={logo}></AnimatedLogo>
       <StyledButton type='submit'>Styled Button</StyledButton>
       <div><br/></div>
       <StyledButton variant='outline'>StyledButton</StyledButton>
       <div><br/></div>
       <FancyButton as='a'> Fancy Button </FancyButton>
       <div><br/></div>
       <SubmitButton>Submit</SubmitButton>
       <div><br/></div>
       <DarkButton>Dark Theme</DarkButton>
    </div>
    </ThemeProvider>
  );
}

export default App;
