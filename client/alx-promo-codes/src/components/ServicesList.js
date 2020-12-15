import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Spinner } from 'react-bootstrap';

const ServicesList = (props) => {

    // Store services in state
    const [services, setServices] = useState(null);
    // Store filter in state
    const [filter, setFilter] = useState('');

    // Set services and watch for any parent update for new services
    useEffect(() => {
        setServices(props.services)
    }, [props.services]);

    return (
        <>
            {
                // Do we have the services yet ?
                services
                    ?
                    // Map all the services to custom service component with id and spread details from the service itself
                    services.map((service) => {
                        return (
                            <ServiceCard key={service.id} details={{ ...service }} />
                        )
                    })                
                :
                // Service not loaded, lets show a little spin
                <>
                    <Spinner animation="grow" size="sm" />
                    <Spinner animation="grow" size="sm" />
                    <Spinner animation="grow" size="sm" />
                </>
           } 
        </>
    );
}

export default ServicesList;