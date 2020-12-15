import React from 'react';


// Custom text component to easily display text and give it dynamic tag
const TextComponent = (props) => {
    const { Tag, classes, content } = props;
    return(
        <Tag className={classes}>
            {content}
        </Tag>
    );
}

export default TextComponent;