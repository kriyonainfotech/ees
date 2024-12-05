import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const ServieceCategories = () => {
    return (
        <>

            <section>
                <div className="container">
                    <div className="row">
                    <h3 className="text-bold py-2 px-4">Servieces</h3>
                        <div className='col-12 '>
                            <form action=""  className='d-flex flex-wrap'>

                                <div className="col-12 col-md-6 col-lg-3">

                                    <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                                        <input
                                            type="text"
                                           
                                            className=' w-100 outline-0 bg-transparent ' placeholder="Search For Serviecis" />
                                        <button type=''>
                                            <FaSearch className='text-lg' />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div >

            </section>
            <section className='mt-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap ">

                            <div className="col-4 col-md-3 col-lg-2 p-2">
                                <div className="border-0 w-100 h-100  text-center items-center rounded-md ">
                                    <figure className='w-full m-0 p-2 '>
                                        <img className='img-fluid w-100 rounded-md overflow-hidden ' style={{ objectFit: "cover" }} src="https://img.daisyui.com/images/profile/demo/2@94.webp" >
                                        </img>
                                    </figure>
                                    <h6 className='text-lg'>Advocate</h6 >
                                </div>


                            </div>
                            <div className="col-4 col-md-3 col-lg-2 p-2">
                                <div className="border-0 w-100 h-100  text-center items-center rounded-md ">
                                    <figure className='w-full m-0 p-2 '>
                                        <img className='img-fluid w-100 rounded-md overflow-hidden ' style={{ objectFit: "cover" }} src="https://img.daisyui.com/images/profile/demo/2@94.webp" >
                                        </img>
                                    </figure>
                                     <h6 className='text-lg'>Advocate</h6 >
                                </div>


                            </div>
                            <div className="col-4 col-md-3 col-lg-2 p-2">
                                <div className="border-0 w-100 h-100  text-center items-center rounded-md ">
                                    <figure className='w-full m-0 p-2 '>
                                        <img className='img-fluid w-100 rounded-md overflow-hidden ' style={{ objectFit: "cover" }} src="https://img.daisyui.com/images/profile/demo/2@94.webp" >
                                        </img>
                                    </figure>
                                     <h6 className='text-lg'>Advocate</h6 >
                                </div>


                            </div>
                            <div className="col-4 col-md-3 col-lg-2 p-2">
                                <div className="border-0 w-100 h-100  text-center items-center rounded-md ">
                                    <figure className='w-full m-0 p-2 '>
                                        <img className='img-fluid w-100 rounded-md overflow-hidden ' style={{ objectFit: "cover" }} src="https://img.daisyui.com/images/profile/demo/2@94.webp" >
                                        </img>
                                    </figure>
                                     <h6 className='text-lg'>Advocate</h6 >
                                </div>


                            </div>
                            <div className="col-4 col-md-3 col-lg-2 p-2">
                                <div className="border-0 w-100 h-100  text-center items-center rounded-md ">
                                    <figure className='w-full m-0 p-2 '>
                                        <img className='img-fluid w-100 rounded-md overflow-hidden ' style={{ objectFit: "cover" }} src="https://img.daisyui.com/images/profile/demo/2@94.webp" >
                                        </img>
                                    </figure>
                                     <h6 className='text-lg'>Advocate</h6 >
                                </div>


                            </div>
                            <div className="col-4 col-md-3 col-lg-2 p-2">
                                <div className="border-0 w-100 h-100  text-center items-center rounded-md ">
                                    <figure className='w-full m-0 p-2 '>
                                        <img className='img-fluid w-100 rounded-md overflow-hidden ' style={{ objectFit: "cover" }} src="https://img.daisyui.com/images/profile/demo/2@94.webp" >
                                        </img>
                                    </figure>
                                     <h6 className='text-lg'>Advocate</h6 >
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ServieceCategories