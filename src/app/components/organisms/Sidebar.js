import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ categories }) => {
  return (
    <aside className="bg-light p-4 rounded shadow-sm">
      <h2 className="h4 mb-3">Categorías</h2>
      <ul className="list-unstyled">
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <a href="#" className="text-dark text-decoration-none">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};


export default Sidebar;
