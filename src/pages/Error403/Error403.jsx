import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';

const Error403 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-violet-500">
            <ReportTwoToneIcon className="m-4 text-danger-red" sx={{ fontSize: 120 }} />
            <h1 className="text-8xl font-montserrat font-extrabold text-center mb-6 text-white">403</h1>
            <h2 className="text-3xl font-montserrat font-medium text-center text-white">Acceso no autorizado</h2>
            <p className="text-xl font-montserrat font-medium text-center text-white">
                Algo salió mal. No tienes acceso para visualizar este contenido.
            </p>
            <button className="font-montserrat bg-gray-300 m-4 py-2 px-4 rounded">
                Ir al inicio de sesión
            </button>
        </div>
    )
}

export default Error403