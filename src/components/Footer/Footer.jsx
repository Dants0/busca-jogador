import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import React from 'react'

import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
            <ul>
                <li>
                    <h2 id='title'>Dev by Dantas</h2>
                </li>
            </ul>
            <li>
                    <a href="https://github.com/Dants0" target="_blank">
                        <GithubLogo size={28} color="#1d1d1b" weight="thin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/guilherme-góes-8b72531b0" target='_blank'>
                    <LinkedinLogo size={28} color="#1d1d1b" weight="thin" />
                    </a>
                </li>
                <li>
                    <a href="https://ko-fi.com/nosensee" target='_blank'>Buy me a coffe ☕</a>
                </li>
            </div>
        </footer>
    )
}

export default Footer