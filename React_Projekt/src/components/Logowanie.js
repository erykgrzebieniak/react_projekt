import React from 'react';
import './logowanie.css';
import logi from './logi.json'
import Elementy from './Elementy';

class Logowanie extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      log: '',
      haslo: '',
      idUzytkownika: 0,
      status: false,
      proba: false
    }
  }
  zmianaLoginu = (event) =>{
    this.setState({
      log: event.target.value
    })
  }
  zmianaHasla = (event) =>{
    this.setState({
      haslo: event.target.value
    })
  }
  zaloguj = (event) =>
  {
    for(let a=0;a<logi.length;a++)
    {
      if(this.state.log==logi[a].login)
      {
        if(this.state.haslo==logi[a].haslo)
        {
          this.setState({status: !this.state.status})
          this.state.idUzytkownika = logi[a].id;
          this.props.onClick(this.state.idUzytkownika)
          break;
        }}}
    if(this.state.status==false)
    {
      this.setState({proba: !this.state.proba})
    }
    event.preventDefault()
  }

  render(){
      return (
        <main>
          <section className='Baner'>
          {this.state.status ? <></> :
          <><h1 id='lapa'>Zaloguj</h1>
            <form>
              <div>
                  <input type="text" id='login' placeholder='Login' value={this.state.login} onChange={this.zmianaLoginu}/>
                  <input type="password" id='haslo' placeholder='Hasło' value={this.state.haslo} onChange={this.zmianaHasla}/>
                  <button onClick={this.zaloguj}>Zaloguj</button>
              </div>
              <small>(Login nie zawiera spacji i polskich znaków)</small>
              {this.state.proba ? <p>Błędne dane. Spróbuj ponownie</p> : <></>}
            </form></>}
          </section>
          <Elementy/>
        </main>
      );
  }
}

export default Logowanie;

//Komponent odpowidzialny za sprawdzenie danych logowania
//
//Nazwa klasy
//  konstruktor klasy
//  elementy state:
//  
//  log: '', - przechowuje login
//  haslo: '', - przechowuje haslo
//  idUzytkownika: 0, - przechowuje id Użytkownika
//  status: false, - przechowuje stan czy udało się zalogować
//  proba: false  - przechowuje stan prób (błędne dane podczas logowania)
//
//  funkcja zmianaLoginu - odpowiadą za zmienianie znaków w inputach na bierząco
//  funkcja zmianaHasla  - ^^^
//
//  funkcja zaloguj
//  przeszukuje plik json czy podane dane są zgodne z tymi w pliku
//  jeśli tak:
//  zmiena status zalogowania na przeciwny
//  przypisuje login użytkownika
//  uruchamia funkcje z App.js odpowidzialną za zmiane kontentu
//  przerywa pętle
//
//  jeśli nie:
//  zmienia stan prób na przeciwny aby wyświetlić komunikat
//  event.preventDefault() - anuluje przeładowanie strony
//  
// 56-58:
// inputy oraz button służące do zalogowania
//
// 61:
// if sprawdzający czy były już błędne próby logowania
//
// Autor: Eryk Grzebieniak