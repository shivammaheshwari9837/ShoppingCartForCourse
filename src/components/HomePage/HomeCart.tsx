import '../../styles/HomePage/homeCart.css';
import CartCourses from './CartCourses';
import {connect} from 'react-redux';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const HomeCart = (props:any) => {
    const {dispatch,cartCourses} = props;


    const [totalPriceOfCart,setTotalPriceOfCart] = useState(0);
    React.useLayoutEffect(() => {
        console.log(cartCourses);
        // totalPriceOfCart.current = 0;
        let temp = 0;
        for(let i=0;i<cartCourses.length;++i){
            temp += (parseInt(cartCourses[i].price));
        }
        setTotalPriceOfCart(temp);
    })




    // console.log("H");
    // let priceInString

    return(
        <div className="home-cart-design">
            <div className="header">
                <div className="details-header">
                    Your Cart Details
                </div>
                <hr />
            </div>
            <div className="cart-courses">
                {
                    cartCourses.map((course: any) => {
                        return(
                            <CartCourses courseInfo = {course} />
                        )
                    })
                }
                {/* <CartCourses /> */}
                {/* <CartCourses /> */}
                {/* <CartCourses /> */}
                {/* <CartCourses /> */}
            </div>
            <div className="lower-end">
                <hr />
                <div className="total-price">
                    <div className="total-cart-price">
                        <div className="price-header">Total Cart Value</div>
                        <div className="actual-price">Rs {totalPriceOfCart}/-</div>
                    </div>
                    {
                        (cartCourses.length > 0) ? 
                        (<Link to="/cartlist" style={ {color: 'inherit', textDecoration: 'inherit'} }>
                            <div className="cart-checkout">Go To Checkout</div>
                        </Link>) 
                        : (<div></div>)
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    cartCourses : state.wishListArray
})

export default connect(mapStateToProps)(HomeCart);