import React from 'react'
import changeThemeColor_2 from '../../utils/darkTheme'

import './bodycontent.css'

const BodyContent = () => {
    return (
        <div className="container">
            <p id='title'>Esse é o buscador de jogador</p>
            <p id='player'>O nome é bem sugestivo, basta clicar em Pesquisar jogador localizado no cabeçalho.</p>
        </div>
    )
}

export default BodyContent