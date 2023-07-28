import React, { useState } from "react";
import { TextField, Button, Container, Stack } from '@mui/material';
import CasteCheckbox from "./extra";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [organization, setOrganization] = useState("");
  const [studentName, setStudentName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [incomeCertificate, setIncomeCertificate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server or perform further actions.
    // You can access the form data using the state variables defined above.
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Payment Form</h1> 
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px",marginTop:'50px' }}>
        <TextField
          label="Payment method "
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          variant="outlined"
          color="secondary"
          required
          fullWidth
        />
        <TextField
          label="Organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          variant="outlined"
          color="secondary"
          required
          fullWidth
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <TextField
          label="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          variant="outlined"
          color="secondary"
          required
          fullWidth
        />
        <TextField
          label="Aadhar"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
          variant="outlined"
          color="secondary"
          required
          fullWidth
        />
      </div>
      <div>
        <TextField
          label="Income Certificate"
          value={incomeCertificate}
          onChange={(e) => setIncomeCertificate(e.target.value)}
          variant="outlined"
          color="secondary"
          required
          fullWidth
        />
      </div>
      <br/>
      <CasteCheckbox/>
    </form>
  );
};

export default PaymentForm;
