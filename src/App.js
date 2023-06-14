import Router from './app/router';
import Footer from './components/Footer';
import Header from './components/Header';
import { FooterStyle, GlobalStyle, HeaderStyle } from './styles/style';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <HeaderStyle>
        <Header/>
      </HeaderStyle>
      <Router/>
      <FooterStyle>
        <Footer/>
      </FooterStyle>
    </>
  );
}

export default App;