import aktualnosci from './aktualnosci.json'
const Elementy = () => {
    return (
        <section>
            <article>
              <h1>Aktualności</h1>
              <ZaladujAkt/>
            </article>
            <article>
              <h1>Serdecznie witamy cię na stronie naszej biblioteki</h1>
              <h1>Pomożemy ci uporządkować twoją listę książek, które zamierzasz przeczytać, czytasz lub już skończyłeś czytać</h1>
            <h1>O nas<br/>Jesteśmy placówką na terenie Rzeszowa która umożliwi ci rozpoczęcie twojej własnej przygody
              związanej z czytelnictwem, z chęcią zabierzemy cię w podróż po świecie książki</h1>
            <h1>"Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła"</h1>
            <h1>Wisława Szymborska</h1><br/>
              <h3>Aby uzyskać dostęp do swojej listy wyporzyczonych książek oraz
                do zbioru wszystkich książek w bibliotece <a href='#lapa'>ZALOGUJ SIĘ</a></h3>
                <a href="https://pl.wikipedia.org/wiki/Regulamin" target="_blank" id='regulamin_link'>Regulamin</a>
            </article>
          </section>
    )
}
const ZaladujAkt = () =>{
    return(
      <article>
        {aktualnosci.map((akt)=>(
          <div key={akt.id_aktualnosci.toString()}><a title='Kliknij aby dowiedzieć się więcej'><h3>{akt.tytul}</h3></a><p>Data: {akt.data}</p><p>{akt.tresc}</p></div>
        ))}
      </article>
    )
  }

export default Elementy

//Komponent odpowiedzialny za załadowanie zawartości z json
//
//ZaladujAkt - odpowiada za załadowanie aktualności z pliku json
//
// 26 funkcja mapująca plik oraz wyświetlająca go
//
// Autor: Eryk Grzebieniak