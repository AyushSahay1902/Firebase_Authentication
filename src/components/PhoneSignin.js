import React, { useState } from 'react'
import { Button, Form, Alert } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const PhoneSignin = () => {
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");
    const [otp, setOtp] = useState("");
    const [flag, setFlag] = useState(false);
    const [confirmObj, setConfirmObj] = useState("");
    const {setUpRecaptcha} = useUserAuth();
    const navigate = useNavigate();

    const getOtp = async (e) => {
        e.preventDefault();
        setError("");
        if(number === "" || number === undefined) {
            return setError("Please enter a valid phone number!");
        }
        try{
            const response = await setUpRecaptcha(number);
            console.log(response);
            setConfirmObj(response);
            setFlag(true);
        }catch(error){
            setError(error.message);
        }
        
        console.log(number);
    }

    const verifyOtp = async (e) => {
        e.preventDefault();
        console.log(otp);
        if(otp === "" || otp === undefined) {
            return setError("Please enter a valid otp!");
        }
        try{
            setError("");
            await confirmObj.confirm(otp);
            navigate("/home");
        } catch(error){
            setError(error.message);
        }

    }

  return (
    <>
        <div className='p-4 box'>
            <h2 className='mb-3'>Firebase Auth Phone Signin</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={getOtp} style={{display: !flag ? "block" : "none"}}>
                <Form.Group className='mb-3' controlId='formBasicPhoneNumber'>
                    <PhoneInput 
                        defaultCountry='PH'
                        value={number}
                        onChange={setNumber}
                        placeholder='Enter phone number'
                    />
                    <div id="recaptcha-container" />
                </Form.Group>
                <div className='button-right'>
                    <Link to='/'>
                    <Button variant='secondary'>Cancel</Button>&nbsp;
                    </Link>
                    <Button variant='primary' type='Submit'>Send Otp</Button>
                </div>
            </Form>
{/* //onClick={() => {setFlag: true}} */}
            <Form onSubmit={verifyOtp} style={{display: flag ? "block" : "none"}}>
                <Form.Group className='mb-3' controlId='formBasicotp'>
                    <Form.Control
                        type='otp'
                        placeholder='Enter otp'
                        onChange={(e) => setOtp(e.target.value)}
                    />    
                </Form.Group>
                <div className='button-right'>
                    <Link to='/'>
                    <Button variant='secondary'>Cancel</Button>&nbsp;
                    </Link>
                    <Button variant='primary' type='Submit'>Verify Otp</Button>
                </div>
            </Form>


        </div>
    </>
  )
}

export default PhoneSignin
