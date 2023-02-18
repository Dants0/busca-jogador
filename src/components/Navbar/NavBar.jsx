import React from 'react'
import { Link } from 'react-router-dom'
import changeThemeColor_2 from '../../utils/darkTheme'

import './navbar.css'

const NavBar = () => {
    
    function changeThemeColor(e){
        changeThemeColor_2(e)
    }
    

    return (
        <div>
            <header>
                <h1 id='title'>Busca Jogador</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>
                                <p id='home'>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/pesquisar-jogador'}>
                                <p id='player'>Pesquisar Jogador</p>
                            </Link>
                        </li>
                        <li>
                            <input type="checkbox" className="checkbox" id="checkbox" onChange={e=>changeThemeColor(e)}/>
                            <label htmlFor="checkbox" className="label"  >
                                <i className="fas fa-moon"></i>
                                <i className="fas fa-sun"></i>
                                <span className="ball"></span>
                            </label>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavBar