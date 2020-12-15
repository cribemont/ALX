import React from 'react';

const ContentWrapper = (props) => {
    return(
        <div className="contentWrapper">
            {props.children}
        </div>
    );
}

export default ContentWrapper;