import "./App.css"
import Sidebar from "./components/Sidebar";
import SearchAppBar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom';
import Departments from "./components/Departments";
import Scholarships from "./components/Scholarships";
import AddDepartment from "./components/AddDepartment";
import EditDepartment from "./components/EditDepartment";
import ScholarshipForm from "./components/ScholarshipsForm";
import PaymentForm from "./components/PaymentForm";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
    <div Classname="App">
      <SearchAppBar/>
      <div style={{display:"flex"}}>
      <Sidebar/>
  
        <Routes>
          <Route exact path="/departments" element={<Departments/>}/>
            <Route exact path="/departments/AddDepartments" element={<AddDepartment/>}/>
            <Route exact path="/departments/EditDepartments/:departmentId" element={<EditDepartment/>}/>
          <Route exact path="/scholarship" element={<Scholarships/>}/>
           <Route exact path="/scholarship/studentdetails/:id" element={<ScholarshipForm/>}/>
           <Route exact path="/scholarship/payment" element={<PaymentForm/>}/>  

        </Routes>
      
      </div>
     
    </div>
    </QueryClientProvider>
  )
}

export default App



