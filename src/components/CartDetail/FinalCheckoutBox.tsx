import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import '../../styles/CartDetail/finalCheckoutBox.css';



const FinalCheckoutBox = (props:any) =>{

    const {dispatch,cartCourses} = props;
    const[arrLenght,setarrLenght] = useState(cartCourses.length);

    console.log("uuu");
    console.log(cartCourses);
    const [totalPriceOfCart,setTotalPriceOfCart] = useState(0);
    const [totalSavings,setTotalSavings] = useState(0);
    React.useEffect(() => {
        // totalPriceOfCart.current = 0;
        let temp = 0,totalSaveTemp = 0;
        for(let i=0;i<cartCourses.length;++i){
            temp += (parseInt(cartCourses[i].price));
            totalSaveTemp += (cartCourses[i].discount === "" ? 0 : (parseInt(cartCourses[i].discount)) - parseInt(cartCourses[i].price));
        }
        setTotalPriceOfCart(temp);
        setTotalSavings(totalSaveTemp);
    },[arrLenght])

    function alertForCheckout(){
        Swal.fire({
            icon : 'success',
            text : 'You have successfully placed your order'
            }
          )
    }

    return(
        <div className="final-checkout-box">
            <div className="head-checkout">Total Amount</div>
            <div className="total-amount-section">Rs {totalPriceOfCart}/-</div>
            <div className="saved-amount">You have saved Rs {totalSavings}/-</div>
            <div className="final-checkout-button">
                <button className="btn btn-success final-button"
                    onClick = {() => {
                        dispatch({
                            type: "FINAL_CHECKOUT"
                        });
                        alertForCheckout();
                    }}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    cartCourses : state.wishListArray
})

export default connect(mapStateToProps)(FinalCheckoutBox);