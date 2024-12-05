import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiStarSFill } from "react-icons/ri";
import Navebar from './Navebar';
import axios from 'axios';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaUser, FaUserCircle, FaUserClock } from 'react-icons/fa';
import { FaUsersBetweenLines, FaUsersLine } from 'react-icons/fa6';

import { LuUserPen } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import UserSideBar from './UserSideBar';

const EditProfile = () => {
  const [profile, setProfile] = useState("");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [businessCategory, setBusinessCategory] = useState([]);
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const location = useLocation();
  const navigete = useNavigate()
  let categories = [
    "A.C. SERVICE",
    "ADVOCATE",
    "ALUMINIUM WORKER",
    "AUTO RICKSHAW",
    "AUTO MOBILE & SALES",
    "BABY SITTING",
    "BAGGI (HORSE CART)",
    "BANK SERVICE",
    "BANQUET HALL",
    "BATTERY SERVICE",
    "BEAUTY PARLOUR",
    "BIKE SERVICE",
    "BROKER",
    "BUSINESS CONSULTANT",
    "BICYCLE",
    "CAFE",
    "CAR DECORATOR",
    "CAR SERVICE",
    "CAR WASHING",
    "CAR WIRING",
    "CARE TAKER",
    "CARPENTER",
    "CATERING",
    "CCTV.CAMERA",
    "CHAIR REPAIRING",
    "CHARTERED ACCOUNTAT",
    "CHILDREN WEAR",
    "CLASSES",
    "COMPUTER CLASSES",
    "COMPUTER HARDWARE",
    "COMPUTER SOFTWARE",
    "COSMETIC STORE",
    "COURIER SERVICE",
    "DAIRY PRODUCT",
    "DANCE CLASSES",
    "DESIGNER / EDITOR",
    "DHOLI",
    "DIAMOND BUSINESS",
    "DIGITAL MARKETING",
    "DJ SOUND",
    "DOCTOR",
    "E - COMMERCE",
    "EDUCATION",
    "ELECTRICIAN",
    "ELECTRONIC PRODUCT",
    "EMPLOYEE",
    "ENGINEER",
    "EVENT MANAGEMENT",
    "WELDING",
    "FARMER",
    "FASHION DESIGNER",
    "FAST FOOD",
    "FINANCIAL",
    "FLEX BOARD HOARDING",
    "FLOWER DECORATION",
    "FREELANCER",
    "FURNITURE",
    "GAS CHULA SERVICE",
    "GENERATOR SERVICE",
    "GEYSER SERVICE",
    "GLASS WORK",
    "GOVT. PUBLIC SERVICE",
    "GOVT. EMERGENCY SERVICE",
    "GRUH UDHYOG",
    "GYM",
    "HEALTH CARE",
    "HOME CLEANING",
    "HOSPITAL",
    "HOUSE WIFE",
    "IMITATION JEWELLERY",
    "INDUSTRIAL INSTRUMENT",
    "INSURANCE",
    "INTERIOR DESIGNER",
    "INTERNET DEPARTMENT",
    "INVERTER SERVICE",
    "JOB PLACEMENT",
    "JUICE CENTER",
    "LABOUR",
    "LAUNDRY",
    "LIFT SERVICE",
    "LIGHTING",
    "MAID",
    "MANDAP SERVICE",
    "MANUFACTURING",
    "MARKETING",
    "MARRIAGE BUREAU",
    "MEDICAL STORE",
    "MEHNDI ARTIST",
    "MEN'S WEAR",
    "MOBILE & ACCESSORIES",
    "MOTOR SERVICE",
    "MOVERS & PACKER",
    "NURSERY",
    "ORCHESTRA",
    "OTHER",
    "OVEN SERVICE",
    "PAINTER",
    "PANDIT",
    "PASSPORT AGENT",
    "PEST CONTROL",
    "PETCARE SERVICE",
    "PHOTOGRAPHY",
    "PHYSIOTHERAPIST",
    "PLUMBER",
    "PRINTING PRESS",
    "R.O. SERVICE",
    "REAL - ESTATE",
    "REFRESHMENT",
    "RESTAURANTS",
    "RETIRED",
    "RIDES",
    "RTO AGENT",
    "REFRIGERATOR SERVICE",
    "SCRAP ( BHANGAR )",
    "SECURITY SERVICE",
    "SHOEMAKER ( MOCHI )",
    "SHOP",
    "SHUTTER REPAIR",
    "SOCIAL WORKER",
    "SOFA CLEANING",
    "SOLAR PANEL",
    "SOUND SYSTEM REPAIRING",
    "SPOKEN ENGLISH CLASSES",
    "SPORTS",
    "STATIONERY",
    "STOCK MARKET",
    "STUDENT",
    "STUDY CLASSES",
    "SALON",
    "TAXI",
    "TEA CENTER",
    "TELECOM DEPARTMENT",
    "TEXTILE",
    "TIFFIN SERVICE",
    "TOUR & TRAVELERS",
    "TAILOR",
    "TOWING",
    "TRADERS",
    "TRANSPORT",
    "TRAVEL AGENT",
    "TUITION CLASS",
    "T.V. SERVICE",
    "TWO WHEELERS WIRING",
    "TYRE PUNCTURE FIXING",
    "VEGETABLES & FRUITS",
    "VETER INARY DOCTOR",
    "VISA CONSULTANCY & GUIDANCE",
    "WASHING MACHINE SERVICE",
    "WATER SUPPLIER",
    "WEALTH MANAGEMENT",
    "WOMEN WEAR",
    "XEROX",
    "YOGA CLASSES"
  ]
  const toggleSelection = (category) => {
    if (businessCategory.includes(category)) {
      setBusinessCategory(businessCategory.filter((c) => c !== category));
    } else {
      setBusinessCategory([...businessCategory, category]);
    }
  };

  //  const backend_API = "http://localhost:4000"
  const backend_API = "http://localhost:3000/auth/updateProfile"
  const token = JSON.parse(localStorage.getItem('token'))
  console.log(token, "token Edit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullData = { name, email, phone, address, businessCategory, businessName, businessAddress };

    try {
      const response = await axios.post(backend_API, fullData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const data = await response.data;
      setProfile(data)
      console.log(data, "data Edit");
      // console.log(data);
      if (response.status === 200) {
        // localStorage.setItem('token', JSON.stringify(response.data.token))
        localStorage.setItem("Users", JSON.stringify(data.user))
        // localStorage.setItem("Users",token)
        // navigete('/profile')

      }
      // console.log(data);

    } catch (error) {
      console.log(error);
      return false;
    }

  };
  useEffect(() => {
    setName(location?.state?.name)
    setEmail(location?.state?.email)
    setPhone(location?.state?.phone)
    setAddress(location?.state?.address)
    setBusinessCategory(location?.state?.businessCategory || []),
      setBusinessName(location?.state?.businessName),
      setBusinessAddress(location?.state?.businessAddress)
  }, [location?.state])

  return (
    <>
      <Navebar />
      <UserSideBar />
      <section className='pt-32'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className='py-2'>Profile Setting</h2>
              <div className='card border-0 bg-base-100 shadow-xl'>
                <form action="" className=' p-3'>

                  <div className='profilepic d-flex justify-content-between'>
                    <figure className='rounded-md m-3'>
                      <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" >

                      </img>
                    </figure>
                    <span className='bg-white rounded-full m-2 shadow-xl w-[30px] h-[30px] d-flex align-items-center justify-content-center '><HiDotsHorizontal /></span>
                  </div>
                  <div className='form-detaile d-flex flex-wrap w-full py-2 d-flex'>
                    <div className="col-12 col-md-6 p-2 w-full">
                      <label className="block text-md font-medium p-2 text-bold "> Name</label>
                      <label htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2'>
                        <input
                          type="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className=' w-100 outline-0 ' />
                        <LuUserPen className='text-xl' />
                      </label>
                    </div>
                    <div className="col-12 col-md-6 p-2 w-full">
                      <label className="block text-md font-medium p-2 text-bold "> Email</label>
                      <label htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2'>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className=' w-100 outline-0 ' />
                        <MdAlternateEmail className='text-xl' />
                      </label>
                    </div>
                    <div className="col-12 col-md-6 p-2 w-full">
                      <label className="block text-md font-medium p-2 text-bold ">Contact </label>
                      <label htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2'>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className=' w-100 outline-0 ' />
                        <LuPhone className='text-xl' />
                      </label>
                    </div>
                    <div className="col-12 col-md-6 p-2 w-full">
                      <label className="block text-md font-medium p-2 text-bold ">Address</label>
                      <label htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className=' w-100 outline-0 ' />
                        <FaRegAddressCard className='text-xl' />
                      </label>

                    </div>
                    <div className="col-12 col-md-6 p-2 w-full">
                      <label className="block text-md font-medium p-2 text-bold ">Bussiness Category</label>
                      <div className="">
                        <div className="border border-2 rounded-md p-2 bg-white">
                          {businessCategory.length > 0 ? (
                            businessCategory.map((category, i) => (
                              <span
                                key={++i}
                                className="inline-block bg-green-500 text-white px-3 py-1 text-sm rounded-full mr-2 mb-2"
                              >
                                {category}
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-400">Select categories</span>
                          )}
                        </div>
                        <ul className=" z-10 border border-gray-300 bg-white w-full mt-2 rounded-md shadow-lg max-h-40 overflow-y-auto">
                          {categories.map((category, i) => (
                            <li
                              key={++i}
                              className={`cursor-pointer px-4 py-2 hover:bg-green-200 ${businessCategory.includes(category) ? "bg-green-200" : ""
                                }`}
                              onClick={() => toggleSelection(category)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 p-2 w-full">
                      <label className="block text-md font-medium p-2 text-bold ">Bussiness Address</label>
                      <div className="col-12 d-flex flex-wrap">
                        <div className="col-6">
                          <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                            <input
                              type="text"
                              value={businessAddress}
                              onChange={(e) => setBusinessAddress(e.target.value)}
                              className=' w-100 outline-0 bg-none' placeholder="area" />
                            <FaRegAddressCard className='text-xl' />
                          </div>

                        </div>
                        <div className="col-6">
                          <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                            <input
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              className=' w-100 outline-0 ' placeholder='city' />
                            <FaRegAddressCard className='text-xl' />
                          </div>
                        </div>
                        <div className="col-6">
                          <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                            <input
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              className=' w-100 outline-0 ' placeholder='state' />
                            <FaRegAddressCard className='text-xl' />
                          </div>
                        </div>
                        <div className="col-6">
                          <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                            <input
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              className=' w-100 outline-0 ' placeholder='country' />
                            <FaRegAddressCard className='text-xl' />
                          </div>
                        </div>
                        <div className="col-6">
                     <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 my-1'>
                     <input
                       type="text"
                       value={address}
                       onChange={(e) => setAddress(e.target.value)}
                      className=' w-100 outline-0 'placeholder='pincode' />
                     <FaRegAddressCard   className='text-xl' />
                     </div>
                     </div>

                      </div>



                    </div>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button
                      type="submit"
                      className="d-flex justify-content-center w-[160px]  bg-orange text-white  py-3 px-2 rounded-md hover:bg-primary "
                    >
                      Edit User <CiEdit className='text-xl text-bold mx-2' />

                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProfile;