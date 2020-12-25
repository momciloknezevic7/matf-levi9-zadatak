import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import './sviProizvodi.css';

export default class sviProizvodi extends Component {
  
  constructor(props) {

    super(props);

    this.state = {
      redovi: []
    }

    this.prikaziProizvode = this.prikaziProizvode.bind(this);
  }


  
  componentDidMount() {
    this.prikaziProizvode();
  }



  prikaziProizvode() {
    fetch('/admin/proizvodi')
    .then((res) => res.json())
    .then((res_json) => {
      let redovi = []

      for (const [key, value] of Object.entries(res_json)) {
        
        let tmp = {
          id: parseInt(key), 
          naziv: value.naziv,
          opis: value.opis
        };

        redovi.push(tmp)
      }

      this.setState(
        {redovi: redovi}
      )
    })
    .catch((err) => console.error(err));
  }

  obrisiProizvod = async(id) => {
    const res = await fetch('/admin/proizvodi', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id}),
    });

    res.json()
      .then((res_json) => {
        let redovi = []
        for (const [key, value] of Object.entries(res_json)) {
            
          const tmp= {
              id: parseInt(key),
              naziv: value.naziv,
              opis: value.opis
            };

            redovi.push(tmp);
        }

        this.setState(
          {redovi: redovi});
    })
  }


  render() {
    return (
      <div>    
        <TableContainer component={Paper}>
          <Table className={'table'}>
            <TableHead>

                <TableRow>
                <TableCell >ID</TableCell>
                <TableCell >NAZIV</TableCell>
                <TableCell >OPIS</TableCell>
                <TableCell >BRISANJE</TableCell>
                </TableRow>
            
            </TableHead>

            <TableBody>
            
              {this.state.redovi.map((red) => (
              <TableRow key={red.id}>

                  <TableCell >{red.id}</TableCell>
                  
                  <TableCell >{red.naziv}</TableCell>
                  
                  <TableCell >{red.opis}</TableCell>
                  
                  <TableCell >
                  <Button  color="primary" onClick={()=>this.obrisiProizvod(red.id)}>OBRISI OVAJ PROIZVOD</Button>
                  </TableCell>

            </TableRow>
              ))}

            </TableBody>
                
          </Table>
        </TableContainer>

        <p> </p>
        <NavLink
            to="/"> POCETNA
        </NavLink>
      </div>  
    );
  }
};