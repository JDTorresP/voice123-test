import React, { Component } from 'react';
import Header from './basic/Header.jsx';
import SearchBar from './basic/SearchBar.jsx';
import VoiceActors from './complex/VoiceActors.jsx';
import Paginator from './basic/Paginator.jsx';
import '../../styles/main/SearchUI.css';


export default class SearchUI extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="search_bar">
                     <SearchBar/>
                </div>
                <div className="actors_cards">
                    <VoiceActors/>
                </div>
                <div className="paginator">
                    <Paginator/>
                </div>
            </div>
        )
    }
}
