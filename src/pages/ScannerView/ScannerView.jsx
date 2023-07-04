import React, { useState } from 'react'
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import { QrScanner } from '@yudiel/react-qr-scanner'

function Scanner() {
  const [scanned, setScanned] = useState(false);
  const [result, setResult] = useState('');

  const handleDecode = (decodedResult) => {
    setResult(decodedResult)

    setTimeout(() => {
      setScanned(true)
    }, 3000)
  };

  return (
    <div className="font-montserrat">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="w-full md:w-2/4 lg:w-1/3 sm:-2 m-12">
          {!scanned ? (
            <QrScanner
              onDecode={handleDecode}
              onError={(error) => console.log(error?.message)}
            />
          ) : (
            <div className="text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 m-16">
              <p className="text-2xl font-bold mb-4">¡Código QR reconocido!</p>
              <p className="text-xl">Resultado: {result}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Scanner