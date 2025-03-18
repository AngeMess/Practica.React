
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from './components/Accordion';
import Alerts from './components/Alerts';
import Headings from './components/Headings';
import Buttons from './components/Buttons';
import ButtonsGroups from './components/ButtonGroup';
import Cards from './components/Cards';
import Carousel from './components/Carousel';

function App() {
  return (
   <>
   <Accordion/>
   <br/><br/><br/>
   <Alerts/>
   <br/><br/><br/>
   <Headings/>
   <br/><br/><br/>
   <Buttons/>
   <br/><br/><br/>
   <ButtonsGroups/>
   <br/><br/><br/>
   <Cards/>
   <br/><br/><br/>
   <Carousel/>
   </>
  );
}

export default App;
