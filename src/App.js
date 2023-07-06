import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MBody from './components/MBody';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import Display from './components/Display';
import NavBar from './components/NavBar';
import AddTwrMannually from './components/AddTwrMannually';
import AddOptions from './components/AddOptions';
import AddTwrFile from './components/AddTwrFile';
import UpdateOption from './components/UpdateOption';
import UpdateTwrFile from './components/UpdateTwrFile';
import UpdateManually from './components/UpdateManually';
import UpdateForm from './components/UpdateForm';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ListTowerComponent from './components/ListTowerComponent';
function App() {
  let towers=[
    {
      sapid:"Tower 1",
      state:"Gujarat",
      district:"Narmada",
      block:"Dediapada",
      village:"Village 1",
      commissionDate:"9/9/2021",
      census_code:"150990",
      project:"Project 1",
      appendixNo:"1",
      date:"2/5/2023",
      pcu:8,
      it:187,
      vt:3563,
      tt:84
    },
    {
      sapid:"Tower 1",
      state:"Gujarat",
      district:"Narmada",
      block:"Dediapada",
      village:"Village 1",
      commissionDate:"9/9/2021",
      census_code:"150990",
      project:"Project 1",
      appendixNo:"1",
      date:"2/5/2023",
      pcu:8,
      it:187,
      vt:3563,
      tt:84
    },
    {
      sapid:"Tower 1",
      state:"Gujarat",
      district:"Narmada",
      block:"Dediapada",
      village:"Village 1",
      commissionDate:"9/9/2021",
      census_code:"150990",
      project:"Project 1",
      appendixNo:"1",
      date:"2/5/2023",
      pcu:8,
      it:187,
      vt:3563,
      tt:84
    },
    {
      sapid:"Tower 1",
      state:"Gujarat",
      district:"Narmada",
      block:"Dediapada",
      village:"Village 1",
      commissionDate:"9/9/2021",
      census_code:"150990",
      project:"Project 1",
      appendixNo:"1",
      date:"2/5/2023",
      pcu:8,
      it:187,
      vt:3563,
      tt:84
    },
    {
      sapid:"Tower 1",
      state:"Gujarat",
      district:"Narmada",
      block:"Dediapada",
      village:"Village 1",
      commissionDate:"9/9/2021",
      census_code:"150990",
      project:"Project 1",
      appendixNo:"1",
      date:"2/5/2023",
      pcu:8,
      it:187,
      vt:3563,
      tt:84
    },
  ]
  return (
    <BrowserRouter>
      <div className="App">
          <Header title="Data Management System"></Header>
          <NavBar></NavBar>
          <Routes>    
            <Route path="/addOptions" element={<AddOptions></AddOptions> }/>    
            <Route path="/addTwrMannually" element={<AddTwrMannually></AddTwrMannually> }/>   
            <Route path="/addTwrFile" element={<AddTwrFile></AddTwrFile> }/>                                    
            {/* <Route path="/display" element={<Display towers={towers}></Display> }/> */}
            <Route path="/display" element={<ListTowerComponent /> }/>
            <Route path="/searchBar" element={<SearchBar></SearchBar> }/> 
            <Route path="/searchResult" element={<SearchResult towers={towers}></SearchResult> }/>                 
            <Route path="/updateOption" element={<UpdateOption></UpdateOption> }/>                 
            <Route path="/updateManually" element={<UpdateManually towers={towers}></UpdateManually> }/>                 
            <Route path="/updateForm" element={<UpdateForm towers={towers}></UpdateForm> }/>        
            <Route path="/updateTwrFile" element={<UpdateTwrFile></UpdateTwrFile> }/>              
            <Route path="/" element={<MBody></MBody> }/>
          </Routes>
          <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
