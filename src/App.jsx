import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";

import "./App.css";

const App = () => {

  
  

const options = [
  { key: "1", label: "₹1" },
  { key: "2", label: "₹2" },
  { key: "3", label: "₹3" },
];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="styled-form">
        <div className="form-group">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="text"
              label="Enter your Name"
              id="name"
              name="name"
              variant="underlined"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="text"
              label="Enter your phone Number"
              id="phonenumber"
              name="phonenumber"
              variant="underlined"
              placeholder="+91"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="text"
              label="What Do You Want To Be"
              variant="underlined"
              id="wish"
              name="wish"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Select
              variant="underlined"
              label="How Much You Will Pay ₹"
              required
              id="option"
            >
              {options.map((option) => (
                <SelectItem key={option.key}>{option.label}</SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <Button type="submit" className="submit-button">
          Pay
        </Button>
      </form>
    </div>
  );
};

export default App;


