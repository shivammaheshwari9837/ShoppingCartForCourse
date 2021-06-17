import HomeTitle from '../HomePage/HomeTitle';
import '../../styles/FullCourseDetail/MainPage.css';
import clock from '../../assests/clock.svg';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';


const MainPage = (props:any) =>{

    const {dispatch,items} = props;

    const myInnerStyle = {
        backgroundColor : "white",
        color : "black"
    }

    function addedToCart(){
        Swal.fire(
            {
                icon : 'success',
                text : 'Added To Cart'
            }
          )
      }

    function addedToWishlist(){
        Swal.fire(
            {
                icon : 'success',
                text : 'Added To WishList'
            }
          )
    }

    function alertForAlreadyWishlist(){
        Swal.fire(
            {
                icon : 'error',
                text : 'Already in Wishlist'
            }
          )
      }
    
      function alertForAlreadyInCart(){
        Swal.fire(
            {
                icon : 'error',
                text : 'Already in cart'
            }
          )
      }

    console.log(props.location.state.name);
    let currState = props.location.state.name;
    // console.log(props.detail);
    return(
        <div className="main-body">
            <div className="home-body">
                <HomeTitle/>
            </div>
            <div className="course-title-1">
                <div className="inner-course-title">
                    <div className="course-title-info">
                        Responsive Design Course by XYZ. How To design Responsive web pages
                    </div>
                    <div className="writer">{currState.author} </div>
                    <div className="course-tags">
                        <span className="badge" style={myInnerStyle} >React</span>
                    </div>
                </div>
                <div className="demo-view">
                    <div className="video-tag">
                        <span className="circle">
                            <span className="triangle"></span>
                        </span>
                    </div>
                    <div className="video-description">
                        <div className="orinial-price">Rs {currState.price}/-</div>
                        {
                            (currState.discount === "") ? (<div></div>) : (<div className="discount-price">Rs {currState.discount}/-</div>)
                        }
                        <div className="time-left">
                            <div className="timer">
                                <img src={clock} alt="clock" />
                            </div>
                            <div className="time-des">
                                <b>{currState.timeLeftForDiscount} hours </b>left for this price
                            </div>
                            
                        </div>
                        <div className = "choices">
                            <button className="btn btn-success to-cart"
                                onClick = { () => {
                                    if(currState.insideCart){
                                            alertForAlreadyInCart();
            
                                        }
                                    else{
                                            dispatch({
                                            type : "ADD_TO_CART",
                                            id : currState
                                            });
                                            addedToCart();
                                        }
                                    }
                                } 
                            >
                                ADD TO CART
                            </button>
                            <button className="btn btn-outline-success to-wishlist"
                                onClick = {() => {
                                    if(currState.insideWishList){
                                        alertForAlreadyWishlist();
                                    }
                                    else{
                                        dispatch({
                                        type: "ADD_TO_WISHLIST",
                                        id : currState
                                        });
                                        addedToWishlist();
                                    }
                                }}
                            >
                                ADD TO WISHLIST
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course-body">
                <div className="body-header">Course Details</div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt eaque quos minus, culpa fuga temporibus pariatur modi enim facilis asperiores ad iure! Doloremque repudiandae laborum quos recusandae aperiam minus!
                </p>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    items:state
})


export default connect(mapStateToProps)(MainPage);

// export default MainPage;