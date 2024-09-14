import React, { useRef } from "react";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";
import "./App.css";

const App = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const wishRef = useRef();
  const optionRef = useRef();

  const options = [
    { key: "1", label: "₹1" },
    { key: "2", label: "₹2" },
    { key: "3", label: "₹3" },
  ];

  const handlePayment = async (price) => {
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const wish = wishRef.current.value;

    const options = {
      key: "rzp_test_ju5jEL5tkrSPGE", // Your API Key ID
      amount: price * 100, // Amount in paise (₹1 = 100 paise)
      currency: "INR",
      name: name,
      description: wish,
      image: "https://your-logo-url.com", // Your logo URL (optional)
      handler: function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        
      },
      prefill: {
        name: name,
        contact: phone,
        email: "example@example.com", 
      },
      theme: {
        color: "#3399cc", // Customize payment UI color
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = optionRef.current.value;
    handlePayment(price); 
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
              ref={nameRef}
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
              ref={phoneRef}
              required
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
              ref={wishRef}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Select
              variant="underlined"
              label="How Much You Want To Pay ₹"
              required
              id="option"
              ref={optionRef}
            >
              {options.map((option) => (
                <SelectItem key={option.key} value={option.label}>
                  {option.label}
                </SelectItem>
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
