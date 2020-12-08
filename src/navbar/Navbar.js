import React from "react";

function AddNav() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
                </a>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary">
                            <strong>Sign Up</strong>
                        </a>
                        <a className="button is-success">
                            Log In
                    </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default AddNav;
