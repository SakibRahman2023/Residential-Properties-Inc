import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";



const About = () => {
    useEffect(() => {
        document.title = "About"
    });

    const [officers, setOfficers] = useState([]);
    console.log(officers)

    useEffect(() => {
        fetch("./officer.json")
            .then((res) => res.json())
            .then((data) => {
                setOfficers(data);
                console.log(data.length);
            })

    }, []);
    return (
        <div>
            <div className=" mt-10" data-aos="flip-left" data-aos-duration="1000">
                <p className="text-center font-bold text-3xl mb-5 text-orange-500">Our Officers</p>
                <p className="text-center font-medium text-xl">"Explore the wealth of knowledge and expertise within our officers'. <br /> We're here to guide you every step of the way."</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mt-10" >
                {
                    officers.map(officer => <div key={officer.id} data-aos="flip-left" data-aos-duration="1000">
                        <div className="card w-full border-2 border-green-200 shadow-2xl">
                            <div className="bg-slate-300 rounded-t-2xl" data-aos="zoom-in" data-aos-duration="1000">
                                <figure className="px-5 pt-5">
                                    <img src={officer.image} alt="Shoes" className="rounded-full mb-5 h-56 w-56" />
                                </figure>
                            </div>
                            <div className="card-body items-center text-center " data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <h2 className="card-title raleway font-bold text-3xl ">{officer.name}</h2>
                                <h2 className="card-title raleway font-bold text-xl ">{officer.position}</h2>

                                <p className="text-left">{officer.bio}</p>
                                <p className="flex items-center gap-2"><MdOutlineMail />{officer.email}</p>
                                <p className="flex items-center gap-2"><FaPhoneAlt />{officer.phone}</p>
                                <p className="text-orange-500 font-semibold">{officer.Company}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-14">
                <div className="card w-full p-5 md:p-10 mx-5 md:mx-auto   shadow-xl bg-green-100 " data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h3 className="text-center text-3xl font-bold to-red-500 mb-5" data-aos="zoom-in">Overview </h3>
                    <p data-aos="zoom-in">Residential Properties Inc (RPI) is a respected real estate brokerage specializing in residential properties. With a focus on homes, apartments, condominiums, and townhouses, RPI provides comprehensive services for clients interested in buying, selling, or renting residential real estate.</p>
                </div>
                <div className="card w-full p-5 md:p-10 mx-5 md:mx-auto   shadow-xl bg-green-100 " data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h3 className="text-center text-3xl font-bold to-red-500 mb-5" data-aos="zoom-in">Services </h3>
                    <p data-aos="zoom-in"> RPI offers a range of services tailored to meet clients' residential real estate needs. Whether clients are buying, selling, or renting properties, RPI provides expert guidance, personalized assistance, and comprehensive support throughout the entire process.</p>
                </div>
                <div className="card w-full p-5 md:p-10 mx-5 md:mx-auto   shadow-xl bg-green-100 " data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h3 className="text-center text-3xl font-bold to-red-500 mb-5" data-aos="zoom-in">Expertise </h3>
                    <p data-aos="zoom-in">With a team of experienced real estate agents and brokers, RPI brings in-depth knowledge and expertise to every client interaction. RPI's professionals are well-versed in local market trends, property values, and neighborhood dynamics, ensuring clients receive informed advice and guidance.</p>
                </div>
                <div className="card w-full p-5 md:p-10 mx-5 md:mx-auto   shadow-xl bg-green-100 " data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h3 className="text-center text-3xl font-bold to-red-500 mb-5" data-aos="zoom-in">Online Presence </h3>
                    <p data-aos="zoom-in">RPI maintains a strong online presence through its company website, social media platforms, and property listings portals. Through these channels, clients can access a wealth of information about available properties, market insights, and RPI's services, making the real estate process more accessible and convenient.</p>
                </div>
                <div  className="card w-full p-5 md:p-10 mx-5 md:mx-auto  shadow-xl bg-green-100 " data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h3 className="text-center text-3xl font-bold to-red-500 mb-5 " data-aos="zoom-in">Client Focus  </h3>
                    <p data-aos="zoom-in"> RPI prioritizes client satisfaction and aims to exceed expectations at every stage of the real estate transaction. By delivering personalized service, clear communication, and timely assistance, RPI builds lasting relationships with clients and helps them achieve their real estate goals effectively.</p>
                </div>
                <div className="card w-full p-5 md:p-10 mx-5 md:mx-auto shadow-xl bg-green-100 " data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h3 className="text-center text-3xl font-bold to-red-500 mb-5" data-aos="zoom-in">Community Involvement </h3>
                    <p data-aos="zoom-in">As a local real estate company, RPI is committed to serving the community beyond real estate transactions. RPI may actively participate in community events, sponsorships, and charitable initiatives, demonstrating a dedication to giving back and supporting the neighborhoods they serve.</p>
                </div>
            </div>
            <div className="card w-full p-5 md:p-10 mx-5 md:mx-auto md:w-2/3  shadow-xl my-10 bg-green-100" data-aos="zoom-in" >

                Residential Properties Inc (RPI) is a renowned real estate firm specializing in residential properties. With a wealth of experience and expertise, RPI assists clients in buying, selling, and renting homes, apartments, condominiums, and townhouses. Committed to excellence, RPI provides personalized service, expert guidance, and comprehensive support throughout the entire real estate transaction process. Through a team of dedicated professionals, RPI delivers tailored solutions to meet clients' unique needs and preferences. Whether clients are first-time buyers, seasoned investors, or sellers looking to maximize their property's value, RPI offers trusted advice, market insights, and unparalleled service to help clients achieve their goals.
            </div>
       
        </div>
       
    );
};

export default About;