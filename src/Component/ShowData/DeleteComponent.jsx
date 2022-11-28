import React from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../../Redux/features/postSlice";
import { RiDeleteBin5Fill } from "react-icons/ri";

import "../ShowData/DeleteComponent.css";
const DeleteComponent = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    let index = props.index;

    dispatch(deleteData(index));
  };
  return (
    <>
      <button onClick={handleDelete} className="DeleteBtn">
        <RiDeleteBin5Fill />
      </button>
    </>
  );
};

export default DeleteComponent;
