import React, { Component, useState } from 'react';

const AgeCalculatorForm = ({calculateAge}) => {
    const [birthDate,setBirthDate]=useState('');
    const handleChangeDate=(date)=>{
        setBirthDate(date.target.value);
    }
    const handleSubmit=(date)=>{
        date.preventDefault();
        calculateAge(birthDate);
    }
    return (  
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
            crossOrigin="anonymous"></link>
            <form onSubmit={handleSubmit}>
            <div className="form-group ">
                <h5 >Enter your date of birth</h5><br/>
                <input type="date" value={birthDate} onChange={handleChangeDate}/>
            </div><br/>
            <button type="submit" disabled={!birthDate} className="btn btn-primary">Submit</button>
            </form>
        </div>
        
        
    );
  }
  export default AgeCalculatorForm;
  