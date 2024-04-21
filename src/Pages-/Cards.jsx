import { AiOutlineDollar } from "react-icons/ai";
import { FaAudioDescription, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cards = ({card}) => {
   
    const {  location, segment_name, description, price, status, area, facilities, image, estate_title,id }= card;
    return (
        <div className="card w-full border-2 border-gray-300 bg-white" data-aos="flip-left" data-aos-duration="1000">
            <figure className="px-5 pt-5">
                <img data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" src={image} alt="Shoes" className="rounded-xl h-[270px]" />
            </figure>
            <div className="card-body  " data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h2 className="card-title">{estate_title}</h2>
                <div className="flex  justify-around mx-5">
                    <p className="font-medium text-green-600">{segment_name}</p>
                    <h2 className="rounded-xl bg-green-200 border border-green-500 font-medium text-green-600 px-3">{status}</h2>
                </div>
                <div className="flex justify-evenly" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <p className="flex items-center gap-2"><FaLocationDot />{location}</p>
                    <p className="flex items-center gap-2"><AiOutlineDollar />{price}</p>
                </div>
                <div className=" justify-between " data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <p className="">Area: {area}</p>
                   
                    <div data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <>

                            {facilities.map((fac, index) => (
                                <ul className=' ' key={index}>
                                    <li>{fac}</li>
                                </ul>
                            ))}
                        </>
                   </div>
                </div>
               {
                    description.length > 200 ? <p className=""><FaAudioDescription />{description.slice(0, 200)}<Link to={`/details/${id}`}><span className="text-blue-500 font-bold"> Read More...</span></Link></p>:<p>{description}</p>
               }
                <div className="card-actions" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <button className="w-full  border-2 bg-green-400 text-white font-semibold border-green-600 py-2 rounded-3xl"><Link to={`/details/${id}`}>View Property</Link ></button>
                </div>
            </div>
        </div>
    );
};

export default Cards;