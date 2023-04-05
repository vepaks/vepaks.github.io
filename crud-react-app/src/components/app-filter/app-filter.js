import React from "react";
import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        Всички служители
      </button>
      <button className="btn btn-outline-light" type="button">
        Заплата по възходящ ред
      </button>
      <button className="btn btn-outline-light" type="button">
        Заплата повече от 1000$
      </button>
    </div>
  );
};


export default AppFilter;
