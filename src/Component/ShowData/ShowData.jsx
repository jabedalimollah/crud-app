import React from "react";
import { useSelector } from "react-redux";

import DeleteComponent from "./DeleteComponent";
import EditComponent from "./EditComponent";

import "./ShowData.css";
import SearchComponent from "./SearchComponent";
import ShortingComponent from "./ShortingComponent";
const ShowData = () => {
  const { posts, temp, status } = useSelector((state) => state.postsData);

  return (
    <>
      <div className="box container-fluid ">
        <div className="col-md-12 bg-dark text-end d-flex justify-content-end">
          <ShortingComponent />
          <SearchComponent />
        </div>

        {status ? (
          <table className="table table-striped table-hover table-dark  ">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>City</th>
                <th>Age</th>

                <th colSpan="2">Option</th>
              </tr>
            </thead>
            <tbody>
              {temp.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.age}</td>

                    <td className="p-0 m-0 g-0">
                      <EditComponent index={index} />
                    </td>

                    <td className="p-0 m-0 g-0">
                      <DeleteComponent index={index} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table className="table table-striped table-hover table-dark  ">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>City</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ShowData;
