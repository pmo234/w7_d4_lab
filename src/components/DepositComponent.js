import { useState } from "react";
import MortgageValueComponent from "./MortgageValueComponent";

const DepositComponent = ()=>{

    const [deposit, setDeposit] = useState("")
    const [yourDeposit, setYourDeposit] = useState("")

    const handleInputChange = (event) =>{
        setDeposit(event.target.value);
    };

    
    
    const savedDeposit = (event) => {
        event.preventDefault()
        setYourDeposit(deposit)
        
    };
    
    return(
        <div>
            <form onClick={savedDeposit}>
                <label>Insert Deposit:</label> <br></br>
                <input type="text" id = "your-deposit" onChange={handleInputChange}></input>
                <input type="submit" value="save deposit" className={"button"} />
            </form>
            {deposit}
            {yourDeposit}
            <MortgageValueComponent yourDeposit={yourDeposit} id = "your deposit"/>

            
        </div>

    );


};


export default DepositComponent;