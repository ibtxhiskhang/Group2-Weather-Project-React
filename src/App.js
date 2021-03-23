import './App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import sun1 from './WeatherIcons/sun1.png';
import SnowImage from './WeatherIcons/SnowImage.png';
import windy from './WeatherIcons/windy.png';
import {DateTime} from './DateTime';
// trying to set up links for the button
import React, {Component} from 'react';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link,
  Switch
  // etc.
} from 'react-router-dom';
import Charlotte from './Charlotte';
const App = () => {
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route path="/Charlotte" exact component={Charlotte}></Route>
              </Switch>
      <header className="App-header">
        <h1>React Weather App</h1>
          <div>
           <br></br>
              <CardDeck>
              <Card>
                <Card.Img variant="top" src={SnowImage} />
                <Card.Body>
                  <Card.Title>Miami</Card.Title>
                  <Card.Text>
                    There is a 90% chance of snow in Miami.{' '}
                    <br></br>
                    <button id="Miami" class="submit-button" >Miami</button>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <DateTime/>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={sun1} />
                <Card.Body>
                  <Card.Title>Charlotte</Card.Title>
                  <Card.Text>
                    Sunny no chance of rain!<br></br>
                    Expect snow by tonight!
                    <br></br>
                    {/* link to the Charlotte.js, so the button navigates us to that page */}
                    {/* link cannot be outside of the router tag.... */}
                    {/* button goes here */}
                    {/* <button Link to ="Charlotte">Charlotte</button> */}
                        <Link to='/Charlotte' target="_blank" >Weekly View
                        {/*  */}
                            {/* <Button>
                                  TAKE ME TO THE DAMN PAGE 
                            </Button> */}
                        </Link>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <DateTime/>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={windy} />
                <Card.Body>
                  <Card.Title>New York</Card.Title>
                  <Card.Text>
                    It is windy.
                    <br></br>
                    <button variant="primary" id="New York" class="submit-button" >New York</button>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <DateTime/>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
      </header>
      </Router>
    </div>
  );
}
export default App;