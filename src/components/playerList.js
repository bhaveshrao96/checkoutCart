
import React, { useState } from 'react';
import { useEffect } from 'react';
import '../css/style.css';
import pizza from '../../src/pizza.png'

const Checkout = () => {

    const [count, setPizzaCount] = useState(1);
    const [discount, setDiscount] = useState(0);
    const [totalBill, setTotalBill] = useState(15);
    const [addon, setAddon] = useState(false);
    const [finalBill, setFinalBill] = useState(totalBill);

    useEffect(()=>{
        console.log(count)
        // console.log(discount)
        // console.log(totalBill)
        // console.log(finalBill)
    },[count,discount,totalBill,finalBill])

    function increaseCount() {
        const newCount = count + 1;
        setPizzaCount(newCount)
        setTotalBill(newCount * 15)
        if(discount==0){
           
        setFinalBill(newCount * 15)
        }else{
            var discountAmount = Math.floor((newCount * 15/100) * (discount) )
            setFinalBill(newCount * 15 - discountAmount)
        }
    }
  
    function decreaseCount() {
        if (count == 1) {

        } else {
            const newCount = count - 1;
            setPizzaCount(newCount)
        setTotalBill(totalBill - 15)
        var discountAmount = Math.floor((newCount * 15/100) * (discount) )
            setFinalBill(newCount * 15 - discountAmount)

        }
    }
    function increaseDiscount() {
        if(discount==50){

        }else{
            setDiscount(prediscount => prediscount + 10)
            console.log('if',discount)
                var discountAmount = Math.floor((totalBill/100) * (discount + 10) )
                console.log('if',discountAmount)
            
            setFinalBill(totalBill - discountAmount)
        }
        
    }


    useEffect(() => {
    }, []);


    return (
        <div className="container">
            <div className="card">
                <div className="title-area">
                    <h2>Farmhouse Pizza</h2>
                    <p>We are currently serving one pizza only, please taste and review.</p>
                </div>
                <div className='quantity-area'>

                    <div className='count-text'>
                        <button onClick={increaseCount}>+</button>
                        {count}
                        <button onClick={decreaseCount}>-</button>
                   
                    </div>
                   <div className='image-area'>
                     <img src={pizza}/>
                   </div>
                    

                </div>
                <div className='addon-area'>
                <input type='checkbox' checked={addon} onChange={()=>{
                    setAddon(!addon)
                }}/> Add ons
                </div>

                <div className='bottom-area'>
                    <div className='bill-area'>
                        <div className='bottom-section'>
                        <div>Total</div>
                        <div>$ {totalBill}</div>
                        </div>
                        <div className='bottom-section'>
                           <div> Discount : </div>
                        <div>
                        <button onClick={increaseDiscount} className='discount-button'>+</button>
                        {discount}%
                       
                      
                    </div>
                        </div>
                        <div className='bottom-section'>
                        <div>Final Bill</div>
                        <div>$ {finalBill}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Checkout;
