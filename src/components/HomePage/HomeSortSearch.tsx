import SearhComponent from "./SearchComponent"
import SortComponent from "./SortComponent"

const HomeSortSearch = (props: any) => {
    return(
        <div className="main">
            <div className="content">{props.currInfo}</div>
            <div></div>
            <div className="sort-bar">
                <SortComponent />
            </div>
            <div></div>
            <div className="search-bar">
                <SearhComponent />
            </div>
        </div>
    );
}

export default HomeSortSearch;