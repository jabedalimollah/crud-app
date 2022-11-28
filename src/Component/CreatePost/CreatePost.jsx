import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData } from "../../Redux/features/postSlice";
import "../CreatePost/CreatePost.css";
const CreatePost = () => {
  const [value, setValue] = useState({
    name: "",
    city: "",
    age: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
    dispatch(addData(value));
  };
  return (
    <>
      <div className="create-post">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              onChange={textChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              name="city"
              onChange={textChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter age"
              name="age"
              onChange={textChange}
            />
          </Form.Group>
          <Form.Group className="buttonGroup">
            <button type="submit" onClick={handleSubmit} className="submitBtn">
              Submit
            </button>
            <button type="reset" className="resetBtn">
              Reset
            </button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default CreatePost;
