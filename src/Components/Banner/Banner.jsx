import React from 'react';
import { BsShieldFillCheck, BsCalendarWeekFill} from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import Lottie from "lottie-react";
import Doctor from "../../assets/Doctor.json";
import { motion } from "framer-motion"
import {fadeIn} from '../variants.js'
import './Banner.css'
const Banner = () => {

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='fw-bold mb-4 heading'>Protect Your Health <br /> And Take Care Of <br /> Your Health</motion.h1>
                        <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="row">
                            <div className="col-lg-6">
                                <div className='d-flex gap-3 '>
                                <div><BsCalendarWeekFill className='text-info' style={{fontSize:"20px"}}/></div>
                                <div>
                                    <h5 style={{fontSize:"17px"}} className='fw-bold'>Make An Appointment</h5>
                                    <h6 style={{fontSize:"15px"}} className='text-secondary'><small>Schedule With Your Favorite Doctor</small></h6>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='d-flex gap-3 '>
                                <div><BsShieldFillCheck className='text-info' style={{fontSize:"20px"}}/></div>
                                <div>
                                    <h5 style={{fontSize:"17px"}} className='fw-bold'>Health Guarantee Forever</h5>
                                    <h6 style={{fontSize:"15px"}} className='text-secondary'><small>We Always Provide The Best Warranty For You</small></h6>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-3">
                                <div className='d-flex gap-3 '>
                                <div><BiSolidUser className='text-info' style={{fontSize:"20px"}}/></div>
                                <div>
                                    <h5 style={{fontSize:"17px"}} className='fw-bold'>Find Your Best Doctor</h5>
                                    <h6 style={{fontSize:"15px"}} className='text-secondary'><small>We Always Provide The Best Warranty For You</small></h6>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-3">
                                <div className='d-flex gap-3 '>
                                <div><HiLocationMarker className='text-info' style={{fontSize:"20px"}}/></div>
                                <div>
                                    <h5 style={{fontSize:"17px"}} className='fw-bold'>Spread In Various Places</h5>
                                    <h6 style={{fontSize:"15px"}} className='text-secondary'><small>Now Clinics Are Available In Various Places</small></h6>
                                </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.button variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='btn btn-info px-4 py-2 me-4 mt-4' style={{color:"whitesmoke", fontWeight:"600", fontSize:"14px", borderRadius:"5px"}}>Book Now</motion.button>
                    </div>
                    <motion.div className="col-lg-6 d-none d-lg-block" variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}}>
                    <Lottie animationData={Doctor} loop={true} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;