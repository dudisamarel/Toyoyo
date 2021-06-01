import { Button } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

export function ToyPreview({ toy, remove }) {
    return (
        <div className="toy-card flex column align-center">
            <p>{toy.name}</p>
            <span>{toy.price}$</span>
            <div className="img-container ">
            <img  alt="Toy"  src={`https://robohash.org/${toy.name}?set=set2`} />
            </div>
            <div className="btns">
                <Link to={`toy/details/${toy._id}`}>
                    <Button color="primary" variant="contained">Details</Button>
                </Link>
                <Button color="secondary" variant="contained"
                    onClick={(ev) => {
                        ev.stopPropagation()
                        remove(toy._id)
                    }}><DeleteForever />
                </Button>
            </div>
        </div>
    )
}
