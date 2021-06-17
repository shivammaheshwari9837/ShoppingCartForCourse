import '../../styles/HomePage/homeCourseCard.css';
import coloredStar from '../../assests/starColored.png';
import rightArrow from '../../assests/right-arrow.png';
import normalStar from '../../assests/star.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react';
import MainPage from '../FullCouseDetail/MainPage';


const CourseCard = (props: any) => {
    const {dispatch,items} = props;

    const [vari,setVari] = useState(false);

    
    // console.log(props);

  const myInnerStyle = {
      backgroundColor : "#ec6217"
  }

  function callAlert(){
    Swal.fire({
            icon : 'success',
            text : 'Added to Cart'
        }
      )
  }

  function alertForAlreadyInCart(){
    Swal.fire({
        icon : 'error',
        text : 'Already in a cart'
        }
      )
  }

  function addedToWishlist(){
    Swal.fire({
        icon : 'success',
        text : 'Added to Wishlist'
        }
    )
  }

    // console.log("Hi");
    // console.log(dispatch);

    return(
        <div className="card-design" key={props.info.uniqueID}>
            {/* <Link to= {`/courseDetail/${props.info.uniqueID}`}>
                
            </Link> */}
            <div className="empty-box"></div>
            <div className="details">
                <div>{props.info.courseName}</div>
                <div className="badges">
                    <span className="badge" style={myInnerStyle} >{props.info.type}</span>
                    {/* <span className="badge bg-success">JavaScript</span> */}
                </div>
            </div>
            <div className="author">{props.info.author}</div>
            <div className="star">
                {
                    (props.info.insideWishList === true) ? (<img src={coloredStar} alt="star" />) : (<img src={normalStar} alt="star" 
                    onClick = {() => {
                        dispatch({
                        type: "ADD_TO_WISHLIST",
                        id : props.info
                        });
                        // setVari(true);
                        addedToWishlist();
                    }} />)
                }
                
            </div>
            <div className="price">Rs {props.info.price}/-</div>
            <div className="discount">
                {
                    props.info.discount === '' ? <span>-</span> : <span className="cut-off">Rs {props.info.discount}/-</span>
                }
            </div>
            <div className="add-to-cart">
                <button type="button" 
                    onClick = { () => {
                        if(props.info.insideCart){
                                alertForAlreadyInCart();

                            }
                        else{
                                dispatch({
                                type : "ADD_TO_CART",
                                id : props.info
                                });
                                callAlert();
                            }
                        }
                    } 
                    className="btn btn-success add-button">Add to Cart
                </button>
            </div>
            <div className="arrow">
                <Link 
                to = {
                        {
                         pathname : `/courseDetail/${props.info.uniqueID}`,
                         state : {
                             name : props.info
                         }
                        }
                    } 
                    
                    style={ {color: 'inherit', textDecoration: 'inherit'} }>
                    <img src={rightArrow} alt="arrowImage" />
                </Link>
            </div>
        </div>
    );
}

//info.......

const mapStateToProps = (state: any) => ({
    items:state
})




export default connect(mapStateToProps)(CourseCard);
// export default CourseCard;