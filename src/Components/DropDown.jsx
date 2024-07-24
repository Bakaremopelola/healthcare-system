import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const DropdownComponent = ({ onSelect, options, title }) => {
  const [selectedOption, setSelectedOption] = useState(title);

  const handleSelect = (e) => {
    setSelectedOption(e);
    onSelect(e);
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={selectedOption}
      onSelect={handleSelect}
      className="my-3"
    >
      {options.map((option, index) => (
        <Dropdown.Item eventKey={option} key={index}>
          {option}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownComponent;
