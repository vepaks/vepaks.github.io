import React from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
function App() {
  // we create data array with objects inside it for simulate data from server
  const data = [
    { name: "John S.", salary: 800 },
    { name: "Math A.", salary: 5000 },
    { name: "Alex B.", salary: 1200 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      {/* we pass data to EmployeesList component as a props*/}
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
