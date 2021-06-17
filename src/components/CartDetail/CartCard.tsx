import '../../styles/HomePage/homeCourseCard.css';
import coloredStar from '../../assests/starColored.png';
import rightArrow from '../../assests/right-arrow.png';
import dustbin from '../../assests/dustbin.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const CartCard = (props: any) => {
    const {dispatch,items} = props;

  const myInnerStyle = {
      backgroundColor : "#ec6217"
  }

  function callAlert(){
    Swal.fire({
        icon : 'success',
        text : 'Delete from cart'
    })
  }

    // console.log("Hi");
    // console.log(dispatch);

    return(
        <div className="card-design-v3" key={props.info.uniqueID}>
            {/* <Link to= {`/courseDetail/${props.info.uniqueID}`}>
                
            </Link> */}
            <div className="empty-box"></div>
            <div className="details">
                <div>{props.info.courseName}</div>
                <div className="badges">
                    <div className="author-v2">{props.info.author}</div>
                </div>
            </div>
            <div className="move-to-wishlist"
                onClick = {() => {
                    dispatch({
                    type: "ADD_TO_WISHLIST",
                    id : props.info
                    });
                    callAlert();
                }}
            >
                Move To Wishlist
            </div>         
            <div className="price">Rs {props.info.price}/-</div>
            <div className="star"><img src={dustbin} alt="star" 
                onClick = {() => {
                    dispatch({
                    type: "REMOVE_FROM_CART",
                    id : props.info
                    });
                    callAlert();
                }} />
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    items : state.wishListArray
})


export default connect(mapStateToProps)(CartCard);