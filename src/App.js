import Home from './component/Home';
// import signUp from './signUp';
import DataProvider from './context/DataProvider.jsx';
// import Code from './components/Code';

function App() {
  return (
    <DataProvider>    
      <Home/>
      {/* <signUp/> */}
    </DataProvider>
  );
}

export default App;
