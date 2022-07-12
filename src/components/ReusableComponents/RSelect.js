import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const RSelect = ({
  id,
  options,
  getOptionLabel,
  getOptionValue,
  onChange,
  placeholder,
  name,
  isSearchable,
  isDisabled,
}) => (
  <Select
    id={id}
    options={options}
    getOptionLabel={getOptionLabel}
    getOptionValue={getOptionValue}
    onChange={onChange}
    isSearchable={isSearchable}
    placeholder={placeholder}
    name={name}
    isDisabled={isDisabled}
  />
);

RSelect.propTypes = {
  id: PropTypes.string,
  options: PropTypes.array,
  getOptionLabel: PropTypes.func,
  getOptionValue: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

RSelect.defaultProps = {
  options: [],
  getOptionLabel: () => {},
  getOptionValue: () => {},
  onChange: () => {},
  placeholder: "Select",
  name: "",
  isSearchable: false,
  isDisabled: false,
};

export default RSelect;
