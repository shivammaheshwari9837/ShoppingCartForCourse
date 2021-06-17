import { connect } from "react-redux";
import CourseCard from "../HomePage/CourseCard";
import HomeCart from "../HomePage/HomeCart";
import HomeSortSearch from "../HomePage/HomeSortSearch";
import HomeTitle from "../HomePage/HomeTitle";
import WishListCard from "./WishListCard";


const WishList = (props:any) =>{

    const {dispatch,allCourses} = props;

    return(
        <div className="home-body">
            <HomeTitle header="Discover Latest Courses On React"/>
            <HomeSortSearch currInfo="My WishList"/>
            <div className="home-cards-body">
                
                <div className="all-cards">
                        {
                            allCourses.originalWishList.map((course: any) => {
                                return(
                                    <div>
                                            {/* <Link to = {`/courseDetail/${course.uniqueID}`}><CourseCard info = {course}/></Link>
                                            <Route exact path="/courseDetail/:id" component={MainPage} /> */}
                                            {/* <Link to = {`/courseDetail/${course.uniqueID}`} style={ {color: 'inherit', textDecoration: 'inherit'} }><CourseCard info = {course}/></Link> */}
                                            <WishListCard info = {course}/>
                                    </div>
                                    
                                )
                            })
                        }

                </div>
                <div></div>
                <div className="cart-details">
                    <HomeCart/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    allCourses : state
})

export default connect(mapStateToProps)(WishList);