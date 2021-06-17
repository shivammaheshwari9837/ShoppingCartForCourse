import React from 'react';
import { connect } from 'react-redux';
import '../../styles/HomePage/homeSortSearch.css';


const SortComponent = (props:any) => {

    const{dispatch} = props;

    return(
        <div>
            <select className="form-select" aria-label="Default select example"
                onChange = {(e) => {
                    dispatch({
                        type : "SORT_CARDS",
                        pattern : e.target.value
                    });
                }}
            >
            <option value="0" hidden selected>Course Price</option>
            <option value="1">Low To High</option>
            <option value="2">High To Low</option>
            </select>
        </div>
    );
}

export default connect()(SortComponent);