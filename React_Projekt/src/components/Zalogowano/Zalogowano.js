import React from "react"
import './zalogowano.css'
import Lista from './Lista.js'
import PojedynczyElement from './PojedynczyElement.js'
import czytanie from './czytane.json'

class Zalogowano extends React.Component{
    state = {
        elementy: czytanie
    }


    ksiazkaPrzeczytana(id){
        const index = this.state.elementy.findIndex(x => x.id === id)

        const zmStatus = this.state.elementy
        zmStatus[index].st = true

        this.setState({ elementy: zmStatus})
    }

    zmianaKsiazki(event){
        let nowaWartosc = event.target.value
        this.setState({inputValue: nowaWartosc})
    }

    zmianaAutora(event){
        let nowaWartosc2 = event.target.value
        this.setState({inputValue2: nowaWartosc2})
    }

    dodajKsiazke(){
        let pojEle = {
            id: Math.random(),
            tyt: this.state.inputValue,
            aut: this.state.inputValue2
        }
        let zmStatus =[pojEle, ...this.state.elementy]
        this.setState({elementy: zmStatus})
        this.setState({inputValue: ""})
        this.setState({inputValue2: ""})
    }
    render(){
        const wypiszElementy = this.state.elementy.map(e => {
            return <PojedynczyElement ele={e} FunkcjaDziecka={this.ksiazkaPrzeczytana.bind(this)}/>
        })
        return (
            <main className="zalogowany">
                <Lista/>
                <article className="interaktywna">
                    <div className="tyt_i_wyl">
                        <h1>Lista Twoich Książek</h1>
                        <button onClick={this.props.onClick}>Wyloguj</button>   
                    </div>
                    <article className="inputy">
                        <input type="text" value={this.state.inputValue} onChange={this.zmianaKsiazki.bind(this)} placeholder="Tytuł Książki"/>
                        <input type="text" value={this.state.inputValue2} onChange={this.zmianaAutora.bind(this)} placeholder="Autor Książki"/>
                        <button onClick={this.dodajKsiazke.bind(this)}>Dodaj nową książkę do swojej listy</button>
                    </article>
                    <div className="elementy">
                        {wypiszElementy}
                    </div>
                </article>
            </main>
        )
    }
}
export default Zalogowano

//Komponent odpowiedzialny za załadowanie zawartości po zalogowaniu
//
// elementy state:
//  obiekty pobrane z json
//
// zmianaKsiazki - odpowiadą za zmienianie znaków w inputach na bierząco
// zmianaAutora - ^^^^^
//
//funkcja: dodajKsiążkę - tworzy nowy obiekt o losowym id oraz wpisanym przez użytkownika tytule i autorze następnie tworzy nową tablice obiektów, później przypisuje do state i na końcu czyści imputy
//  
//13: funkcja ksiazkaPrzeczytana - zmienia status zadania na true zaznaczając książkę jako przeczytaną
//  funkcja pobiera aktualne elementy zmienia właściwość st w elemenice o wybranym indexie i zapisuje je zmienione z powrotem
//   przyjmuje id obiektu (z pliku json)
//  14: znajduje index elementu którgo id przyjmuje jako parametr
// 
//
// wypiszElementy - wyświetlenie obiektów 
//  mapuje elementy ze stanu oraz przekazuje je do komponentu który zwraca już wypisane wartości Rodzic ->dziecko
//  
//
// Autor: Eryk Grzebieniak