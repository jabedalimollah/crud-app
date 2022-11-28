import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleSearchOption,
  handleCloseOption,
} from "../../Redux/features/postSlice";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

import "./SearchComponent.css";
const SearchComponent = () => {
  const [value, setValue] = useState("");
  const [statement, setStatement] = useState(true);

  const dispatch = useDispatch();
  const handleSearchText = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      setStatement(!statement);
    }
  };
  const handleSearchBtn = () => {
    dispatch(handleSearchOption(value));
    setStatement(!statement);
  };
  const handleCancle = () => {
    setStatement(!statement);
    dispatch(handleCloseOption());
    setValue("");
  };

  return (
    <>
      <input
        type="text"
        onChange={handleSearchText}
        className="searchInputBox"
        value={value}
        style={{ paddingLeft: "9px" }}
        placeholder="Search Name"
      />
      {statement ? (
        <button type="button" onClick={handleSearchBtn} className="searchIcon">
          <FiSearch />
        </button>
      ) : (
        <button type="button" onClick={handleCancle} className="closeIcon">
          <GrClose />
        </button>
      )}
    </>
  );
};

export default SearchComponent;
