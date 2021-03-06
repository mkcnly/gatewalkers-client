
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export function Header(props) {

    let linkurl = (props.loggedIn) ? "/admindashboard" : "/";
    return (
        <div className="header">
          <h1>{props.title}</h1> 
           <Link className="close-button" to={linkurl}>Home </Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(Header);