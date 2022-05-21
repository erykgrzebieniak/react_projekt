import './header.css';

function Header() {
  return (
    <header>
        <section>
            <h1>Miejska Biblioteka publiczna w Rzeszowie</h1>
        </section>
        <section>
            <h4>Skrzynka Email</h4>
            <p>Napisz do nas<br/> <a href='mailto:nasza.biblioteka@domena.pl'>e-maila</a></p>
        </section>
        <section>
            <h4>Kontakt</h4>
            <p>Sekretariat<br/>594&nbsp;653&nbsp;213</p>
        </section>
        <section>
            <h4>Dane Adresowe</h4>
            <p>Rzeszów 35-030<br/>ul.3 Maja</p>
        </section>
      </header>
  );
}

export default Header;

//Konmponent odpowiedzialny za generowanie stałego fragmętu aplikacji-> sekcji nagółwkowej