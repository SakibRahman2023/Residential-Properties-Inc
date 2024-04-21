import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { MdOutlineMail } from "react-icons/md";
import { FaAudioDescription, FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import Cards from "./Cards";


const Home = () => {
    // const officers = useLoaderData();

   
    useEffect(() => {
        document.title = "Home"
    });

   
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch("./review.json")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                console.log(data.length); 
            })
            
    }, []);

    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("./estate.json")
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
                console.log(data.length); 
            })
            
    }, []);

    return (
        <div>
            <Banner></Banner>
           
            
            <div className=" mt-10" data-aos="flip-left" data-aos-duration="1000">
                <p className="text-center font-bold text-3xl mb-5 text-orange-500">Property Portfolio Showcase</p>
                <p className="text-center font-medium text-xl">"Welcome to our Property Portfolio Showcase, where every listing tells a unique story of home. <br />Explore our curated collection and find your perfect place to call your own."</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mt-10" >
                {
                    cards.map(card => (
                        <Cards key={card.id} card={card} />
                    ))
                }



            </div>

            {/* our officers */}
            <div className=" mt-10" data-aos="flip-left" data-aos-duration="1000">
                <p className="text-center font-bold text-3xl mb-5 text-orange-500">Our Happy Clients</p>
                <p className="text-center font-medium text-xl">"Meet our happy clients! John found his dream home, Emily sold stress-free, and Michael settled in a perfect apartment. <br /> Discover their stories and more with Residential Properties Inc."</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mt-10" >
                {
                    reviews.map(review => <div key={review.id} data-aos="flip-left" data-aos-duration="1000">
                        <div className="card w-full border-2 border-gray-500 shadow-2xl">
                            <div className="bg-green-200 rounded-t-2xl" data-aos="zoom-in" data-aos-duration="1000">
                                <figure className="px-5 pt-5">
                                    <img src={review.image} alt="Shoes" className="rounded-full mb-5 h-56 w-56" />
                                </figure>
                            </div>
                            <div className="card-body items-center text-center ">
                                <h2 className="card-title raleway font-bold text-3xl " data-aos="zoom-in">{review.name}</h2>
                           
                                <div data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                                    <p className="text-left"><span className="font-bold text-lg text-green-500">Review: </span>{review.review}</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;
