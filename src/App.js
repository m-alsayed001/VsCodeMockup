import './App.css';
import SideNavbar from './components/sidebar/sidenav';
import StickyFooter from './components/sticky/stickyfooter';
import StickyHeader from './components/sticky/SearchBar';


function App() {
  return (
    <div className="App">
      <StickyHeader />
      <SideNavbar />
      <StickyFooter />
    </div>
  );
}

export default App;
