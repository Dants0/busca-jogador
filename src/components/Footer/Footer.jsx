import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import React from 'react'

import './footer.css'

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <h2 id='title'>Dev by Dantas</h2>
                </li>
                <li>
                    <a href="https://github.com/Dants0">
                        <GithubLogo size={28} color="#1d1d1b" weight="thin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/guilherme-góes-8b72531b0">
                    <LinkedinLogo size={28} color="#1d1d1b" weight="thin" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer