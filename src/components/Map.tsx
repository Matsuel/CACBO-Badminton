import React from 'react'
import MapImage from '../assets/map.png'
import Image from 'next/image'

const Map = () => {
    return (
        <div className="w-full h-auto flex items-start justify-start bg-white p-7 rounded-ten">
            <Image src={MapImage} alt="Position gymnase" />
        </div>
    )
}

export default Map