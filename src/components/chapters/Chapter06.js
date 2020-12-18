import React from 'react'
import Images from '../Images'
// import Notes from '../Notes'

import img6_01 from '../../assets/R6_img01.png'
import img6_02 from '../../assets/R6_img02.png'
import img6_03 from '../../assets/R6_img03.png'
import img6_04 from '../../assets/R6_img04.png'

export default class Chapter06 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Novembre 2020</p>
        <div>
          <h2>Numero 06</h2>
          <Images image={img6_01} caption="" alt="" />
          <h3>Noisy city</h3>
          <p>
            Noisy City viene definita come una ‘Audible data visualization&apos; che punta a
            rappresentare l&apos;inquinamento acustico di varie parti di una città, in questo caso
            Bruxelles. All&apos;interno di un conglomerato urbano è facile trovarsi in ambienti
            molto trafficati e rumorosi ma anche poter esplorare alcune zone molto più tranquille.
            La visualizzazione si traduce in una heatmap, la città è rappresentata con il classico
            schema, in cui le zone in cui il rumore è meno intenso risultano più chiare mentre in
            quelle dove i suoni si sovrappongono e l&apos;inquinamento acustico è più forti i colori
            tendono a diventare mano a mano più scuri. È possibile in questo modo leggere abbastanza
            chiaramente quali siano le strade e le zone più affollate e caotiche della città. Tutto
            ciò è rappresentato utilizzando solamente l&apos;intensità di suono come dato, passando
            il mouse sopra la mappa è possibile, inoltre, ascoltare i vari suoni che concorrono ad
            aumentare i decibel in quel punto della città.
            <br />
            <br />
            <a href="https://noisy-city.jetpack.ai/" target="blank">
              Vai al progetto →
            </a>
          </p>

          <Images image={img6_02} caption="" alt="" />
          <h3>The Cultural Borders of Songs</h3>
          <p>
            Il progetto di The Pudding rappresenta come le canzoni più ascoltate in giro per il
            mondo ridefiniscono i confini culturali delle società che abitano il nostro pianeta.
            Siamo abituati a categorizzare le persone per molti fattori, in questo caso un interesse
            culturale è utilizzato per creare dei cluster più o meno ampi di paesi anche molto
            distanti fra loro dal punto di vista sia politico che sociale. Il lavoro prende in
            analisi due momenti, uno nel 2017 e uno nel 2018 mostrando anche come questi confini
            siano mutevoli anche nel giro di pochi mesi e non esistono fattori fissi per determinare
            il successo di un prodotto musicale in determinati luoghi. Molta influenza è data dalla
            lunga della canzone stessa ma spesso ci sono divisioni di interesse anche
            all&apos;interno dello stesso paese, come ad esempio in Francia e in Inghilterra. La
            mappa, tramite cui i dati sono raccontati, permette di ascoltare le canzoni e vedere il
            videoclip mostrando anche un&apos;altra rappresentazione legata alla canzone.
            <br />
            <br />
            <a href="https://pudding.cool/2018/06/music-map/" target="blank">
              Vai al progetto →
            </a>
          </p>

          <Images image={img6_03} caption="" alt="" />
          <h3>Breakthrough Energy</h3>
          <p>
            Breakthrough Energy lavora per arrivare a 0 emissioni nette entro il 2050 e si comunica
            tramite un sito web, fra le altre cose. All&apos;interno di questo un&apos;intera
            sezione è dedicata a un Data Explorer che permette di leggere tramite modelli visivi
            esteticamente molto curati i dati in possesso dell&apos;organizzazione. Il più
            innovativo dal punto di vista della fruizione si trova nella pagina Emission Profile
            Analysis, qui modello a base pentagonale permette di analizzare i dati relativi alle
            emissioni divise per stati. Le punte del pentagono rappresentano i diversi settori
            produttivi da cui le emissioni provengono e gli stati sono posizionati all&apos;interno
            della forma a seconda della percentuale di impatto di ognuno di essi sulle emissioni
            totali. La possibilità di esplorare i dati sulla base temporale permette di individuare
            come gli stati si stiano talvolta evolvendo e modificando nel corso degli ultimi 30
            anni. Sfruttando i filtri e interagendo con il grafico è possibile accedere a
            informazioni aggiuntive che completano l&apos;analisi. I vari modelli del data explorer
            permettono al fruitore di accedere a molti dati e analizzarli in modo da riuscire a
            ottenere una grande mole di informazioni corredata dai giusti insight per accedere alle
            tematiche principali del problema.
            <br />
            <br />
            <a
              href="https://www.breakthroughenergy.org/go-deeper/emission-profile-analysis"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img6_04} caption="" alt="" />
          <h3>A Breathing Earth</h3>
          <p>
            È una mappa in cui viene mostrato il ciclo delle stagioni tramite il cambiamento della
            vegetazione nel corso di un anno su tutta la superficie terrestre. La mappa mostra la
            quantità e la salute della vegetazione rendendo più o meno verde un determinato punto.
            Mostrando in sequenza tutti i giorni di un anno la superficie del pianeta sembra
            effettivamente respirare perché lentamente passa da verde a gialla in un ciclo continuo
            che simula l&apos;andamento delle stagioni. È una visualizzazione che non ha uno scopo
            informativo ma piuttosto vuole dare l&apos;idea dell&apos;andamento di un fenomeno senza
            entrare troppo nei dettagli. I dati sono utilizzati per raccontare un tema e rafforzare
            una metafora come quelle del pianeta che respira, conoscendo determinati fattori e
            concentrandosi su specifiche zone è possibile notare le tracce di fattori atmosferici
            come i monsoni o le piogge torrenziali.
            <br />
            <br />
            <a href="https://breathingearth.visualcinnamon.com/" target="blank">
              Vai al progetto →
            </a>
          </p>
        </div>
      </div>
    )
  }
}
