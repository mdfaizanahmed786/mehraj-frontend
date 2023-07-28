import React, { useState } from 'react';

const CasteCheckbox = () => {
  const [checkboxValues, setCheckboxValues] = useState({
    bc: false,
    general: false,
    scSt: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  return (
    <div>
      <label style={{fontSize:25,color:'secondary'}}>
        Caste:
      </label>
      <div style={{padding:'10px'}}>
        <label>
          BC
          <input
            type="checkbox"
            name="bc"
            checked={checkboxValues.bc}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          General
          <input
            type="checkbox"
            name="general"
            checked={checkboxValues.general}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          SC/ST
          <input
            type="checkbox"
            name="scSt"
            checked={checkboxValues.scSt}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: '20px' }}>
        <button style={styles.button}>View Memo</button>
        <button style={styles.button}>View Caste Certificate</button>
        <button style={styles.button}>View Aadhar</button>
        <button style={styles.button}>View Income Certificate</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button style={styles.approveButton}>Approve</button>
        <button style={styles.rejectButton}>Reject</button>
      </div>
    </div>
   

  );
};

const styles = {
  button: {
    padding: '10px 20px',
    margin: '5px',
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  approveButton: {
    padding: '10px 20px',
    margin: '5px',
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  rejectButton: {
    padding: '10px 20px',
    margin: '5px',
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};


export default CasteCheckbox;

