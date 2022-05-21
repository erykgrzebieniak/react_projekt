import React from "react";
import ksiazka from './ksiazki.json'

class Lista extends React.Component{
    

    render(){
        return (
            <section>
                    <div className="header">
                        <h1>Książki<br/> dostępne w naszej bibliotece</h1>
                        <h2>Legenda:</h2>
                    </div>
                    <article className="legenda">
                        <div className="niedostepna1">
                            <p>Harry Potter J.K. Rowling </p>
                        </div>
                        <div className="niedostepna">
                            <p>Książka niedostępna</p>
                        </div>

                        <div className="wyporzyczona1">
                            <p>Harry Potter J.K. Rowling</p>
                        </div>
                        <div className="wyporzyczona">
                            <p>Książka wyporzyczona</p>
                        </div>

                        <div className="dostepna1">
                            <p>Harry Potter J.K. Rowling</p>
                        </div>
                        <div className="dostepna">
                            <p>Książka dostępna</p>
                        </div>
                    </article>
                    <article>
                    <ZaladujKsiazki/>
                    </article>
                </section>
        )

    }
}

const ZaladujKsiazki = () => {
    const SprCss = (wartosc) =>{
        if(wartosc===3)
        {
            return("niedostepna1");
        }
        else if(wartosc===2)
        {
            return("wyporzyczona1");
        }
        else
        {
            return("dostepna1");
        }
    }
    return(
        <>
        <h2>Lista książek:</h2>
        <div>
            {ksiazka.map((ksi)=>(
                <p key={ksi.id_ksiazki.toString()} className={SprCss(ksi.status_ksiazki)}>{ksi.tytul_ksiazki} &nbsp; {ksi.autor_ksiazki}</p>
            ))}
        </div>
        </>
    )
}

export default Lista;

//Konmponent odpowiedzialny za generowanie stałego fragmętu aplikacji oraz listy książek z plik json
//
//funkcja: ZaladujKsiazki - odpowiedzialna za załadowanie listy książek z json
//  65- mapowanie, sprawdzenie statusu skiążki funkcją SprCss oraz wypisanie zawartości pliku
//
//funkcja: SprCss sprawdza liczbę i przypisuje jej odpowiednią pseudoklasę css
//  paramerty wejściowe: numer odpowiadający statusowi