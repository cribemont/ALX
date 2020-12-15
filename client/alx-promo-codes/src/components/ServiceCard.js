import React, {useState, useEffect, useRef} from 'react';
import { Card, Col, Form, Button, InputGroup, Overlay, Tooltip } from 'react-bootstrap';
import TextComponent from './TextComponent';
import IconCopy from '../ICON_COPY.svg';

// API service compo.
import apiClient from '../services/api';

const ServiceCard = (props) => {

    // State for the service detail
    const [service, setService] = useState('');
    // State to watch for service activation
    const [activated, setActivated] = useState(false);
    // Tooltip for copy
    const [showTooltip, setShowTooltip] = useState(false);

    // event targets
    const target = useRef(null);
    const inputCode = useRef(null);

    // function to handle the code copy to clipboard
    const handleCopyCode = (e) => {
        // get the targeted input and select it
        inputCode.current.select();
        // copy and focus
        document.execCommand('copy');
        e.target.focus();
        // Display our little tooltip
        setShowTooltip(true);
        // Also make it disappear after a moment
        setTimeout(() => {
            setShowTooltip(false);
        }, 1500);
    }

    // function to handle code activation
    const handleActivation = (e) => {
        e.preventDefault();
        const idService = e.target.attributes.service.value;
        const url = '/service/' + idService;
        apiClient.post(url)
        .then(response => {
            setService(response.data);
        }).catch(error => {
            console.log(error);
        });
    }
    
    // Get the details from props + listen for any change in them
    useEffect(() => {
        setService(props.details || '');
    }, [props.details]);

    return(
        <Card className="service-card">
            <Card.Body>
                <Col xs={12} md={6}>
                    {/* Basic displayed text based on our custom textcomponent */}
                    <TextComponent content={service.name} Tag="h2" classes='roboto f400' />
                    <TextComponent content={service.description} Tag="p" classes='roboto f400' /> 
                </Col>
                <Col xs={12} md={6}>
                <Form>
                <Form.Row className="align-items-end">
                    <Col xs={6}>
                        <Form.Group>
                            <Form.Label htmlFor="formPromoCode">Promocode</Form.Label>
                                <InputGroup>
                                {/* display the service promocode as readonly */}
                                <Form.Control ref={inputCode} type="text" id="formPromoCode" name="" readOnly value={service.promocode || ''} />
                                <InputGroup.Append>
                                    {/* input icon with function to copy to clipboard and tooltip to display when its done */}
                                    <InputGroup.Text id="formPromoCode" ref={target} onClick={handleCopyCode}><img src={IconCopy} alt="Copy promocode" /></InputGroup.Text>
                                    <Overlay target={target.current} show={showTooltip} placement="top-start">
                                        {(props) => (
                                        <Tooltip id="overlay-example" {...props}>
                                            Promocode copied to clipboard !
                                        </Tooltip>
                                        )}
                                    </Overlay>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                        <Col xs={6}>
                        {
                            activated || service.activated
                            ?
                            <Button variant="success" type="submit" block onClick={handleActivation} service={service.id}>
                                Bonus activated !
                            </Button>
                            :
                            <Button variant="primary" type="submit" block onClick={handleActivation} service={service.id}>
                                Activate bonus
                            </Button>
                        }        
                        
                    </Col>
                </Form.Row>
            </Form>
                </Col>
            </Card.Body>
        </Card>
    );
}

export default ServiceCard;