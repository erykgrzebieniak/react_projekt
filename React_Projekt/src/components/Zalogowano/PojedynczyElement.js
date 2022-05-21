import React from "react"

const PojedynczyElement = (props) => {
    return(
        <div key={props.ele.id.toString()} className={`${props.ele.st ? 'wykonano' : ''}`}>
            {props.ele.tyt} {props.ele.aut}<br/>
            {props.ele.st ? <button disabled>Przeczytano</button> : <button onClick={() => props.FunkcjaDziecka(props.ele.id)}>Przeczytano</button>}
        </div>
    )
}


export default PojedynczyElement

//Komponent wyświetlający pojedyncze "książki" na stronie
//
//funkcja przyjmuje pomapowane obiekty i wyświetla je oraz przycisk który zaznacza książkę jako przeczytaną
// 
// 5: if sprawdzający stan zadania i przypisuje odpowiednia pseudoklasę css
// 7: if sprawdzający stana zadania i wstawia albo przycisk wyłączony albo z mozliwością wyłączenia