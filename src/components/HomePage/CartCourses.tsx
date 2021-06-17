import '../../styles/HomePage/cartCourses.css';


const CartCourses = (props: any) =>{

    const{dispatch} = props;

    // console.log("B");
    // console.log(dispatch);
    return(
        <div className="cart-course-design">
            <div className="course-detail">
                <div className="grey-box"></div>
                <div className="course-title">{props.courseInfo.courseName}</div>
            </div>
            <div className="course-price">Rs {props.courseInfo.price}/-</div>
            <hr />
        </div>
    );
}

export default CartCourses;