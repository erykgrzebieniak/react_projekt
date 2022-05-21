import React from "react";
import Logowanie from './components/Logowanie'
import Zalogowano from './components/Zalogowano/Zalogowano.js'


class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       login: true,
       idU: 0
    }
 }

  onClick(id){
    const noweId = id
    this.state.idU = noweId
    this.setState({login: !this.state.login})
  }
  render(){
    return(
      <>
      {this.state.login ? 
         <Logowanie onClick={this.onClick.bind(this)}/> : <><Zalogowano onClick={this.onClick.bind(this)}/></>}
         </>
   );
  }
}

export default Main;

//Konponent odpowiedzialny za zmianę kontentu po zalogowaniu
//
//Nazwa klasy
//  konstruktor klasy
//  elementy state:
//  login - przechowuje stan czy użytkownik zalogował się
//  idU - przechowywuje id użytkownika
//
//  funkcja onClick
//  parametry wejściowe: id użytkownika
//  przypisuje id do state
//  Zmienia stan zalogowania na przeciwny
//
//  OPIS: Funkcj ma za zadanie zmiane stanu zalogowania na przeciwny a do celowo zmianę wyświetlanego konponentu 
//        ID którym zajmuje sie funkcja miało zostać użyte do zmiany zawartości w zależności od użytkownika lecz niestety nie udało mi się zrobić tego
//
//  23 linia if sprawdzający stan czy użytkownik jest zalogowany
//
//Autor: Eryk Grzebieniak