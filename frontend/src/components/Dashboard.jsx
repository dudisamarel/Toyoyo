import {  useDispatch, useSelector } from 'react-redux';
import { loadToys } from '../store/Actions/toyActions'
import { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
export const Dashboard = () => {


    const dispatch = useDispatch();
    const toys = useSelector(state => state.toyModule.toys)
    useEffect(() => {
        (async () => {
            const action = await loadToys();
            dispatch(action)
        })();
    }, [dispatch])

    const adult = toys.filter(toy => toy.type === 'Adult').length
    const funny = toys.filter(toy => toy.type === 'Funny').length
    const educational = toys.filter(toy => toy.type === 'Educational').length
    const data = {
        labels: ['Adult', 'Funny', 'Educational'],
        datasets:
            [{
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
                ,
                data: [adult, funny, educational]
            }
            ]

    }

    return (
        <div className="graph-container flex align-center column">
            <p><span className="red">Toys </span><span className="yellow">by </span><span className="blue">type</span> </p>
            <Doughnut className="graph"
                data={data}
            />
        </div >
    );
}

