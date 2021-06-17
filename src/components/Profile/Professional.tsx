import '../../styles/Profile/Professional.css';

const Professional = () => {
    return(
        <div className="pro-body">
            <div className="experinece">
                <label className="single-gap" htmlFor="">How much of experinece is you have?</label>
                <br />
                <div className="form-check form-check-inline pro-gap">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">0-5</label>
                </div>
                <div className="form-check form-check-inline pro-gap">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">5-10</label>
                </div>
                <div className="form-check form-check-inline pro-gap">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">10 and Above</label>
                </div>
            </div>
            <div className="expertize">
                <label className="pro-gap" htmlFor="">What is your expertize ?</label>
                <br />
                <div className="form-check form-check-inline pro-gap">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">Java</label>
                </div>
                <div className="form-check form-check-inline pro-gap">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">React</label>
                </div>
                <div className="form-check form-check-inline pro-gap">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">Backend</label>
                </div>
            </div>
            <div className="role pro-gap">
                <label>
                    Mention your role
                    <br />
                    <input className="single-gap role-field" type="text" />
                </label>
            </div>
        </div>
    );
}

export default Professional;