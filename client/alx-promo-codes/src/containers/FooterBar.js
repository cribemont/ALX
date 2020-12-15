import React from 'react';

const Footer = (props) => {

    let date = new Date().getFullYear();

    return(
        <div className="footer">
            <hr />
            &copy; IT Promocodes {date}
        </div>
    );
}

export default Footer;