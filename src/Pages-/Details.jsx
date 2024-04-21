
import { TfiLocationPin } from "react-icons/tfi";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
   
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    
    const detail = details?.find((detail) => detail.id === idInt);

    
    console.log(detail);
    

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-14">
            <div className=" md:w-1/2 max-auto" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <figure className="px-5 md:pt-20"><img className="rounded-2xl " src={detail.image} alt="" /></figure>
            </div>
            <div className="card-body md:w-1/2 max-auto" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="flex justify-around" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"> 
                     <h3 className="text-xl md:text-2xl font-bold text-blue-500 bg-blue-100 px-3 rounded-2xl shadow-lg">{detail.estate_title}</h3>
                     <div className="md:flex gap-5 text-lg font-semibold">
                        <h3 className="px-2 rounded-2xl border shadow-xl bg-green-200">{detail.segment_name}</h3>
                        <h3 className="px-2 rounded-2xl border shadow-xl bg-green-200">{detail.status}</h3>
                     </div>
                </div>
                <div className="md:flex justify-around text-lg font-semibold my-3" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h3 className="px-2 py-1 rounded-2xl border shadow-xl bg-blue-200"><span className="flex items-center gap-1"><TfiLocationPin />{detail.location}</span></h3>
                    <h3 className="px-2 py-1 rounded-2xl border shadow-xl bg-green-200">Area: {detail.area}</h3>
                    <h3 className="px-2 rounded-2xl border shadow-xl bg-green-200 py-1">{detail.price}</h3>
                </div>
                <div className=" bg-slate-200 p-5 rounded-2xl font-medium ">
                    <span className="text-2xl font-bold text-green-500" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">Description:</span> {detail.description}
                </div>
                <div className=" bg-slate-200 p-5 rounded-2xl font-medium shadow-2xl" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <span className="text-2xl font-bold text-green-500"> Facilities:</span>
                    <li className=""> {
                        detail.facilities[0]
                    } <br /></li>
                    <li>{
                        detail.facilities[1]
                    }<br /></li>
                    
                    <li>{
                        detail.facilities[2]
                    }</li>
                    
                </div>

            </div>
        </div>
    );
};

export default Details;
