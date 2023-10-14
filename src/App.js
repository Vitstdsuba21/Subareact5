import { useState } from "react";
import AgeCalculatorForm  from "./components/agecalculatorform";
import AgeResult from "./components/ageResult";
import {differenceInDays, differenceInMonths, differenceInYears} from 'date-fns';
function App() {
  const [age,setAge]=useState(null);
  const calculateAge=(birthDate)=>{
    const today=new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears=differenceInYears(today,birthDateObj);
    const ageMonth=differenceInMonths(today,birthDateObj);
    const ageDays=differenceInDays(today,birthDateObj);
   // console.log(years,month,days);
    setAge({
      years:ageYears,
      months:ageMonth,
      days:ageDays
    });
  }
  return (
    <div className="mx-auto w-25 mt-5 border border-secondary p-3 bg-info">
      <center ><h1 className="text-danger">Age Calculator</h1><br/>
      
      <AgeCalculatorForm  calculateAge={calculateAge}/><br/>
      {age &&<AgeResult className="text-success" age={age} />}</center>
    </div>
  );
}

export default App;