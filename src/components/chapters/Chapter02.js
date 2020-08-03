import React from 'react'
import Images from '../Images'
import Notes from '../Notes'

import img2_01 from '../../assets/R2_img01.png'
import img2_02 from '../../assets/R2_img02.png'
import img2_03 from '../../assets/R2_img03.png'
import img2_04 from '../../assets/R2_img04.png'

export default class Chapter02 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Luglio 2020</p>
        <div>
          <h2>Numero 02</h2>

          <Images image={img2_01} caption="" alt="" />
          <h3>Treinverkeer in Nederland</h3>
          <p>
            Il progetto, realizzato da Jan Willem Tulp, visualizza i treni delle ferrovie olandesi e
            la loro posizione durante le ore del giorno. Un classico esempio di visualizzazione
            sistemica in cui molti oggetti si muovono all’interno di una rete per permettere un
            controllo visivo di ciò che accade in diversi momenti della giornata. Questo tipo di
            visualizzazioni permettono di capire, ad un occhio esperto, se il flusso è regolare o
            bisogna intervenire sulle tratte ferroviarie per agevolare eventuali problematiche. Sono
            spesso corredate da altre analisi ed è possibile trovarle all’interno di dashboard di
            controllo nelle quali concorrono alla definizione e rappresentazione di uno scenario
            complesso in tempo reale. In questo caso il dato è solamente simulato ma è possibile
            modificare l’orario per confrontare diversi momenti della giornata. La visualizzazione
            giornaliera è invece un vero e proprio esperimento. Un modello circolare che espone gli
            orari di tutti i treni che transitano da una stazione su 24h, originariamente pensato in
            due dimensioni da E.J. Marey nel 1885. I modelli visivi più particolari necessitano
            spesso di una lenta curva di apprendimento per essere decodificati correttamente,
            permettono però una specificità molto più alta se è necessario controllare variazioni
            minime o che necessitano di confrontare contemporaneamente più aree di un problema. I
            modelli visivi specifici permettono spesso di simulare determinate condizioni e scenari
            o ne rappresentano vari, così da prefigurare quali potrebbero essere gli sviluppi di una
            determinata situazione, in questo modo è possibile utilizzarli a supporto di analisi e
            decisioni. <br />
            <br />
            <a href="https://www.nsjaarverslag.nl/" target="blank">
              Vai al progetto →
            </a>
          </p>

          <Images image={img2_02} caption="" alt="" />
          <h3>A visual introduction to machine learning</h3>
          <p>
            L’articolo di R2D3 spiega il funzionamento della tecnica statistical learning per
            identificare automaticamente dei pattern all’interno dei dati. Il testo è organizzato
            come un lungo scroll verticale supportato dalle visualizzazioni. I dati mostrati sono
            utili a esplicitare ciò che viene spiegato nel testo. Le visualizzazioni non sfruttano
            modelli visivi sperimentali, si tratta principalmente di barchart, scatterplot e pie
            chart che mostrano in maniera chiara come gli stessi dati possano essere organizzati con
            modelli differenti. È sempre importante scegliere il tipo di visualizzazione che riesce
            a evidenziare meglio le particolarità del dataset che si sta rappresentando in funzione.
            La finalità di questo progetto è divulgativa e infatti, in tutta la pagina i modelli
            visivi si caratterizzano come supporto cognitivo fondamentale per rendere la
            comprensione rapida ed efficace e aiutare l’assimilazione delle informazioni nella
            maniera più corretta. Il testo tratta di un argomento molto tecnico e specifico ma
            tramite le visualizzazioni può essere facilmente compreso anche da chiunque abbia
            dimestichezza con la rappresentazione dei dati, la scelta di modelli semplici e
            conosciuti è strategica nel raggiungimento di questo obiettivo. I valori, riorganizzati
            via via in modelli differenti, sfruttano delle animazioni legate allo scroll che
            permettono di seguire gli spostamenti di ogni oggetto visualizzando tutti i passaggi che
            il modello statistico sfrutta per catalogare le informazioni.
            <br />
            <br />
            <a href="http://www.r2d3.us/visual-intro-to-machine-learning-part-1/" target="blank">
              Vai al progetto →
            </a>
          </p>

          <Images image={img2_03} caption="" alt="" />
          <h3>The evolution of the American Census</h3>
          <p>
            The Pudding in occasione del censimento americano del 2020 ha progettato un elaborato
            che visualizza l’evoluzione del censimento dal 1790 fino all’ultima edizione. È un
            lavoro innovativo soprattutto per l’utilizzo dei dati come base del racconto
            dell’evoluzione degli Stati Uniti negli ultimi 230 anni, I dati analizzati non sono i
            dati emersi dalle domande del censimento bensì le domande stesse e come queste si sono
            modificate nel tempo, quali sono state scorporate, quali escluse e quali aggiunte. La
            visualizzazione si compone di unico flow verticale che permette di verificare le
            categorie delle domande e immagini di come queste venivano presentate all&apos;interno
            del questionario. In questa visualizzazioni sono i dati stessi e come essi vengono
            presentati a raccontare una storia, non sono un aiuto o un supporto ma permettono di
            esplorare in ordine sparso tutte le informazioni tramite una gerarchia visiva definita.
            I dati sono una traccia di un avvenimento, analizzare le domande evidenzia l’attenzione
            dello stato rispetto alla composizione della popolazione evidenziando i cambiamenti
            della società nel tempo. È possibile, all’inizio del flow, selezionare una storia in
            modo che gli insight mostrati nella pagina si modifichino per sottolineare determinati
            aspetti del racconto. Così facendo il taglio editoriale della vicenda sposta il focus su
            un determinato aspetto della storia americana.
            <br />
            <br />
            <a
              href="https://pudding.cool/2020/03/census-history/#:~:text=They%20depict%20an%20evolving%20country,armed%20conflicts%20in%20its%20memory."
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img2_04} caption="" alt="" />
          <h3>Explore the city on a human scale</h3>
          <p>
            Morphocode ha sviluppato un tool che permette di esplorare la città solamente a un
            livello di zoom molto alto dando informazioni sul tessuto urbano in un cerchio di
            massimo 1 miglio di raggio. Il progetto visualizza un grande quantità di dati relativi
            alla città di New York su una mappa. L’aspetto anticonvenzionale è rappresentato proprio
            dalla costrizione della “lente” attraverso cui i dati sono visibili. Visualizzare le
            informazioni su una mappa è una delle più antiche forme di datavisualization, anche le
            mappe geografiche in una certa misura sono interpretazioni di dati, in questo caso il
            focus è spostato all’interno dell’area selezionata. La mappa è supportata da grafici
            convenzionali a sinistra della stessa, questi chart sono interattivi, modificando l’area
            selezionata cambiano anche i dati all’interno delle visualizzazioni. In questo modo è
            molto semplice notare le composizioni dei diversi quartieri della città, quanto sia alta
            la concentrazione di persone o parchi in una determinata zona. Il progetto permette un
            buon livello di personalizzazione consentendo ai vari utenti di esplorare le
            informazioni specifiche a cui sono interessati. Una visualizzazione in cui i dati non
            sono tutti disponibili dal primo momento spinge l’utente a interagire con lo strumento
            per esplorare le viste a disposizione. In questo modo è probabile che un utente motivato
            spenda molto tempo per provare a scoprire nuovi aspetti del dataset che sta indagando.
            Nelle mappe geografiche gli utenti hanno spesso bisogno di elementi che risultino
            familiari per non essere confusi su ciò che stanno vedendo, come ad esempio le strade, i
            profili delle rive, l’estensione dei parchi... Questa necessità rende complicato
            visualizzare dataset molto densi di informazioni. La soluzione della “lente” risulta
            vincente anche in questo caso, delimita l’area in cui sono mostrate le visualizzazioni
            permettendo un’alta complessità di rappresentazione dal momento che è possibile
            riconoscere la parte di città in cui ci si trova dalle zone in cui i dati non sono
            visualizzati.
            <br />
            <br />
            <a href="https://explorer.morphocode.com/map" target="blank">
              Vai al progetto →
            </a>
          </p>
        </div>
      </div>
    )
  }
}
