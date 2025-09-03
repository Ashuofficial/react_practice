import { useEffect, useState } from "react";
const currencyOptins=['USD', 'EUR', 'GBP', 'CNY'];
const CRYPTO_API = "https://api.frontendeval.com/fake/crypto";


function Crypto() {
    const [amount, setAmount]=useState(1);
    const [convertedAmount, setConvertedAmount]=useState(0);
    const [currency, setCurrency]=useState(currencyOptins[0]);
    const [conversionRate, setConversionRate]=useState(0);
    const [amountChange, setAmountChange]=useState(0);

    async function fetchConversionRate() {
        try{
             const response= await fetch(`${CRYPTO_API}/${currency}`)
             if(!response.ok)
                throw new Error('fetch karte waqt problem');
            const res=await response.json();
            const data=res.value;
            console.log(data);
            setConversionRate(data);                
        
        } catch(e){
            console.log("something wrong" , e);
        }         
    }

    useEffect(()=>{
        fetchConversionRate();

        const timer=setInterval(() => {
            fetchConversionRate()
        }, 5000);

        return ()=>{
            clearInterval(timer);
        };
    },[currency, amount])

    useEffect(()=>{
        setAmountChange(convertedAmount);
        setConvertedAmount(amount*conversionRate);
    }, [conversionRate])

    const priceChnage=convertedAmount-amountChange;

  return (
    <div>
        <label htmlFor="amountToConvert">
            Amount to convert : 
            <input 
            type="number"
            id="amountToConvert"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
             />
        </label>
        <label htmlFor="currency">
            Select currency :
            <select id="currency" onChange={(e)=>setCurrency(e.target.value)}>
                {
                    currencyOptins.map((value, index)=> {
                        return <option value={value} key={index}>{value}</option>
                    })
                }


            </select>
        </label>
        <p>WUC Crypto Equivalent : {convertedAmount.toFixed(2)}</p>
        <p style={{color: priceChnage>0 ? "green" : "red"}}>
            Change :  {priceChnage>0 ? "⬆️" :  "🔻" } {priceChnage.toFixed(2)}
        </p>
    </div>
  );
}
export default Crypto;