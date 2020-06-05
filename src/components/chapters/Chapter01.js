import React from 'react'
import Images from '../Images'
import Notes from '../Notes'

import img1_01 from '../../assets/R1_img01.png'
import img1_02 from '../../assets/R1_img02.png'
import img1_03 from '../../assets/R1_img03.png'
import img1_04 from '../../assets/R1_img04.png'
import img1_05 from '../../assets/R1_img05.png'

export default class Chapter01 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Giugno 2020</p>
        <div>
          <h2>First release</h2>

          <Images image={img1_01} caption="" alt="" />
          <h3>Outbreak - Melting Asphalt</h3>
          <p>
            La diffusione del virus COVID-19 ha influenzato gran parte delle rappresentazioni visive
            apparse recentemente sui diversi canali di comunicazione. La difficoltà nello spiegare
            temi complessi come la diffusione di una epidemia è stata evidente, soprattutto nello
            spiegare alla popolazione l’importanza delle misure restrittive adottate. Outbreak, il
            progetto citato, astrae il problema e cerca di spiegare come avviene la diffusione di un
            generico virus all’interno di un contesto sociale, in base a dei parametri con i quali
            abbiamo ora sfortunatamente più confidenza. Questo viene fatto attraverso quelle che
            vengono chiamate Explorable Explanations, una particolare tipologia di medium diffusosi
            negli ultimi anni che fa largo uso dell’interazione digitale per facilitare la
            comprensione di un fenomeno. La principale caratteristica di questi elaborati è
            l’utilizzo dell’esplorazione diretta come forma di apprendimento. Simulazioni di tipo
            diverso, spesso sottoposte all’utente con un crescente livello di complessità, guidano
            le persone nella comprensione dell’argomento in questione permettendo di modificare
            parametri e indicatori in modo da verificare personalmente l’effetto ottenuto. Si tratta
            di una forma di comunicazione potente che permette di rendere accessibili fenomeni
            spesso troppo complessi e che non possono essere semplificati, ma che necessitano di
            approcci migliori della classica spiegazione verbale. <br />
            <br />
            <a href="https://meltingasphalt.com/interactive/outbreak/" target="blank">
              Vai al progetto →
            </a>
          </p>

          <Images image={img1_02} caption="" alt="" />
          <h3>Communicating Model Uncertainty Over Space</h3>
          <p>
            La ricerca di Adam Pearce volta a supportare l’analisi del cancro alla prostata tramite
            un’immagine codificata (Gleason pattern) permette di approcciare il tema della
            visualizzazione dell’incertezza. Il progetto di Pearce sfrutta diversi modelli visivi
            per rappresentare la gravità delle diverse aree del tumore così da permettere una
            diagnosi più accurata. Il software utilizzato restituisce una probabilità per ogni area
            analizzata ed è quindi necessario sfruttare delle particolari visualizzazioni che siano
            in grado di restituire correttamente l’incertezza del dato stesso. Quando una
            informazione risulta incerta o vi sono più possibilità per uno stesso elemento è
            importante utilizzare dei modelli visivi che restituiscano il giusto grado di
            complessità trovando un equilibrio tra quantità di informazioni e leggibilità. Per fare
            questo vengono utilizzati diversi tipi di visualizzazione che rappresentano i medesimi
            dati in modi differenti, privilegiando vari aspetti della comunicazione. L’obiettivo è
            quello di raggiungere un modello visivo che sia utile alla diagnosi e nel contempo
            coerente con le conoscenze pregresse dei medici che utilizzeranno il tool. Un aspetto
            importante, ben evidenziato dal progetto, è che gli strumenti di lavoro hanno sempre
            bisogno di essere validati da chi li usa poi quotidianamente per svolgere un’attività in
            modo che possano inserirsi nel processo e migliorarlo, la reiterazione di varianti
            visive fatta direttamente con i medici ne è un perfetto esempio. Infine è interessante
            notare come in questo caso il dato non può essere letto unicamente tramite la
            visualizzazione proprio per via dell’incertezza dello stesso, va quindi predisposto un
            meccanismo attraverso il quale sia possibile confrontare la sorgente con il modello
            visivo, l’immagine originale con l’elaborazione dell’immagine.
            <br />
            <br />
            <a
              href="https://pair-code.github.io/interpretability/uncertainty-over-space/"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img1_03} caption="" alt="" />
          <h3>Data Visualization as an Act of Witnessing</h3>
          <p>
            L’installazione “Hostile Terrain” racconta le storie di coloro che sono morti al confine
            fra Messico e Stati Uniti per trattare della crisi umanitaria nel Sud del paese
            nord-americano. Per raccontare al meglio la storia è stato utilizzato un modello visivo
            particolare, delle targhette da viaggio sono attaccate al muro ed ognuno di esse
            rappresenta una persona nel luogo della sua morte. Le targhette sono compilate a mano
            per rendere ancora più evidente il valore di ogni singolo dato, il tema trattato e la
            modalità scelta impongono che l’impatto emotivo sia più importante del dato specifico
            (principalmente la posizione geografica). In tutti i casi in cui si scelgono
            visualizzazioni elaborate come questa, viene sacrificata una piccola parte di
            leggibilità a fronte di una grande guadagno in termini di significato, l’imprecisione
            del dato diventa un punto di forza dell’elaborato. La dimensione tridimensionale
            dell’oggetto amplifica la potenza del racconto rendendo percepibili le “dimensioni” del
            problema, l’insieme dei dati risulta molto più espressivo ed è in grado di dare
            fisicamente rilievo al problema di cui parla. Le installazioni progettate “su misura”
            per una determinata storia tendono ad avere carattere più coinvolgente, amplificando la
            forza e l’incisività di dati significativi. Progetti come Hostile Terrain permettono di
            comprendere il fenomeno anche a chi non è un esperto della materia o non ha confidenza
            con la visualizzazione di dati, perché coinvolgono l’attenzione su un piano che non è
            solamente numerico o statistico.
            <br />
            <br />
            <a
              href="https://medium.com/nightingale/data-visualization-as-an-act-of-witnessing-33e346f5e437"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img1_04} caption="" alt="" />
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
            decisioni.
            <br />
            <br />
            <a href="https://www.nsjaarverslag.nl/" target="blank">
              Vai al progetto →
            </a>
          </p>

          <Images image={img1_05} caption="" alt="" />
          <h3>Made in Fukushima</h3>
          <p>
            Il libro Made in Fukushima è un prodotto editoriale che nasce dalla volontà di
            riqualificare il territorio e soprattutto i prodotti agricoli della zona di Fukushima
            nell’immaginario collettivo. Stampato su carta di riso proveniente dalla zona vicina
            all’incidente nucleare, il prodotto racconta il processo di bonifica utilizzando la
            visualizzazione dati. I modelli visivi utilizzati all’interno del fascicolo sono
            minimali ed eleganti, molto curati dal punto di vista estetico. Il testo è corredato di
            visualizzazioni a supporto dei dati presentati, un vero e proprio report prodotto
            utilizzando cioè di cui tratta, il riso in questo caso. La data visualization è uno
            strumento funzionale per esplicitare i dati e, se usata correttamente, permette di
            renderli meglio percepibili conferendogli una maggiore autorità. La visualizzazione dati
            permette di veicolare messaggi complessi che altrimenti sarebbe difficile da assorbire
            se affrontati superficialmente, è affidabile poichè non è basata su una interpretazione
            soggettiva ma rappresenta informazioni tramite regole e codici.
            <br />
            <br />
            <a
              href="https://www.behance.net/gallery/84123949/Made-in-Fukushima-Book-Infographics-Photography"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>
        </div>
      </div>
    )
  }
}
