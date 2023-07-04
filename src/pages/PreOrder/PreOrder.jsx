import React, { useState } from 'react'
import Image1 from '../../assets/img/banner1.png'
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import LocationCard from '../../components/CardLocation/LocationCard'
import iconCalendar from '../../assets/img/iconCalendar.png'
import iconClock from '../../assets/img/iconClock.png'
import iconTicket from '../../assets/img/iconTicket.png'
import arrowBack from '../../assets/img/arrowBack.png'

function PreOrder() {
    const [number, setNumber] = useState(0);

    const handleIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const handleDecrease = () => {
        setNumber(prevNumber => (prevNumber > 0 ? prevNumber - 1 : 0))
    }

    const tickets = [
        {
            id: 1,
            title: 'VIP Ticket',
            price: 100,
            location: 'Estadio Cuscatlan'
        },
        {
            id: 2,
            title: 'Preferencial',
            price: 50,
            location: 'Estadio Cuscatlan'
        },
        {
            id: 3,
            title: 'General',
            price: 25,
            location: 'Estadio Cuscatlan'
        }
    ]

    return (
        <div className="font-montserrat">
            <Navbar />
            <a href={'/events'}>
            <div>
                <img src={Image1} alt="Imagen" className="h-60 w-full" />
            </div>

            <div className="flex items-center m-4">
                <img src={arrowBack} alt="Google" className="h-4 w-2 inline-block" />
                <p className="text-pure-indigo text-l font-extralight m-2">Atras</p>
            </div>
            </a>

            <p className="text-pure-indigo text-3xl font-extrabold m-4">Bad Bunny World’s Hottest Tour</p>

            <div className="flex flex-wrap m-2">
                <div className="p-2">
                    <div className="bg-pure-indigo rounded-full py-2 px-4 flex items-center">
                        <img src={iconCalendar} alt="Google" className="h-4 w-4 inline-block" />
                        <p className="text-white font-normal inline-block ml-2">ABR 15, 2022</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="bg-pure-indigo rounded-full py-2 px-4 flex items-center">
                        <img src={iconClock} alt="Google" className="h-4 w-4 inline-block" />
                        <p className="text-white font-normal inline-block ml-2">7:00 PM</p>
                    </div>
                </div>
            </div>

            <p className="ml-4 font-normal text-lg">Localidades</p>

            <div className="flex flex-wrap">
                {tickets.map((ticket) => (
                    <LocationCard
                        key={ticket.id}
                        title={ticket.title}
                        price={ticket.price}
                        location={ticket.location}
                    />
                ))}
            </div>

            <div className="flex items-center m-4">
                <p className="mr-4 font-normal text-lg">Cantidad de tickets</p>
                <button className="p-2 bg-pure-indigo text-white font-bold rounded-l" onClick={handleDecrease}>
                    -
                </button>
                <span className="px-5 border-indigo bg-white">{number}</span>
                <button className="p-2 bg-pure-indigo text-white font-bold rounded-r" onClick={handleIncrease}>
                    +
                </button>
            </div>
            
            <a href={'/cartoder'}>
            <div className="flex justify-end m-4">
                <button className="bg-pure-indigo text-white font-normal rounded-lg py-2 px-4 flex items-center">
                    <img src={iconTicket} alt="Google" className="h-4 w-4 inline-block" />
                    <span className="ml-2 font-normal">Comprar</span>
                </button>
            </div>
            </a>
            <Footer />
        </div>
    )
}

export default PreOrder