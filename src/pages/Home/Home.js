import React, { Component } from "react";
import "./Home.css";
import { Card, Image } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Card>
          <Card.Content>
            <Image
              centered
              src="https://www.shutterstock.com/image-vector/global-logistics-network-isometric-illustration-600w-1464891071.jpg"
            />
            <hr></hr>
            <br></br>
            <Card.Header>
              Hello, Welcome to <b>Counter-Chain</b>
            </Card.Header>
            <Card.Description>
              <p>
                Secure transfer of goods and products.
              </p>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
