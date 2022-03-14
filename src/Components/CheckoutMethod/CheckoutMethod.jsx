import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../Actions/customerAction';
import PropTypes from 'prop-types';
import './styles.scss';

// name, address, city, telephone, postal code

const CheckoutMethod = ({ method }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [telephone, setTelephone] = useState("");
    const [postal, setPostal] = useState("");

    let [nameError, setNameError] = useState("");
    let [addressError, setAddressError] = useState("");
    let [cityError, setCityError] = useState("");
    let [telephoneError, setTelephoneError] = useState("");
    let [postalError, setPostalError] = useState("");

    const validateForm = (curr) => {
        let errors = false;

        if (curr === 2) {
            if (!validator.isAlpha(name)) {
                setNameError("Name can only be letters.");
                errors = true;
            } else {
                setNameError("");
            }
            
            if (!validator.isNumeric(telephone)) {
                setTelephoneError("Not a valid telephone.");
                errors = true;
            } else {
                setTelephoneError("");
            }
            
            if (validator.isNumeric(address)) {
                setAddressError("Address is not only numbers!");
                errors = true;
            } else {
                setAddressError("");
            }
            
            if (!validator.isAlpha(city)) {
                setCityError("City names don't include numbers.")
                errors = true;
            } else {
                setCityError("");
            }
            
            if (!validator.isNumeric(postal)) {
                setPostalError("Postal Codes are only numbers.")
                errors = true;
            } else {
                setPostalError("");
            }
        } else {
            if (!validator.isAlpha(name)) {
                setNameError("Name can only be letters.");
                errors = true;
            } else {
                setNameError("");
            }

             if (validator.isNumeric(address)) {
                setAddressError("Address is not only numbers!");
                errors = true;
            } else {
                setAddressError("");
            }
    }
        
        if (errors) {
            return false;
        }

        return true;

    }

    const submitForm = (e, curr) => {
        e.preventDefault();

        if (!validateForm(curr)) {
        } else {
            console.log("SUCCESSS");
            if (curr === 2) {
                const info = ['Delivery', name, address, city, telephone, postal];
                console.log(info);
                dispatch(addCustomer(info));
            } else {
                const info = ['Pickup', name, telephone];
                console.log(info);
                dispatch(addCustomer(info));
            }
            navigate("/cart/checkout/review", {replace: true});
        }
    }


    return (
        method === 1
        ?
        <div className="methodContainer">
            <form onSubmit={ e => submitForm(e, 1) }>
                <label> Name
                    <div className="fiBox">
                        <input type="text" className="dName" onChange={(e) => setName(e.target.value)} />
                        <span className='errorMsg'> {nameError} </span>
                    </div>
                </label>
                <label> Telephone
                    <div className="fiBox">
                        <input type="text" className="dTelephone" onChange={(e) => setTelephone(e.target.value)} />
                        <span className='errorMsg'> {telephoneError} </span>
                    </div>
                </label>
                <input type="submit" className="dSubmitter" />
            </form>
        </div>
        :
        <div className="methodContainer">
            <form onSubmit={ e => submitForm(e, 2) }>
                <label> Name
                    <div className="fiBox">
                        <input type="text" className="dName" onChange={(e) => setName(e.target.value)} />
                        <span className='errorMsg'> {nameError} </span>
                    </div>
                </label>

                <label> Address
                    <div className="fiBox">
                        <input type="text" className="dAddress" onChange={(e) => setAddress(e.target.value)} />
                        <span className='errorMsg'> {addressError} </span>
                    </div>
                </label>
                
                <label> City
                    <div className="fiBox">
                        <input type="text" className="dCity" onChange={(e) => setCity(e.target.value)} />
                        <span className='errorMsg'> {cityError} </span>
                    </div>
                </label>

                <label> Telephone
                    <div className="fiBox">
                        <input type="text" className="dTelephone" onChange={(e) => setTelephone(e.target.value)} />
                        <span className='errorMsg'> {telephoneError} </span>
                    </div>
                </label>

                <label> Postal Code
                    <div className="fiBox">
                        <input type="number" className="dPostalCode" onChange={(e) => setPostal(e.target.value)} />
                        <span className='errorMsg'> {postalError} </span>
                    </div>
                </label>
                <input type="submit" className='dSubmitter' />
            </form>
        </div>
    )
}


CheckoutMethod.propTypes = {
    method: PropTypes.number.isRequired, // Selector Method should be an integer
}

export default CheckoutMethod;