import React, {Component} from 'react'
import { Link } from 'react-router-dom';

export default class MainPage extends Component{
    render() {
       
        return (
            <div>
                <h1> <Link to="/admin/proizvodi">SVI PROIZVODI</Link> </h1>
                <p> </p>
                <h1> <Link to="/admin/unos-novog-proizvoda">UNESI NOV PROIZVOD</Link> </h1>
            </div>
        )
    }
};