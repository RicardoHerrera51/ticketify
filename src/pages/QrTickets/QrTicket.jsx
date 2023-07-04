import { useState, useEffect } from 'react'
import QRCode from 'react-qr-code'
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function QrTicket() {
    const [qrData, setQRData] = useState('')

    useEffect(() => {
        const qrCodeData = 'Evento: Bad Bunny World`s Hottest Tour, Lugar: Estadio Cuscatlan, Hora: 7:00 pm, Localidad: General, Usuario: majitocampos92@gmail.com'
        setQRData(qrCodeData)
    }, [])

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center font-montserrat">
                {qrData && (
                    <div className="flex flex-col items-center m-4">
                        <p className="text-center text-pure-indigo text-lg mb-2 font-semibold">Codigo Qr generado </p>
                        <p className="text-center text-2xl mb-2 font-semibold">Bad Bunny World`s Hottest Tour</p>
                        <p className='text-base'>Estadio Cuscatlan / 7:00 P.M</p>
                        <p className='font-semibold m-2 text-2xl' >General</p>
                        <div className="flex justify-center m-6">
                            <QRCode value={qrData} />
                        </div>
                    </div>
                )}
            </div>
            <div className='m-4'>
                <p className='text-base font-light text-silver'>Este ticket es válido para el ingreso de UNA (1) persona para la localidad, fecha, hora y persona indicada por el mismo.</p>
                <p className='text-base font-light text-silver'>El día del evento necesitas unicamente presentar tu código Qr para poder ingresar.</p>
                <p className='text-normal font-light text-silver'>Nos revervamos los derechos de adminisón.</p>
            </div>
            <Footer />
        </div>
    )
}

export default QrTicket