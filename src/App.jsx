import FilterTab from './Pages/FilterTab';
import Header from './Pages/Header';
import Table from './Pages/Table';
import { DataContextProvider } from './Hooks/DataContext';

function App() {
    return (
    <div className="App">
      <DataContextProvider>
        <div className='App-main'>
            <Header/>
            <div className='main-content'>
                <div className='tab'></div>
                    <FilterTab/>
                    <Table/>    
          </div>   
        </div> 
      </DataContextProvider>
    </div>
  );
}

export default App;
