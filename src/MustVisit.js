import { useState } from 'react';
import './App.css';
import { data } from './data';

function MustVisit() {

  const [attractions, setAttractions] = useState(data);

  const removeAttractions = (id) => {
    let newAttractions = attractions.filter(attraction => attraction.id !== id);
    setAttractions(newAttractions)
  }
  
  return (<div>
    <div className='container'>
      <h2>Top {attractions.length} Attraction in Antalya</h2>
    </div>
    {attractions.map((attraction => {
      const {id, attractionName, image} = attraction;
      return(
        <div key={id}>
          <div className='container'>
            <h3>{id} - {attractionName}</h3>
          </div>
          <div className='container'>
            <img src={image} alt="city" width={300} />
          </div>
          <div className='container'>
            <button className='btn' onClick={() => removeAttractions(id)}>Remove</button>
          </div>
        </div>
      )
    }))}
    <div className='container'>
            <button className='btn' onClick={() => setAttractions([])}>Delete all</button>
          </div>
    </div>);
}

export default MustVisit;