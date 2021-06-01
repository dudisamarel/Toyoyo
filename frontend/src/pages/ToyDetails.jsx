import React, { Component } from 'react'
import { toyService } from '../services/toyService';
import Loader from "react-loader-spinner";
import { Link } from 'react-router-dom';
import { ArrowBack, Edit } from '@material-ui/icons';
import { Button } from '@material-ui/core';



export default class ToyDetails extends Component {
    state = {
        toy: null,
        imgStatus: true
    }
    componentDidMount() {
        const toyId = this.props.match.params.id;
        if (toyId) {
            toyService.getById(toyId)
                .then(toy => {
                    this.setState({ toy })
                })
        }
    }
    imgHandler() {
        setTimeout(() => {
            this.setState({ imgStatus: false })
        }, 1000)
    }
    render() {
        const { toy, imgStatus } = this.state
        return (toy ?
            <div className="flex column align-center">
                <div className="toy-details flex column align-center">
                    <h1>{toy.name}</h1>
                    <div >
                        {imgStatus ?
                            <Loader
                                type="Circles"
                                color="#00BFFF"
                                height={100}
                                width={100}
                            /> : null}
                        <img style={{ display: imgStatus ? 'none' : 'block' }} alt="Toy" onLoad={() => this.imgHandler()} src={`https://robohash.org/${toy.name}?set=set2`} />
                    </div>
                    <ul className="flex column align-center">
                        <li>Price: {toy.price}$</li>
                        <li>Type: {toy.type}</li>
                        {toy.inStock ? <li> In Stock</li> : <li>Not In Stock</li>}
                    </ul>
                    <div>
                        <Link to={`/toy`}>
                            <Button className="back-btn" variant="contained" color="primary">
                                <ArrowBack />
                            </Button>
                        </Link>
                        <Link to={`/toy/edit/${toy._id}`}>
                            <Button className="edit-btn" variant="contained" color="primary">
                                <Edit />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            :
            <h1>Loading...</h1>)
    }
}
