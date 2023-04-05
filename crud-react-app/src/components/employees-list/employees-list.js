import React from "react";
import "./employeers-list.css";
import EmployeesListItem from "../employeers-list-item/employeers-list-item";
const EmployeesList = ({ data }) => {
  const dataElement = data.map((item) => {
    return <EmployeesListItem name={item.name} salary={item.salary} />;
  });

  return <ul className="app-list list-group">{dataElement}</ul>;
};

export default EmployeesList;
