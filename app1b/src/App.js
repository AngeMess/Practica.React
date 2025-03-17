import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from './components/Accordion';
import Alerts from './components/Alerts';
import Headings from './components/Headings';
import Buttons from './components/Buttons';
import ButtonsGroups from './components/ButtonGroup'

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
   </>
  );
}

export default App;
