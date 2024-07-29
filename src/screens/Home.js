import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
<Navbar/>
<div>

<div className="card mt-3" style={{"width": "18rem","maxHeight":"360px"}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title.</p>
    <div className='container w-100'>

    <select className='m-2 h-100 bg-success rounded'>
        {Array.from(Array(6),(e, i)=>{
            return(
                <option key={i+1} value={i+1}>{i+1}</option>
            );
        })}
    </select>

    <select className='m-2 h-100 bg-success rounded'>
     <option value="half">
        Half
     </option>
     <option value="half">
        Full
     </option>
    </select>
    </div>
  </div>
</div>

</div>
<Footer/>
    </div>
  )
}

export default Home;
