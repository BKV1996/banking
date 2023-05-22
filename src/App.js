import Login from "./component/Login";
import SignUp from "./component/SignUp";
import CreateAcc from "./component/CreateAcc";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Layout from './hocs/layout/Layout';
import EmpData from "./component/empData/EmpData";
import CustomerData from "./component/customerData/CustomerData";
import UpdatePass from "./component/updatePass/UpdatePass";
import MenuE from "./component/menu/MenuE";
import MenuC from "./component/menu/MenuC";
import Error from './component/error/Error';
import VerifyAcc from "./component/verifyAcc/VerifyAcc";
import UpdateAcc from "./component/updateAcc/UpdateAcc";
import CurrentCustomerDta from "./component/customerData/CurrentCustomerDta";
import TransferMoney from "./component/transferMoney/TransferMoney";
import HomePage from "./component/login/HomePage";


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Layout/>} /> */}
          <Route path="/homePage" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<SignUp/>} />
          <Route path='/CreateAcc' element={<CreateAcc/>} />
          <Route path="/EmpData" element={<EmpData/>} />
          <Route path="/CustomerData" element={<CustomerData/>} />
          <Route path="/UpdatePass" element={<UpdatePass/>} />
          <Route path="/MenuE" element={<MenuE/>} />
          <Route path="/MenuC" element={<MenuC/>} />
          <Route path="/Error" element={<Error/>} />
          <Route path="/VerifyAcc" element={<VerifyAcc/>} />
          <Route path="/UpdateAcc" element={<UpdateAcc/>} />
          <Route path="/CurrentCustomerData" element={<CurrentCustomerDta/>} />
          <Route path="/TransferMoney" element={<TransferMoney/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
