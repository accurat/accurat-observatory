import React from 'react'
import Images from '../Images'
import Notes from '../Notes'

import img3_01 from '../../assets/R3_img01.png'
import img3_02 from '../../assets/R3_img02.png'
import img3_03 from '../../assets/R3_img03.png'
import img3_04 from '../../assets/R3_img04.png'

export default class Chapter03 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Agosto 2020</p>
        <div>
          <h2>Numero 03</h2>

          <Images image={img3_01} caption="" alt="" />
          <h3>Coronavirus tracked: the latest figures as countries fight Covid-19 resurgence</h3>
          <p>
            Il Financial Times aggiorna regolarmente le proprie visualizzazioni legare al Covid-19
            ed è uno dei migliori esempi di rappresentazioni legate a questo tema. In questi mesi i
            dati hanno spesso accompagnato le notizie riguardo alla pandemia e sono state progettate
            molte visualizzazioni per spiegarli ed esporli al meglio. In molti casi le dataviz
            prodotte sono povere di significato perché si limitano ad esporre i dati in maniera
            agnostica, senza dare un taglio o una lettura di qualche tipo, senza aiutare
            l&apos;utente a comprendere ciò che sta leggendo. Lo scroll down del Financial Times
            dimostra come con pochi accorgimenti anche dei modelli statici possono aiutare a leggere
            le informazioni dando un impatto visivo molto forte all&apos;artefatto. Tutte le
            visualizzazioni all&apos;interno della pagina sono prodotte a partire da modelli
            classici, l&apos;oggetto più inusuale è lo streamgraph che si incontra subito dopo il
            paragrafo introduttivo. Un elemento degno di nota, valido per tutte le figure meno una,
            è il fatto che queste risultino così chiare da non necessitare una legenda. Quando è
            necessario evidenziare un determinato aspetto del grafico questo è citato nel testo, in
            modo che l&apos;utente sappia già come orientarsi quando affronta la viz. È un
            bell&apos;esempio di come, con dei modelli statici e un effort relativamente limitato,
            si possa rappresentare e raccontare un fenomeno complesso, facendo emergere i dati più
            importanti riguardo alla vicenda. La semplicità delle figure permette inoltre che queste
            possano rimanere sostanzialmente invariate fra la versione mobile e quella desktop
            consentendo in entrambi i casi un buon livello di leggibilità.
            <br />
            <br />
            <a
              href="https://www.ft.com/content/a2901ce8-5eb7-4633-b89c-cbdf5b386938"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img3_02} caption="" alt="" />
          <h3>The True Colors of America&apos;s Political Spectrum Are Gray and Green</h3>
          <p>
            L&apos;articolo del New Yorker riguardo alla ripartizione dei voto nelle elezioni
            americane del 2016 vuole evidenziare un aspetto di cui spesso si è sentito parlare nella
            sfida elettorali tra Hillary Clinton e Donald Trump in cui la vittoria di
            quest&apos;ultimo fu caratterizzata dai voti ottenuti nelle periferie e nelle zone
            rurali degli Stati Uniti. A partire da immagini aeree sono state create delle fasce che
            dividono il territorio americano e lo rappresentano solamente tramite delle sfumature di
            colore. Ognuna di questa poi è stata posizionata a destra o a sinistra di una matrice a
            seconda della distribuzione dei voti di chi vi abita. Il risultato è soddisfacente sia
            nel voler confermare la tesi di partenza che dal punto di vista estetico. La
            visualizzazione risulta particolarmente interessante perché la rappresentazione del
            modulo (la fascia di territorio sfumata) è un&apos;astrazione derivante direttamente da
            una foto ed è quindi molto fedele alla realtà. È come se si potesse vedere tutto il
            territorio americano sgretolato e ricomposto come un puzzle. La visualizzazione finale,
            divisa per stati, è esteticamente molto avanzata e crea artefatti singolari ma semplici
            da interpretare. In questo, come in altri, il fine non è analitico, la volontà è quella
            di restituire una mappa mentale che permetta in poco tempo di assimilare molto
            informazioni che possano restare impresse nella memoria dell&apos;utente.
            L&apos;utilizzo dei modelli visivi creati ad hoc permette
            <br />
            <br />
            <a
              href="https://www.nytimes.com/interactive/2020/09/02/upshot/america-political-spectrum.html"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img3_03} caption="" alt="" />
          <h3>Shifting Smoke</h3>
          <p>
            Nell&apos;ultima estate i roghi che hanno colpito la costa orientale degli Stati Uniti
            hanno impressionato molti, la nube di fumo ha coperto gran parte del paese e le regioni
            limitrofe. La visualizzazione di Reuters mostra una mappa dello spostamento della nube
            tra la metà di agosto e la metà di settembre. La rappresentazione è semplice, si tratta
            di un&apos;immagine satellitare modificata per far risaltare la nube in modo che diventi
            l&apos;unico oggetto colorato della visualizzazione. Il dato risalta su una mappa neutra
            e può essere letto senza bisogno di numeri o modelli visivi particolari utili a
            descriverlo. Nell&apos;articolo l&apos;astrazione rispetto al fenomeno è minima, vengono
            mostrate le nuvole quasi come se queste fossero fotografate, alterando unicamente i
            colori dell&apos;immagine. Si potrebbe supporre che delle immagini satellitari avrebbero
            lo stesso effetto ma è evidente come i colori scelti siano volti ad amplificare
            l&apos;immagine, tramite il contrasto dei colori le immagini risultano più
            impressionanti e rendono più evidente la capacità della nube di inquinare tutto ciò con
            cui viene a contatto. I dati mostrati non sono astratti in nessun modo, nonostante
            questo l&apos;aspetto che più risalta nella visualizzazione è l&apos;impatto emotivo
            creato dalla nube di fumo che si muove sulla terra.
            <br />
            <br />
            <a
              href="https://graphics.reuters.com/USA-WILDFIRE/POLLUTION/xlbpgjgervq/"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img3_04} caption="" alt="" />
          <h3>How randomized response can help collect sensitive information responsibly</h3>
          <p>
            I dati sensibili e la privacy sono tra i temi preponderanti nel dibattito pubblico, la
            possibilità di lavorare con dataset che non si riferiscano a persone specifiche è
            fondamentale per non trasmettere le informazioni private di un soggetto. Una possibilità
            per mantenere le informazioni segrete è quella di scegliere casualmente solo una parte
            delle risposte dal campione analizzato. Il processo non è molto intuitivo e per
            spiegarlo Pair ha scritto un articolo a riguardo. Nell&apos;articolo proprio per via
            della tematica complessa viene usata la datavisualization a supporto della narrazione.
            In questo caso infatti leggere solamente il testo non è sufficiente, non si è in grado
            di comprendere tutto ciò che viene descritto perché le didascalie fanno riferimento
            direttamente alle immagini. II sito web presenta il tipico testo a scroll sulla sinistra
            con delle animazioni che si generano man mano che la narrazione avviene. Tramite forme e
            animazioni molto semplici viene comunicato e reso accessibile la teoria di una tecnica
            che se sfruttata a dovere aiuta a mantenere l&apos;anonimato. Si tratta di un documento
            tecnico e per questo le visualizzazioni non sono raffinate dal punto di vista estetico
            ma la loro semplicità consente di leggerle con immediatezza e di seguire gli oggetti
            nelle loro transazioni.
            <br />
            <br />
            <a href="https://pair.withgoogle.com/explorables/anonymization/" target="blank">
              Vai al progetto →
            </a>
          </p>
        </div>
      </div>
    )
  }
}
