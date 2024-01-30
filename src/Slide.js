import { useState } from 'react';
import './App.css';
import { data } from './data';

function Slide() {
    const [slide, setSlide] = useState(0);

    const {attractionName, imageSlide, description, showMore} = data[slide];

    const [showText, setShowText] = useState(false);

    const previousSlide = () => {
    setSlide((slide => {
        slide --;
        if(slide < 0) {
        return data.length -1;
        }
        return slide;
    }))
    }
    const nextSlide = () => {
    setSlide((slide => {
        slide ++;
        if(slide > data.length -1){
        slide = 0;
        }
        return slide;
    }))
    }

    const showTextClick = (item) => {
        item.showMore = ! item.showMore
        setShowText(!showText)
    }

    return (<div>
        <div className='container'>
            <h1>What to visit in Antalya?</h1>
        </div>
        <div className='container'>
            <img src={imageSlide} alt="sights" width={600} />
        </div>
        <div className='container'>
            <h2>{attractionName}</h2>
        </div>
        <div className='container'>
            <p>{showMore ? description : description.substring(0, 220) + "..."}
            <button className='showMore' onClick={() => showTextClick(data[slide])}>{showMore ? "Show less": "Show more"}</button>
            </p>
        </div>
        <div className='nextPrevious container'>
            <button className='btn' onClick={previousSlide}>Previous</button>
            <button className='btn' onClick={nextSlide}>Next</button>
        </div>
        </div>
        )
    }


export default Slide;