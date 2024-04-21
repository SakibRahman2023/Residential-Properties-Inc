import { Link } from "react-router-dom";



const Banner = () => {
    return (
        
        <div className="carousel w-full rounded-t-xl my">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero max-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/vwknrPg/3d-electric-car-building.jpg)' }}>
 
  <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md" data-aos="flip-left" data-aos-duration="1000">
                            <h1 className="mb-5 text-3xl text-black font-bold bg-gray-100 py-2 rounded-2xl">Welcome Home with <span className="text-orange-500">Residential Properties Inc</span></h1>
                            <p className="mb-5 p-3 bg-black rounded-2xl">"Find Your Perfect Home with Residential Properties Inc. - Experts in Real Estate, Committed to Your Comfort and Satisfaction!".</p>
                            <Link to="/register"><button className="border-2 py-.5 px-2 font-bold text-lg border-orange-500 rounded-xl text-orange-500 bg-white">Register</button></Link>
    </div>
  </div>
            </div >
              
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            
                <div className="hero max-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/N6ZDQkR/3d-render-house-countryside.jpg)' }}>
                   
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md" data-aos="flip-left" data-aos-duration="1000">
                            <h1 className="mb-5 text-3xl font-bold">Welcome Home with <span className="text-orange-500">Residential Properties Inc</span></h1>
                            <p className="mb-5">"Find Your Perfect Home with Residential Properties Inc. - Experts in Real Estate, Committed to Your Comfort and Satisfaction!".</p>
                            <Link to="/register"><button className="border-2 py-.5 px-2 font-bold text-lg border-orange-500 rounded-xl text-orange-500 bg-white">Register</button></Link>
                        </div>
                    </div>
                </div >
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                
                <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/TtRB9cv/human-hands-holding-model-dream-house.jpg)' }}>
                   
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md" data-aos="flip-left" data-aos-duration="1000">
                            <h1 className="mb-5 text-3xl font-bold">Welcome Home with <span className="text-orange-500">Residential Properties Inc</span></h1>
                            <p className="mb-5">"Find Your Perfect Home with Residential Properties Inc. - Experts in Real Estate, Committed to Your Comfort and Satisfaction!".</p>
                            <Link to="/register"><button className="border-2 py-.5 px-2 font-bold text-lg border-orange-500 rounded-xl text-orange-500 bg-white">Register</button></Link>
                        </div>
                    </div>
                </div >

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
           
        </div>
           
    );
};

export default Banner;