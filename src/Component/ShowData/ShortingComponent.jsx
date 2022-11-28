import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  DataModify,
  handleShortAtoZ,
  handleSortDefault,
  handleSortZtoA,
} from "../../Redux/features/postSlice";

const ShortingComponent = () => {
  let shortingData = [];
  let shortingDataZtoA = [];
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postsData);

  const handleDefault = () => {
    dispatch(handleSortDefault());
  };

  const handleAtoZ = () => {
    shortingData = [...posts];
    dispatch(handleShortAtoZ(shortingData));

    dispatch(DataModify());
  };
  const handleZtoA = () => {
    shortingDataZtoA = [...posts];
    dispatch(handleSortZtoA(shortingDataZtoA));

    dispatch(DataModify());
  };
  return (
    <>
      <DropdownButton title="Short" id="bg-nested-dropdown" className="mx-2 ">
        <Dropdown.Item onClick={handleDefault} className="text-center">
          Default
        </Dropdown.Item>
        <Dropdown.Item onClick={handleAtoZ} className="text-center">
          A - Z
        </Dropdown.Item>
        <Dropdown.Item onClick={handleZtoA} className="text-center">
          Z - A
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default ShortingComponent;
