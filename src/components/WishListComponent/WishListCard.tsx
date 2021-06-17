import '../../styles/HomePage/homeCourseCard.css';
import coloredStar from '../../assests/starColored.png';
import rightArrow from '../../assests/right-arrow.png';
import dustbin from '../../assests/dustbin.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const WishListCard = (props: any) => {
    const {dispatch,items} = props;

  const myInnerStyle = {
      backgroundColor : "#ec6217"
  }

  function callAlert(){
    Swal.fire({
        icon : 'success',
        text : 'Removed from Wishlist'
        }
      )
  }

    // console.log("Hi");
    // console.log(dispatch);

    return(
        <div className="card-design-v2" key={props.info.uniqueID}>
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
            
            <div className="price">Rs {props.info.price}/-</div>
            <div className="discount">
                {
                    props.info.discount === '' ? <span>-</span> : <span className="cut-off">Rs {props.info.discount}/-</span>
                }
            </div>
            <div className="add-to-cart">
                <button type="button" 
                    onClick = { () => {
                        dispatch({
                        type : "ADD_TO_CART",
                        id : props.info
                        });
                        callAlert();
                        }
                    } 
                    className="btn btn-success add-button">Add to Cart
                </button>
            </div>
            <div className="star"><img src={dustbin} alt="star" 
                onClick = {() => {
                    dispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    id : props.info
                    });
                    callAlert();
                }} />
            </div>
            <div className="arrow"><img src={rightArrow} alt="arrowImage" /></div>
        </div>
    );
}




export default connect()(WishListCard);