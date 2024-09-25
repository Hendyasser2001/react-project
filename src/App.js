
import './App.css';
import { NavBar } from './component/nav';
import { Banner} from './component/banner';
import {Skill} from './component/skill';
import {Myprojects} from './component/myproject';
import{Cards} from './component/cards'
import { Contact } from './component/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './component/footer'

function App() {
  return (
   <div className="App">
    <NavBar/>
    <Banner/>
    <Skill/>
    <Myprojects/>
    <Cards/>
    <Contact/>
    <Footer/>



   </div>
  );
}

export default App;
