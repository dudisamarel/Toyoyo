import React from 'react'
import gif from '../assets/imgs/giphy.gif'
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className="home-container flex column align-center">
            <h1>We Love Toys</h1>
            <div className="text flex column">
                <span>When the toy museum closes each evening, all the toys come to life. Bunting, the old toy cat, takes it upon himself to <span className="blue">count and inspect the toys and give them a history lesson.</span> But one night the toys decide to teach Bunting how to have some fun. This enchanting story has detailed illustrations and children will love to spot the different toys scattered throughout the pages. </span>
                <span>Lorem ipsum dolor sit amet <span className="blue">consectetur adipisicing elit. Eligendi non numquam consequatur beatae iusto </span>architecto illum sed corrupti earum ratione ducimus dolore debitis sapiente, enim deleniti similique laudantium et voluptatum?</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="blue">Cupiditate iusto nihil saepe ullam voluptatibus </span>officia nobis eaque delectus unde ipsam, aut dicta eligendi adipisci ipsum aliquid harum magnam vel quasi.</span>
                <div className="video-ratio">
                    <Link to="/toy">
                        <img  alt="toys" src={gif}></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}
