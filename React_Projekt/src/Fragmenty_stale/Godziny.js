import { render } from "@testing-library/react";
import React from "react";
import "./godziny.css";


function Godziny()
{
    return(
        <section className="godz">
        <article>
          <h2>Godziny otwarcia:</h2>
        </article>
        <article>
          <h4>Poniedziałek</h4>
          <p>8<sup>00</sup> - 20<sup>00</sup></p>
        </article>
        <article>
          <h4>Wtorek</h4>
          <p>8<sup>00</sup> - 17<sup>00</sup></p>
        </article>
        <article>
          <h4>Środa</h4>
          <p>8<sup>00</sup> - 15<sup>00</sup></p>
        </article>
        <article>
          <h4>Czwartek</h4>
          <p>8<sup>00</sup> - 17<sup>00</sup></p>
        </article>
        <article>
          <h4>Piątek</h4>
          <p>8<sup>00</sup> - 14<sup>00</sup></p>
        </article>
        <article>
          <h4>Sobota Niedziela</h4>
          <p>Zamknięte</p>
        </article>
      </section>
    );
}

export default Godziny;

//Konmponent odpowiedzialny za generowanie stałego fragmętu aplikacji-> godzin otwarcia