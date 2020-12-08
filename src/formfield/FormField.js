import React from "react";

function AddForm(props) {
    return (
        <div>
            <div className="field">
                <label className="label">{props.label}</label>
                <div className="control">
                    <input className="input" type="text" placeholder="e.g Alex Smith" />
                </div>
            </div>
            <div className="field">
                <label className="label">{props.label}</label>
                <div className="control">
                    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
            </div>
        </div>
    )
}

export default AddForm