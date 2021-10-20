import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { useData } from '../context/StateContext'

import Home from './Home'
import CriarPlaylist from './CriarPlaylist'
import Playlist from './Playlist'
import TracksContainer from './TracksContainer'

export default function Rotas() {

    const data = useData()
    const page = data.playlistIdProps
    return (
        <BrowserRouter>
            <Route component = { Home } path="/" exact />
            <Route component = { CriarPlaylist } path="/criar" exact />
            <Route component = { Playlist } path="/todas" exact />
            <Route component = { TracksContainer } path='/tracks' />
        </BrowserRouter>

    )
}
