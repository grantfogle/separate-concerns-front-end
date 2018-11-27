import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class ShowSnack extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        console.log(this.props.match.params.id)
        return (

            <div class="row">
                <h1>Snack</h1>
                {/* <div className="col-4">
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{this.props.name}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody> */}
                {/* </Card> */}
                {/* // </div> */}
            </div>
        )
    }
}

export default ShowSnack;