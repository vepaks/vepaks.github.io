import React from "react";
import "./employees-add-form.css";

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Добави нов служител</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как се казва?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Заплата в $?"
        />

        <button type="submit" className="btn btn-outline-light">
          Добави
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
