import '../../styles/HomePage/homeSearchComponent.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { connect } from 'react-redux';

const SearhComponent = (props: any) => {

    const{dispatch} = props;
    const[searchTerm,setSearchTerm] = useState("");


    const myInnerStyle = {
        backgroundColor : "#ec6217"
    }


    return(
        <div className="search-bar">
            <input placeholder="Search here" type="search" id="form1" className="form-control"
                onChange = {(e) => {
                    // setSearchTerm(e.target.value);
                    setSearchTerm(e.target.value);
                }}
             />
            <button type="button" className="btn" style={myInnerStyle}
                onClick = {() => {
                    dispatch({
                        type: "FILTERED_STRING",
                        filterString : searchTerm
                    });
                }}
            >
                <FontAwesomeIcon icon={faSearch} className="change-icon-color"/>
            </button>
        </div>
    );
}

export default connect()(SearhComponent);