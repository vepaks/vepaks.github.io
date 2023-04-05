import React from "react";
import "./employeers-list.css";
import EmployeersListItem from "../employeers-list-item/employeers-list-item";
const EmployeersList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeersListItem />
      <EmployeersListItem />
      <EmployeersListItem />
    </ul>
  );
};

export default EmployeersList;
