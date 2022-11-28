import React, { useState } from "react";

import { FaRegEdit } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../../Redux/features/postSlice";
import "../ShowData/EditComponent.css";
const EditComponent = (props) => {
  const [status, setStatus] = useState(false);
  const [updateValue, setUpdateValue] = useState({
    name: "",
    city: "",
    age: "",
  });
  const { posts } = useSelector((state) => state.postsData);
  const dispatch = useDispatch();
  const handleEdit = () => {
    setStatus(!status);
    const data = posts[props.index];
    setUpdateValue({
      name: data.name,
      city: data.city,
      age: data.age,
    });
  };
  const handleUpdate = (e) => {
    setUpdateValue({ ...updateValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let index = props.index;

    dispatch(editData({ index, updateValue }));
  };
  return (
    <>
      <button onClick={handleEdit} className="EditBtn">
        <FaRegEdit />
      </button>

      {status ? (
        <div className="EditForm">
          <Form className="formComponent">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={updateValue.name}
                onChange={handleUpdate}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                value={updateValue.city}
                onChange={handleUpdate}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age"
                name="age"
                value={updateValue.age}
                onChange={handleUpdate}
              />
            </Form.Group>

            <button
              variant="primary"
              type="submit"
              className="UpdateBtn"
              onClick={handleSubmit}
            >
              Update
            </button>
            <button onClick={handleEdit} className="CloseBtn">
              Close
            </button>
          </Form>
        </div>
      ) : null}
    </>
  );
};

export default EditComponent;
