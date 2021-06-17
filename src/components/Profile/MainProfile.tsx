import HomeSortSearch from "../HomePage/HomeSortSearch";
import HomeTitle from "../HomePage/HomeTitle";
import UserProfileImage from "../../assests/User.png"
import '../../styles//Profile/MainProfile.css';
import SaveButton from '../../assests/ProfileSaveButton.svg';
import Professional from "./Professional";
import { useState } from "react";
import Swal from "sweetalert2";


const MainProfile = () => {

    // let isProfessionalOn = document.getElementById(flexRadioDefault2);
    const [isProfessional,setIsProfessional] = useState(false);

    function profileAdded(){
        Swal.fire({
            icon : 'success',
            text : 'Your profile is saved'
            }
          )
    }

    return (
        <div className="home-body">
            <HomeTitle header="My Profile"/>
            <div className="profile-body">
                <div className="user-image">
                    <img src={UserProfileImage} alt="profile" />
                </div>
                <div className="user-detail">
                    <form action="" className="input-form">
                        <div className="all-input-fields">
                            <label>
                                Display Name
                                <br />
                                <input className="gap field-texture" type="text" />
                            </label>
                            <label>
                                First Name
                                <br />
                                <input className="gap field-texture" type="text" />
                            </label>
                            <label>
                                Last Name
                                <br />
                                <input className="gap field-texture" type="text" />
                            </label>
                        </div>
                        <div className="small-intro">
                            <label>
                                About Yourself
                                <br />
                                <textarea className="gap field-texture" cols={59} rows={9}>

                                </textarea>
                            </label>
                        </div>
                        <div className="areas-of-interest">
                            <label>
                                Your Area of Interest
                            </label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Designer
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Developer
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Project Manager
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Sales
                                </label>
                            </div>
                        </div>
                        <div className="position-choices">
                            <label>Are you a student or professional</label>
                            <div className="form-check gap">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
                                     onChange = {(e) => {
                                        // console.log(e.target);
                                        setIsProfessional(false);
                                    }}
                                 />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Student
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                                    onChange = {(e) => {
                                        // console.log(e.target);
                                        setIsProfessional(true);
                                    }}
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Professional
                                </label>
                            </div>
                        </div>
                        {
                            isProfessional ? <Professional/> : <div></div>
                        }
                    </form>
                    <div className="save-button"
                        onClick = {() => profileAdded()}
                    >
                        <img src={SaveButton} alt="save" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainProfile;