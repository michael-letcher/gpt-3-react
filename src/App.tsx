import './App.scss';
import { Brand, CTA, Navbar } from './components';
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGpt,
} from './containers';

function App() {
  return (
    <>
      <div className="app">
        <div className="gradient__bg">
          <Navbar></Navbar>
          <Header></Header>
        </div>
        <Brand></Brand>
        <WhatGpt></WhatGpt>
        <Features></Features>
        <Possibility></Possibility>
        <CTA></CTA>
        <Blog></Blog>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
