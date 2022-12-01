import { useState } from "react"
import MortgageValueComponent from "./MortgageValueComponent";

const SalaryComponent = ()=>{

    const [salary, setSalary] = useState("")
    const [yourSalary,setYourSalary] = useState("")

    const handleInputChange = (event) =>{
        setSalary(event.target.value);
    };

    
    
    const savedSalary = (event) => {
        event.preventDefault()
        setYourSalary(salary)
        
    };
    
    return(
        <div>
            <form onClick={savedSalary}>
                <label>Insert your Salary:</label> <br></br>
                <input type="text" id = "your-salary" onChange={handleInputChange}></input>
                <input type="submit" value="save salary" className={"button"} />
            </form>
            
            <MortgageValueComponent yourSalary={yourSalary} id = "your salary"/>

            
        </div>

    );


};

export default SalaryComponent