import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
// import Image from 'react-bootstrap/Image';
import sun1 from './WeatherIcons/sun1.png';
import SnowImage from './WeatherIcons/SnowImage.png';
import windy from './WeatherIcons/windy.png';
// I want to have week view displayed in an entirely new tab... with just its own display....
// I want to have the days of the week to be dynamic based on what the current day is...
export const Charlotte = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This Week's Forecast</h1>
          <div>
           <br></br>
              <CardDeck>
              <Card>
                <Card.Img variant="top" src={sun1} />
                <Card.Body>
                  <Card.Title>Charlotte</Card.Title>
                  <Card.Text>
                    Sunny no chance of rain!<br></br>
                    Expect snow by tonight!
                    <br></br>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <p>Dynamic Date</p>
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
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <p>Dynamic Date</p>
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
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <p>Dynamic Date</p>
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
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <p>Dynamic Date</p>
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
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <p>Dynamic Date</p>
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
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <p>Dynamic Date</p>
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
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <p>Dynamic Date</p>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
      </header>
    </div>
  );
}
export default Charlotte;