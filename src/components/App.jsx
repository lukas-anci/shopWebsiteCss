import '../style/App.css';
import Header from './Layout/Header';
import Hero from './Sections/Hero';
import 'font-awesome/css/font-awesome.css';

import Collections from './Sections/Collections/Collections';
import Shop from './Sections/Shop/Shop';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <Collections /> */}
      <Shop />
    </div>
  );
}

export default App;
