import React from 'react'
import Images from '../Images'
// import Notes from '../Notes'

import img4_01 from '../../assets/R4_img01.png'
import img4_02 from '../../assets/R4_img02.png'
import img4_03 from '../../assets/R4_img03.png'
import img4_04 from '../../assets/R4_img04.png'

export default class Chapter04 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Settembre 2020</p>
        <div>
          <h2>Numero 04</h2>
          <Images image={img4_01} caption="" alt="" />
          <h3>Esri CovidPulse</h3>
          <p>
            Il Covid-19 ha colpito gli Stati Uniti in maniera particolarmente potente, il paese
            conta oltre 300 milioni di abitanti e sono moltissimi i dati a disposizione sulla
            situazione, di conseguenza diventa le analisi e le visualizzazioni relative. Il progetto
            di Esri sviluppato da Jinnan Zhang e John Nelson risulta vincente nel descrivere
            l&apos;andamento della pandemia nel tempo. La visualizzazione principale è composta da
            una trendline per ogni area geografica, che si divide progressivamente
            all&apos;aumentare dello zoom. Non sono presenti assi di riferimento ma solamente una
            linea rossa che permette di leggere l&apos;andamento dei contagi nel tempo. Ad un
            livello di dettaglio maggiore viene aggiunta la variabile del colore per aiutare nella
            lettura delle informazioni che è fornita ancora da un unico elemento lineare.
            L&apos;aspetto estetico dell&apos;artefatto rende semplice e immediato individuare le
            anomalie in un panorama di crescita continua che risulta omogeneo. Al livello di zoom
            più alto sono presenti varie trendline per ogni stato, queste sono colorate a seconda
            dell&apos;andamento dei contagi. La visualizzazione risultante è così un ibrido fra una
            heatmap e un linechart, una mappa che si sviluppa nel tempo che rende l&apos;artefatto
            efficace anche dal punto di vista emotivo. Cliccando una delle trendline è possibile
            leggere le informazioni dettagliate che essa rappresenta, le quali sono però nascoste
            nella visualizzazione di base. Qui i linechart sono correlati di assi e valori puntuali
            per permettere all&apos;utente anche una lettura analitica dell&apos;oggetto. La pulizia
            estetica con cui è stata sviluppata la visualizzazione la rende piacevole da navigare e
            chiara nei contenuti nonostante l&apos;enorme mole di informazioni raccontata e
            riassunta, ad alto livello, con pochi segni grafici.
            <br />
            <br />
            <a
              href="https://livingatlas.arcgis.com/covidpulse/#@=-81.931,40.374,6&trendCategories=1&trendType=0"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img4_02} caption="" alt="" />
          <h3>Flooding in America</h3>
          <p>
            Il cambiamento climatico sta portando un innalzamento di mari e oceani a livello globale
            e di questo tratta il progetto sviluppato da The Pudding combinando diverse fonti di
            dati. L&apos;obiettivo è quello di stabilire un coefficiente di rischio riguardo alle
            inondazioni per varie aree geografiche degli Stati Uniti. Nell&apos;articolo il dataset
            è raccontato in modi differenti nonostante quasi tutti i modelli visivi siano
            rappresentati su mappe. La volontà di questo lavoro è anche quella di rendere le viz
            pubbliche così che possano essere utilizzate da altri per arricchire pubblicazioni
            sull&apos;argomento che necessitano visualizzazioni differenti a seconda della
            narrazione a cui fanno riferimento. Due mappe, per esempio, possono essere visualizzate
            evidenziando le contee o gli zipcode a seconda del livello di dettaglio che si vuole
            ottenere nella visualizzazione. Una sezione notevole è quella che mette a confronto 2
            diversi modelli di rischio per le inondazioni mostrando differenze e similitudini. È una
            pratica complicate dal punto di vista della visualizzazione soprattutto se i dati sono
            mostrati simultaneamente dal momento che derivano da modelli matematici differenti. Le
            aree individuate da FEMA e First Street come “a rischio” nel futuro sono in parte
            sovrapponibili ma in larga parte divergenti il che crea una certa confusione nella
            rappresentazione anche per la scelta dei colori, rosso e blu. Viene da pensare che uno
            dei due sia in qualche modo un dato positivo e uno negativo ma non è così, sarebbe stato
            probabilmente più opportuno avere tre colori per indicare attribuendone uno alle
            intersezioni presenti in modo da avere delle zone di “massimo rischio” perché
            individuate da entrambi i modelli.
            <br />
            <br />
            <a href="https://pudding.cool/projects/flooding/visuals/" target="blank">
              Vai al progetto →
            </a>
          </p>

          <Images image={img4_03} caption="" alt="" />
          <h3>Overview - A new perspective of how we change the Earth</h3>
          <p>
            Overview è un progetto fotografico che mira a descrivere e raccontare il mondo usando
            fotografie aeree zenitali che mostrano il paesaggio come un soggetto astratto tanto è
            strana la sensazione prodotta da queste immagini. Siamo abituati ad essere a contatto
            col paesaggio e comunque a non poter volare e guardare esattamente sotto i nostri piedi,
            a poca distanza, un&apos;immagine fissa, ma con le tecnologie odierne ottenere questo
            tipo di foto non è più così difficile. Il parallelismo fra aree urbanizzate, o comunque
            in parte antropizzate, con gli artefatti visivi più disparati è diretto e forse un
            po&apos; scontato, sono entrambi prodotti della razionalizzazione e capacità di
            astrazione degli esseri umani. È comunque bizzarro constatare come alcune di queste foto
            richiamino fortemente alcuni modelli visivi fra i più classici. All&apos;interno del
            sito sono presenti delle sezioni di storie e time lapse che raccontano il cambiamento
            del territorio nel tempo. Queste possono essere assimilate a visualizzazioni dal momento
            che, raccogliendo il dato in maniera “scientifica” cioè fotografando la stessa porzione
            di territorio nel tempo aiutano a raccogliere e trasmettere dati a chi le osserva. In
            casi come questo non è necessario passare attraverso il filtro della dataviz dal momento
            che il dato, il cambiamento nel tempo, è visibile e riconoscibile da chiunque e non ha
            bisogno di essere spiegato o evidenziato in alcun modo.
            <br />
            <br />
            <a href="https://www.over-view.com/stories" target="blank">
              Vai al progetto →
            </a>
          </p>

          <Images image={img4_04} caption="" alt="" />
          <h3>Their Names</h3>
          <p>
            Il progetto raccoglie i nomi di oltre 28.000 fra le persone che sono morte dopo essere
            venute a contatto con la polizia. La forma dell&apos;artefatto è semplice, sfondo nero e
            i nomi di ogni persona a riempire un lunghissimo muro di testo. È possibile leggere la
            storia di ciascuna delle vittime per scoprire le cause del decesso. Their Names
            impressiona sfruttando l&apos;interazione, il tempo per cui è necessario scrollare per
            raggiungere la fine della lista anche senza leggere la storia di nessuno e la quantità
            dei nomi che compaiono sotto gli occhi dell&apos;utente è destabilizzante. È possibile
            nascondere i nomi e filtrare a seconda di alcuni parametri: età, sesso, etnia… In modo
            da ottenere una sorta di visualizzazione in cui ogni persona è rappresentata da un
            piccolo segno grafico. In questo progetto la visualizzazione ha un intento sia
            divulgativo, raccontare le storie delle vittime, ma vuole soprattutto colpire
            emotivamente l&apos;utente. Ognuna di queste persona viene ricordata attraverso il
            proprio nome quasi a voler identificare in lui una persona familiare o vicina al
            fruitore. È un esempio di come, riducendo al minimo le informazioni fornite e senza
            dover mostrare nessuna immagine possano essere trasmessi moltissimi dati che rimangono
            impressi nella memoria per la forte emotività legata all&apos;artefatto.
            <br />
            <br />
            <a href="https://theirnames.org/" target="blank">
              Vai al progetto →
            </a>
          </p>
        </div>
      </div>
    )
  }
}
