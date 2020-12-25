import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './noviProizvod.css';

export default class noviProizvod extends Component {
    
    constructor(props) {
        super(props);

        this.unesiProizvod = this.unesiProizvod.bind(this);
        this.unesiNaziv = this.unesiNaziv.bind(this);
        this.unesiOpis = this.unesiOpis.bind(this);

        this.state = {
          naziv: undefined,
          opis:  undefined
        }
    }

    unesiNaziv(e) {
      console.log("ime")
      this.setState(
        {
          "naziv": e.target.value
        });
    }

    unesiOpis(e) {
      console.log("ime2")

      this.setState(
        {
          "opis": e.target.value
      });
    }

    

    unesiProizvod = async() => {
      
      console.log("ime3")
      if (this.state.naziv === undefined || this.state.opis === undefined) 
      {
        console.log("ime3")
        console.log("Popunite sva polja!")
      } 
      else 
      {
        

        await fetch('/admin/unos-novog-proizvoda', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            naziv: this.state.naziv,
            opis: this.state.opis
          })
        });
      }

      document.querySelectorAll('input').forEach(input => 
        (input.value = "")
      );
      
      this.setState({naziv: undefined, opis: undefined});
    }


    render() {
        return (
          
            <form>
              <div id="noviProizvod">

                <label> NAZIV </label>
                <input type="text" id="nazivNovogProizvoda" onChange={ this.unesiNaziv } placeholder="Naziv..." required></input>


                <label> OPIS  </label>
                <input type="text" id="opisNovogProizvoda" onChange={ this.unesiOpis } placeholder="Opis..." required></input>

                <button type="submit" id = "unosProizvoda" onClick={this.unesiProizvod}>
                  DODAJ NOVI PROIZVOD
                </button>

                <p> </p>
                <NavLink
                    to="/"> POCETNA
                </NavLink>
              </div>
            </form>
        )
    }
}