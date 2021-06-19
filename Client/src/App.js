import './App.css';
import NavigationBar from './NavigationBar'
import SideOptions from './SideOptions';
import Page from './Page';

function App() {
  document.title='Sapien Systems';
  return (
    <div className="App">
        <NavigationBar/>
        <div className="wrapper-home">

        <SideOptions/>
        <Page/>
        </div>
    </div>
  );
}

export default App;
