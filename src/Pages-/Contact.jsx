import { useEffect } from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";


const Contact = () => {
    useEffect(() => {
        document.title = "Contact"
    });
    return (
        <div className="">
            <div className="hero min-h-[400px] rounded-2xl animate__animated animate__zoomIn" style={{ backgroundImage: 'url(https://i.ibb.co/n6PhwNb/star-favourite-label-box-bar-banner-graphic.jpg)' }}>
            </div>
            <div className="card mx-5 md:w-2/3 md:mx-auto bg-green-200 shadow-xl my-16 border-2 border-gray-300 animate__animated animate__zoomIn" >
                
                <div className="card-body items-center text-center " data-aos="flip-left" data-aos-duration="1000">
                    <h2 className="card-title text-xl md:text-3xl font-semibold animate__animated animate__slideInLeft"> <span className=" text-2xl md:text-4xl text-orange-500 font-bold">Residential</span> Properties Inc</h2>
                    <p className="animate__animated animate__slideInRight">"Hello, and thank you for considering Residential Properties Inc. for your real estate needs. Whether you're buying, selling, renting, or just seeking advice, we're here to assist you every step of the way. Our team of dedicated professionals is committed to providing you with personalized service and expert guidance to help you achieve your goals. Please feel free to reach out to us with any questions or inquiries you may have. We look forward to the opportunity to serve you and make your real estate experience a smooth and successful one. How can we assist you today?"</p>
                    
                </div>
            </div>
            <div className="card mx-5 md:w-2/3 md:mx-auto bg-green-200 shadow-xl my-16 border-2 border-gray-300 animate__animated animate__zoomIn">
                
                <div className="card-body items-center text-center " data-aos="flip-left" data-aos-duration="1000">
                    <h2 className="card-title text-3xl text-orange-500 font-bold animate__animated animate__slideInLeft"> why contact ?</h2>
                    <p className="animate__animated animate__slideInRight">The Contact Us section on a website serves as a direct line of communication between the company and its customers or potential clients. It's a vital component that allows visitors to reach out with inquiries, feedback, or requests for assistance. By providing clear contact information and possibly a contact form, businesses can facilitate communication and foster trust with their audience. This section is essential for addressing customer needs, resolving issues, generating leads, and ultimately building stronger relationships with clients. It demonstrates the company's commitment to accessibility and customer service, enhancing the overall user experience on the website.</p>
                    
                </div>
            </div>
            <div className="card mx-5 md:w-2/3 md:mx-auto bg-green-200 shadow-xl my-16 border-2 border-gray-300 animate__animated animate__zoomIn">
                
                <div className="card-body items-center text-center " data-aos="flip-left" data-aos-duration="1000">
                    
                    <p className="animate__animated animate__slideInRight">"Stay connected with us! Follow us on Facebook, Twitter, and Instagram for the latest updates. Need assistance? Shoot us an email at <span className="font-medium text-green-500 flex items-center gap-2 justify-center"><MdOutlineMailOutline />rpi@gmail.com</span> or give us a call at <span className="font-medium text-green-500 flex items-center gap-2 justify-center"><FaPhoneAlt />01610000000</span>. We're here to help you with all your real estate inquiries!"</p>
                    <div className="flex items-center gap-2 justify-center" data-aos="flip-left" data-aos-duration="1000">
                        <FaFacebook /> <BsTwitterX /> <BsInstagram /> <span className="text-xl"><MdOutlineMailOutline /></span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;