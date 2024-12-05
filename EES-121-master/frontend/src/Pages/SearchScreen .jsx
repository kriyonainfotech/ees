import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navebar from '../components/Navebar';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaLocationArrow, FaLocationDot, FaServer } from 'react-icons/fa6';
import { FaRegAddressCard, FaSearch } from 'react-icons/fa';
import UserSideBar from '../components/UserSideBar';

const SearchScreen = () => {
    const [sevices, setServices] = useState();
    const [filterrecord, setFilterRecord] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    let categories = [
        { id: 1, name: "A.C. SERVICE" },
        { id: 2, name: "ADVOCATE" },
        { id: 3, name: "ALUMINIUM WORKER" },
        { id: 4, name: "AUTO RICKSHAW" },
        { id: 5, name: "AUTO MOBILE & SALES" },
        { id: 6, name: "BABY SITTING" },
        { id: 7, name: "BAGGI (HORSE CART)" },
        { id: 8, name: "BANK SERVICE" },
        { id: 9, name: "BANQUET HALL" },
        { id: 10, name: "BATTERY SERVICE" },
        { id: 11, name: "BEAUTY PARLOUR" },
        { id: 12, name: "BIKE SERVICE" },
        { id: 13, name: "BROKER" },
        { id: 14, name: "BUSINESS CONSULTANT" },
        { id: 15, name: "BICYCLE" },
        { id: 16, name: "CAFE" },
        { id: 17, name: "CAR DECORATOR" },
    ];
    const hendleSubmit = (e) => {
        e.preventDefault();



        // navigate(`/serviceDetail`, { state: search })
    }
    useEffect(() => {
        let filter = [...categories];
        if (search) {
            filter = filter.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (sevices) {
            filter = filter.filter(item => item.name === sevices);
        }

        setFilterRecord(filter);
    }, [search, sevices])

    return (
        <>
            <Navebar />
            <UserSideBar/>

            <div className="container mt-24">
                <div className="row">
                    <div className='col-12 p-3'>

                        <form action="" onSubmit={hendleSubmit} className='d-flex flex-wrap'>
                            <div className="col-12 col-md-6 col-lg-3 p-2">
                                <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                                    <input
                                        type="text"

                                        className=' w-100 outline-0 bg-transparent ' placeholder="location or pincode" />
                                    <FaLocationDot className='text-xl' />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 p-2">

                                <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                                    <input
                                        type="text"
                                        onChange={(e) => setSearch(e.target.value)} value={search}
                                        className=' w-100 outline-0 bg-transparent ' placeholder="Search For Serviecis" />
                                    <button type=''>
                                        <FaSearch className='text-lg' />
                                    </button>
                                </div>
                            </div>

                        </form>


                    </div>

                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        <h2 className='px-4'>All services</h2>
                        <div className="col-12 flex flex-wrap">
                            {filterrecord.length > 0 ? (
                                filterrecord.map((cat, i) => {
                                    return (
                                        <div className="col-xl-3 p-2">
                                            <div className="card border-0 bg-base-100 shadow-xl">
                                                <div className='d-flex justify-content-between'>
                                                    <figure className='rounded-md m-3'>
                                                        <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" >

                                                        </img>
                                                    </figure>
                                                    <span className='bg-white rounded-full m-2 shadow-xl w-[30px] h-[30px] d-flex align-items-center justify-content-center '><HiDotsHorizontal /></span>
                                                </div>
                                                <div className='p-3'>
                                                    <h2 className="text-lg font-bold">{cat.name}</h2>
                                                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laborum.</p>
                                                    <div className="rating rating-sm">
                                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400  " />
                                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                                        <span className='pl-3'>245 rating</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <h5>
                                    No records found. Please select a category or search.
                                </h5>
                            )}


                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default SearchScreen 
