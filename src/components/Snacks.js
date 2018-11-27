import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Jumbotron, Button } from 'reactstrap';
import Snack from './Snack';


class Snacks extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    getSnacks = () => {

        if (this.props.snacks) {
            return this.props.snacks.map(snack => {
                return <Snack price={snack.price} name={snack.name} id={snack.id} />
            })
        }
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Snacks</h1>
                    <Button>Buy some snacks</Button>
                </Jumbotron>
                <div className="container">
                    <div className="row">
                        {this.getSnacks()}
                    </div>
                </div>
            </div >
        );
    }
}

export default Snacks;