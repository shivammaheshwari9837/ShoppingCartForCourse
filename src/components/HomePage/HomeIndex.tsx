import { useSelector } from 'react-redux';
import '../../styles/HomePage/homeIndex.css';
import CourseCard from './CourseCard';
import HomeSortSearch from './HomeSortSearch';
import HomeTitle from "./HomeTitle"
import {connect} from 'react-redux';
import { useState } from 'react';
import HomeCart from './HomeCart';
import {Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainPage from '../FullCouseDetail/MainPage';
import Header from './Header';


// import AllCourses from "../../data/AllCoursesData.json";

// const RouteAccoringToId = (props: any) =>{
//     return(
//         <div>
//             <MainPage detail={props.course} />
//         </div>
//     );
// }

const HomeIndex = (props:any) => {

    const {dispatch,allCourses,filterString,sortMethod} = props;

    
    // console.log(props);

    // console.log(state);

    // console.log(">>>>");
    // console.log(allCourses.allAvailableCourses);

    function sortAccording(a:any,b: any){
        let num1 = parseInt(a.price);
        let num2 = parseInt(b.price);

        if(sortMethod === "1")
        return num1-num2;
        else
        return num2-num1;
        // console.log("poo");
        // console.log(typeof num1 + " " + typeof num2);
        // if(sortMethod === "1"){
        //     if(num1 > num2){
        //         return 1;
        //     }
        //     else{
        //         return 0;
        //     }
        // }
        // else if(sortMethod === "2"){
        //     if(num1 < num2){
        //         return 1;
        //     }
        //     else{
        //         return 0;
        //     }
        // }
        // else{
        //     return 0;
        // }
    }

    return(
        <div className="home-body">
            <HomeTitle header="Discover Latest Courses On React"/>
            <HomeSortSearch currInfo="All Details"/>
            <div className="home-cards-body">
                
                <div className="all-cards">
                        {
                            allCourses.allAvailableCourses.filter((val:any) => {
                                if(filterString === "")
                                return val;
                                else if(val.author.includes(filterString) || val.courseName.includes(filterString) || val.type.includes(filterString))
                                return val;
                            }).sort(sortAccording).map((course: any) => {
                                return(
                                    <div>
                                            {/* <Link to = {`/courseDetail/${course.uniqueID}`}><CourseCard info = {course}/></Link>
                                            <Route exact path="/courseDetail/:id" component={MainPage} /> */}
                                            {/* <Link to = {`/courseDetail/${course.uniqueID}`} style={ {color: 'inherit', textDecoration: 'inherit'} }><CourseCard info = {course}/></Link> */}
                                            <CourseCard info = {course}/>
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
    allCourses : state,
    filterString : state.searchValue,
    sortMethod : state.sortType

})

export default connect(mapStateToProps)(HomeIndex);