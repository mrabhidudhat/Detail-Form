import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sform = () => {
  const [formData, setFormData] = useState([]);
  const DetailById = (id) => {
    const selectedItem = formData.find((data) => data.id === id);
    const selectLocal = localStorage.setItem(
      "localSelect",
      JSON.stringify(selectedItem)
    );
  };

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      const parsedData = JSON.parse(storedFormData);
      setFormData(parsedData);
    }
  }, []);

  return (
    <div>
      <h2 className="Sform-data">Stored Form Data</h2>
      <ol className="Sform-data-list">
        {formData.map((data) => (
          <li key={data.id}>
            {data.Fname} {data.Lname}
            <Link to="/DetailPage">
              <button className="Sform-btn" onClick={() => DetailById(data.id)}>
                {"===>"}
              </button>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Sform;
