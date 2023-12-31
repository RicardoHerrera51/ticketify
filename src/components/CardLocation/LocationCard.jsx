import React, { useState } from 'react'

const LocationCard = ({ title, price, location }) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleClick = () => {
        setIsSelected(true)
    }

    return (
        <div
            className={`max-w-sm rounded overflow-hidden border shadow-xs m-4 ${isSelected ? 'bg-blue-200' : ''
                }`}
            onClick={handleClick}
        >
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base mb-2">Precio: ${price}</p>
                <p className="text-gray-700 text-base">Lugar: {location}</p>
            </div>
        </div>
    )
}

export default LocationCard