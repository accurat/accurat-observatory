import React from 'react'
import Images from '../Images'
// import Notes from '../Notes'

import img4_01 from '../../assets/R5_img01.png'
import img4_02 from '../../assets/R5_img02.png'
import img4_03 from '../../assets/R5_img03.png'
import img4_04 from '../../assets/R5_img04.png'

export default class Chapter05 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Ottobre 2020</p>
        <div>
          <h2>Numero 05</h2>
          <Images image={img4_01} caption="" alt="" />
          <h3>
            Reconstructing seven days of protests in Minneapolis after George Floyd&apos;s death
          </h3>
          <p>
            La vicenda di George Floyd è uno degli eventi scatenanti dell proteste del Black Live
            Matters, ma ancora prima del movimento organizzato la popolazione di Minneapolis ha
            manifestato per giorni dopo la morte dell&apos;afroamericano. Nel mondo del giornalismo
            recente il ruolo del reporter può essere assunto da chiunque possieda uno smartphone e
            registri gli avvenimenti. In contesti pericolosi o in cui accadono eventi inattesi è
            spesso più semplice trovare immagini registrate con un telefono che non hanno
            specificatamente lo scopo di raccontare la notizia ma piuttosto di mostrare ciò che
            succede in un preciso momento. La forza di queste narrazioni accessibili a tutti è la
            loro molteplicità, avendo a disposizione più video dello stesso evento è possibile
            mostrarlo da ogni angolazione. Il Washington Post ha sfruttato questa narrazione
            “plurale” per raccontare le proteste di Minneapolis in maniera originale.
            L&apos;articolo è strutturato come una timeline verticale e ogni video è visualizzato
            nel tempo e nello spazio come in un grafico Gantt. Questo permette a colpo d&apos;occhio
            di capire quali sono i momenti che hanno più testimonianze a seconda anche della zona
            della città in cui le proteste si sono svolte. È un modo nuovo di intendere il racconto
            di una vicenda che sfrutta la visualizzazione dati per innovare anche nel campo del
            giornalismo.
            <br />
            <br />
            <a
              href="https://www.washingtonpost.com/graphics/2020/national/live-stream-george-floyd-protests/"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img4_02} caption="" alt="" />
          <h3>12 Sunset: Exploring Ed Ruscha&apos;s Archive</h3>
          <p>
            12 Sunset è un progetto di Ed Ruscha e del suo team i quali hanno composto un archivio
            di foto sulla Sunset Boulevard anticipando il concetto alla base di Google Maps.
            L&apos;intento di Ruscha era, probabilmente, quello di rappresentare i rapidi
            cambiamenti nel panorama urbano nel corso del tempo scattando fotografie ad entrambi i
            lati della strada e montandole in una sorta di infinita striscia. La parte più
            interessante del progetto però è il metodo di fruizione attraverso cui questi materiali
            possono essere esplorati. Il sito di archivio presente due fasce di foto, di cui una
            capovolta fra cui è presente una mappa del percorso compiuto per scattare tutte le
            fotografie. Scrollando l&apos;utente è in grado di muovere il veicolo presente nella
            mappa ed esplorare tutte le foto con l&apos;impressione di trovarsi realmente a bordo
            della vettura negli anni in cui le foto sono state scattate. È possibile anche duplicare
            le “strisce” di foto per avere un confronto diretto del cambiamento del panorama nel
            tempo. RIsulta un ottimo esempio di come un oggetto conosciuto come una serie di
            fotografie possa diventare un artefatto completamente nuovo se raccontato nella giusta
            maniera.
            <br />
            <br />
            <a
              href="https://12sunsets.getty.edu/map/narrative?d=0.42256&mode=no-map"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img4_03} caption="" alt="" />
          <h3>Color palettes and accessibility features for data visualization</h3>
          <p>
            IBM da poco più di un anno ha aggiornato le proprie libraries open source di design con
            un occhio di riguardo per la Data Visualization. Il sistema è completamente open source
            e punta anche a instaurare un dialogo per migliorare gli eventuali punti critici e
            conoscere l&apos;impressione degli utenti. Nell&apos;articolo Medium dedicato una dei
            componenti del team di data visualization, Shixie, racconta il processo che ha portato
            alla definizione delle guidelines di IBM con particolare attenzione al colore. Il colore
            è la variabile che spesso viene colta per prima e quella che influenza più fortemente la
            lettura di una visualizzazione per l&apos;utente. È uno strumento molto forte per
            instaurare relazioni fra oggetti o per isolarne, inoltre i colori a seconda delle
            culture hanno già significati codificati e bisogna tenerne conto per usarli in maniera
            consapevole. Un esempio tipico sono rosso e verde (male e bene) o il bianco che per gli
            occidentali è un colore neutro e può rappresentare la pace mentre per i cinesi e i
            giapponesi è legato alla morte. L&apos;articolo oltre a spiegare il processo fornisce
            anche alcuni principi di base che sono utili a chiunque si approcci a capire o a
            produrre una visualizzazione dati.
            <br />
            <br />
            <a
              href="https://medium.com/carbondesign/color-palettes-and-accessibility-features-for-data-visualization-7869f4874fca"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img4_04} caption="" alt="" />
          <h3>The Shape of Dreams</h3>
          <p>
            Il progetto The Shape of Dreams di Federica Fragapane e Paolo Corti in collaborazione
            con Simon Rogers e Alberto Cairo è un esperimento che si propone di visualizzare le
            ricerche su Google riguardo ai sogni e alla loro interpretazione. L&apos;interpretazione
            dei sogni è, per sua natura, una materia lontana dalla scienza e dai dati in senso
            stretto ed è proprio per questo che il lavoro risulta interessante, nel cercare di unire
            due mondi apparentementi inconciliabili. I dati rappresentati sono quelli dei Google
            Trends relativi alle ricerche riguardanti gli oggetti, gli animali o gli accadimenti dei
            sogni. Viene quindi fatta una sorta di macrofotografia narrata in quattro capitoli dei
            sogni di tutta l&apos;umanità. I modelli visivi rispecchiano la scelta particolare della
            narrazione e pur essendo abbastanza classici nel loro funzionamento vengono
            rappresentati tramite forme che ricordano piante oniriche e colori tenui e tinte
            pastello che richiamano all&apos;immaginario del riposo e del sogno. Come specificato
            nella home il progetto è un&apos;esplorazione visiva, un esperimento per aprire nuovi
            fronti della visualizzazione dati.
            <br />
            <br />
            <a href="http://the-shape-of-dreams.com/#/" target="blank">
              Vai al progetto →
            </a>
          </p>
        </div>
      </div>
    )
  }
}
