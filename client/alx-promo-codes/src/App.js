// Depedencies - Libs
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Spinner } from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Custom containers components
import SidebarNav from './containers/Sidebar';
import HeaderBar from './containers/HeaderBar';
import ContentWrapper from './containers/ContentWrapper';
import FooterBar from './containers/FooterBar';

// Custom components
import TextComponent from './components/TextComponent';
import FilterBar from './components/FilterBar';
import ServicesList from './components/ServicesList';

// API service compo.
import apiClient from './services/api';

const balance = "213 920";
const payout = "159 465";
const currency = "$";

const App = () => {

  // State for setting filter
  const [filter, setFilter] = useState('');
  // State for getting services
  const [services, setServices] = useState(null);
  // State for getting services filtered
  const [filteredServices, setFilteredServices] = useState(null);

  // on Mount load services
  useEffect(() => {
    getServices();
  }, []);


  // Get the services list from the API
  const getServices = () => {
      const url = '/services';
      apiClient.get(url)
      .then(response => {
        setServices(response.data);
      }).catch(error => {
          console.log(error);
      })
  }
  // Handle filtering on the app
  const handleFilter = (e) => {
    let filterValue = e.target.value;
    if (filterValue.length >= 3){
      setFilter(filterValue);
    } else {
      handleReset();
    }
  }

  // Another function to precisely handle filtering and updating services
  const handleFiltering = () => {
    if (services && filter) {
          // Create a temporary copy and filter
          let tmpFilteredServices = services.filter( (service) => {
              return service.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
          });
          // set our services list filtered without altering main list
          setFilteredServices(tmpFilteredServices);
      }
  }

  // Quick reset of the filtered value called from the component
  const handleReset = (e) => {
    setFilter(null);
  }

  useEffect(() => {
    handleFiltering()
  }, [filter])

  return (
    // Router for navigation system wrapping
    <Router basename="/">
      {/* Container from Bootstrap*/}
      <Container fluid>
        <Row>
          {/* Wrapping our fixed sidebar from Bootstrap*/}
          <Col xs={1} id="sidebar-wrapper">     
            {/* Sidebar component */}
                <SidebarNav />
          </Col>
          {/* Container from the wrapper */}
          <Col xs={{ span: 11, offset: 1 }} id="page-content-wrapper">
            {/*Top card headerbar */}
            <HeaderBar balance={balance} payout={payout} currency={currency} />
            {/* Content Wrapper component for padding and such */}
            <ContentWrapper>
                {/* Custom text component */}
                <TextComponent content="Services" Tag="h1" />              
                {/* Filtering component */}
                <FilterBar currentFilter={filter} handleFilter={handleFilter} handleReset={handleReset}/>                
                {/* 
                List component 
                if we have a filter, load from tmp filtered list, else load our base list
                */}
                {
                  services || filteredServices 
                  ?
                  <ServicesList services={filter ? filteredServices : services} />
                  :
                  <Container className="my-5">
                    <Row className="justify-content-md-center">
                      <Spinner animation="grow" size="sm" />
                      <Spinner animation="grow" size="sm" />
                      <Spinner animation="grow" size="sm" />
                    </Row>
                  </Container>
                }
                {/* Footer */}
                <FooterBar />
            </ContentWrapper>
          </Col> 
        </Row>
      </Container>
    </Router>
  );
}

export default App;
