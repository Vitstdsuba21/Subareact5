import React, { Component } from 'react';
const AgeResult=({age})=>{
    return <h3>You are {age.years} years,{age.months} months,{age.days} days old.</h3>;
}
export default AgeResult;
