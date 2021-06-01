import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToyFitler } from '../components/ToyFitler';
import { ToyList } from '../components/ToyList';
import {  useDispatch, useSelector } from 'react-redux';
import { loadToys, removeToy } from '../store/Actions/toyActions'

export const ToyApp = () => {
    const dispatch = useDispatch();
    const toys = useSelector(state => state.toyModule.toys)
    useEffect(() => {
        (async () => {
            const action = await loadToys();
            dispatch(action)
        })();
    }, [dispatch])
    const onRemove = async (id) => {
        
        const action = await removeToy(id);
        dispatch(action);
    }
    const onSetFilter = async (filterBy) => {
        const action = await loadToys(filterBy);
        dispatch(action);
    }

    return (
        (toys) ?
            <div className="toyapp main-container">
                <div className="header-container flex column align-center">
                    <h1 className="header">Our Toys</h1>
                    <ToyFitler onSetFilter={onSetFilter} />
                    <Link to="/toy/edit"><Button endIcon={<Add />} variant="contained" color="primary">Add Toy</Button></Link>
                </div>
                <ToyList toys={toys} remove={onRemove} />
            </div>
            : <h1>Loading..</h1>
    )

}
