import { connect } from "react-redux";
import CourseCard from "../HomePage/CourseCard";
import HomeCart from "../HomePage/HomeCart";
import HomeSortSearch from "../HomePage/HomeSortSearch";
import HomeTitle from "../HomePage/HomeTitle";
import CartCard from "./CartCard";
import FinalCheckoutBox from "./FinalCheckoutBox";


const Cart = (props:any) =>{

    const {dispatch,allCourses} = props;

    return(
        <div className="home-body">
            <HomeTitle header="Shopping Cart"/>
            <HomeSortSearch currInfo={allCourses.wishListArray.length + " Courses in Cart"}/>
            <div className="home-cards-body">
                
                <div className="all-cards">
                        {
                            allCourses.wishListArray.map((course: any) => {
                                return(
                                    <div>
                                            {/* <Link to = {`/courseDetail/${course.uniqueID}`}><CourseCard info = {course}/></Link>
                                            <Route exact path="/courseDetail/:id" component={MainPage} /> */}
                                            {/* <Link to = {`/courseDetail/${course.uniqueID}`} style={ {color: 'inherit', textDecoration: 'inherit'} }><CartCard info = {course}/></Link> */}
                                            <CartCard info = {course}/>
                                    </div>
                                    
                                )
                            })
                        }

                </div>
                <div></div>
                <div className="cart-details">
                    <FinalCheckoutBox/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    allCourses : state
})

export default connect(mapStateToProps)(Cart);