import logo from '../../../assets/img/ticketifyLogo.png'

const SidebarAdmin = () => {
    return (
        <div>
            <ul className="absolute z-10 right-0 py-2 w-64 md:w-1/4 bg-penn-blue shadow-lg h-full">
                <li>
                    <a href={'../event-admin'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Eventos
                    </a>
                </li>
                <li>
                    <a href={'../tiers'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Localidades
                    </a>
                </li>
                <li>
                    <a href={'../categories'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Categorías
                    </a>
                </li>
                <li>
                    <a href={'../users'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Usuarios
                    </a>
                </li>
                <li>
                    <a href={'../user-roles'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Permisos de usuarios
                    </a>
                </li>
                <li>
                    <a href={'../organizers'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Organizadores
                    </a>
                </li>
                <li>
                    <a href={'../sponsors'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Patrocinadores
                    </a>
                </li>
                <li>
                    <a href={'../orders'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Órdenes
                    </a>
                </li>
                <li>
                    <a href={'../statistics'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Estadísticas
                    </a>
                </li>
                <li>
                    <a href={'../login'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Cerrar sesión
                    </a>
                </li>
                <li className='absolute bottom-0 left-0'>
                    <a href="#" className="block px-4 py-2">
                        <img src={logo} className='w-32' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SidebarAdmin;
