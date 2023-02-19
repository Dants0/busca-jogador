import axios from 'axios'
import { InstagramLogo, TwitterLogo } from 'phosphor-react'
import React, { useState } from 'react'
import errorController from '../../utils/erroControler'
import exportDataPlayer from '../../utils/exportDataFIle'
import fixDateBorn from '../../utils/fixDateBorn'
import getYearsOld from '../../utils/getYearsOld'

import './searchPlayer.css'

const SearchPlayerByNameValue = () => {
  const [players, setPlayers] = useState({
    name: '',
    date_born: '',
    birth_location: '',
    nationality: '',
    photo: '',
    instagram: '',
    twitter: '',
  })

  const [infoPlayersAdd, setInfoPlayersAdd] = useState({
    description: '',
    height: '',
    weight: '',
    footside: '',
    status: '',
    salary: '',
    sport: '',
    team: '',
    signed_date: '',
    position: ''
  })

  const [searchPlayer, setSearchPlayer] = useState('')

  const baseUrl = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchPlayer}`


  function searchPlayerByName(e) {
    if (!searchPlayer) {
      alert('Digite antes de pesquisar');
    } else {
      axios.get(baseUrl)
        .then(res => {
          const playersTeste = {
            data: res.data.player
          }
          setPlayers({
            name: playersTeste.data[0].strPlayer,
            nationality: playersTeste.data[0].strNationality,
            birth_location: playersTeste.data[0].strBirthLocation,
            date_born: playersTeste.data[0].dateBorn,
            photo: playersTeste.data[0].strCutout,
            instagram: playersTeste.data[0].strInstagram,
            twitter: playersTeste.data[0].strTwitter
          })
          setInfoPlayersAdd({})
        }).catch(err => console.log(errorController()))
    }
  }


  return (
    <>
      <div className='search-box'>
        <input className='searchBar' type="text" placeholder="Digite o jogador aqui..." onChange={e => setSearchPlayer(e.target.value)} />
        <button onClick={e => searchPlayerByName(e)}>Pesquisar</button>
      </div>

      <div className='info-box'>
        <img src={players.photo} alt={`${players.name ? 'photo' : ''}`} />
        <span>{players.name}</span>
        <span>
          {
            players.name ?
              getYearsOld(players.date_born)
              :
              ''
          }
        </span>
        <span>
          {
            players.name ?
              fixDateBorn(players.date_born)
              : ''
          }
        </span>
        <span>{players.birth_location}</span>
        <span>{players.nationality}</span>
        {
          players.name ?
            <>
              <a href={`//${players.instagram}`} target="_blank" rel='noopener noreferrer'>
                <InstagramLogo size={28} color="#1d1d1b" weight="thin" />
              </a>
              <a href={`//${players.twitter}`} target="_blank" rel='noopener noreferrer'>
                <TwitterLogo size={28} color="#1d1d1b" weight="thin" />
              </a>
            <button onClick={exportDataPlayer(players)}>Baixe os dados</button>
            </>
            :
            ''

        }

      </div>
    </>
  )
}

export default SearchPlayerByNameValue