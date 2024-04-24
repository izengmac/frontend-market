import './App.css';
import LoginManagement from './pages_management/LoginManagement.js';
import RecoverPasswordManagement from './pages_management/RecoverPasswordMangement';
import PersonalDetailsManagement from './pages_management/PersonalDetailsManagement';
import  ClientsOrders from './pages_management/ClientsOrders.js';
import ClientsOrdersDetails from './pages_management/ClientsOrdersDetails.js';
import ListSuppliers from './pages_management/ListSuppliers.js';


function App() {
  return (
    <div className="App">
      <ListSuppliers/>
    </div>
  );
}

export default App;
