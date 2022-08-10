import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import StateContext from "../context/StateContext";
import { runFireWorks } from "../lib/utils";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } =
    useContext(StateContext);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks();
    return () => {};
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt </p>
        <p className="description">
          If you have any questions, please email:
          <a className="email" href="mailto:mohamedgk5@gmail.com">
            mohamedgk5@gmail.com
          </a>
        </p>
        <Link href="/">
          <button className="btn " width="300px" type="button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
