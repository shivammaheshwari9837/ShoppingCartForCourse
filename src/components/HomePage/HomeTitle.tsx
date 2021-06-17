import '../../styles/HomePage/homeTitle.css';
import ReactIcon from '../../assests/ReactIcon.png';

const HomeTitle = (props: any) => {
    return(
        <div className="home-title">
            <div className="title-content">
                {props.header}
            </div>
            <div></div>
            <div className="title-image">
                <img src={ReactIcon} alt="work" />
            </div>
        </div>
    );
};

export default HomeTitle;