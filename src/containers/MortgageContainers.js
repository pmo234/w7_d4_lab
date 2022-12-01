import HeaderComponent from "../components/HeaderComponent"
import SalaryComponent from "../components/SalaryComponent"
import { useState } from "react"

const MortgageContainers = ()=>{

    // const [salary, setSalary] = useState([])

    // const handleInputChange = (event) =>{
    //     setSalary(event.target.value);
    // };
   
    // let yourSalary = 0;

    // const savedSalary = (submittedSalary,event) => {
    //     event.preventDefault()
    //     const copySalary = [...salary,submittedSalary]
    //     setSalary(copySalary)
    // };

    


    return(
        <section>
            
            
            <HeaderComponent/>
            <SalaryComponent/>
            
        </section>
    )
}


export default MortgageContainers