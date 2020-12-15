import React from 'react';
import { Card } from "react-bootstrap";
import TextComponent from '../components/TextComponent';

// Simple header bar waiting for dynamic data that might be parsed from API such as Balance / Payout value
const HeaderBar = (props) => {
    return(
        <Card className="small">
            <Card.Body>                
                <div className="block-top-summary rubik f400">
                    <TextComponent content="Balance" Tag="span" classes='roboto f400' />
                    {props.balance}{props.currency}
                </div>
                <div className="block-top-summary rubik f400">
                    <TextComponent content="Payout" Tag="span" classes='roboto f400' />
                    {props.payout}{props.currency}
                </div>
            </Card.Body>
        </Card>
    );
}

export default HeaderBar;