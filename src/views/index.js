import React from 'react';
import FilmList from './film-list';

export default class App extends React.Component {
    render() {
        return ( 
            <div className="container">
                <FilmList />
            </div>
        )
    }
}