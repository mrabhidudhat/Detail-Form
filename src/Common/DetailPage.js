import React, { useState, useEffect } from "react";

const DetailPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataStored = localStorage.getItem("localSelect");
    if (dataStored) {
      const getedData = JSON.parse(dataStored);
      setData(getedData);
    }
  }, []);

  return (
    <div className="detail-page">
      <h2>Detail Page</h2>
      {data ? (
        <div className="detail-item">
          <p className="list-item">
            <b>First Name:</b> {data.Fname}
          </p>
          <p className="list-item">
            <b>Middle Name:</b> {data.Mname}
          </p>
          <p className="list-item">
            <b>Last Name:</b> {data.Lname}
          </p>
          <p className="list-item">
            <b>Date :</b> {data.date}
          </p>
          <p className="list-item">
            <b>Gender:</b> {data.gender}
          </p>
          <p className="list-item">
            <b>Mobile No:</b> {data.Mono}
          </p>
          <p className="list-item">
            <b>Email Id:</b> {data.Eid}
          </p>
          <p className="list-item">
            <b>Address:</b> {data.Add}
          </p>
          <p className="list-item">
            <b>City:</b> {data.city}
          </p>
          <p className="list-item">
            <b>State:</b> {data.state}
          </p>
          <p className="list-item">
            <b>Pin Code: </b> {data.pin}
          </p>
        </div>
      ) : (
        <p>Item not found.</p>
      )}
    </div>
  );
};

export default DetailPage;
