import React from 'react'
import Images from '../Images'
// import Notes from '../Notes'

import img7_01 from '../../assets/R7_img01.png'
import img7_02 from '../../assets/R7_img02.png'
import img7_03 from '../../assets/R7_img03.png'
import img7_04 from '../../assets/R7_img04.png'

export default class Chapter07 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Dicembre 2020</p>
        <div>
          <h2>Numero 07</h2>
          <Images image={img7_01} caption="" alt="" />
          <h3>How the novel coronavirus has evolved</h3>
          <p>
            L&apos;articolo prende in esame l&apos;evoluzione del coronavirus dalla sua scoperta
            fino all&apos;inizio di novembre, raccontando le mutazioni avvenute attraverso la
            rappresentazione di dati. Si tratta di un testo abbastanza tecnico rivolto a chi ha
            interesse nel raccogliere informazioni su un argomento complicato e per questo può
            permettersi di usare modelli che risultano visivamente complessi. I vari modelli che
            troviamo lungo l&apos;articolo non sono creati apposta per questo dataset ma risultano
            funzionali a spiegare la parte di articolo, e i relativi dati, a cui fanno riferimento.
            È presente anche una visualizzazione poco comune, ovvero il dendrogramma, che risulta
            adatto a rappresentare qualcosa che nel corso del tempo, si è sviluppato in maniere
            differenti biforcazione e dando origine a più oggetti “paralleli” proprio come fa un
            virus. È proprio la visualizzazione adatta per questo tipo di fenomeno e qui,
            sull&apos;asse verticale in cui è rappresentato il tempo, vengono evidenziate tutte le
            registrazioni di un determinato ceppo della patologia. L&apos;insieme del pezzo, che
            possiede solo visualizzazioni statiche, dimostra come in ambito tecnico sia possibile
            mantenere un&apos;alta complessità di rappresentazione contando sul fatto che il
            pubblico sarà motivato a ottenere informazioni e probabilmente ha dimestichezza con
            rappresentazioni di questo tipo.
            <br />
            <br />
            <a
              href="https://graphics.reuters.com/HEALTH-CORONAVIRUS/EVOLUTION/yxmpjqkdzvr/index.html"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img7_02} caption="" alt="" />
          <h3>East West? North South? Or completely different?</h3>
          <p>
            La Germania è uno stato relativamente recente se consideriamo la sua estensione attuale,
            infatti Germania Est e Ovest si sono riunificate solo da una trentina d&apos;anni. Per
            festeggiare l&apos;anniversario il Berliner Morgenpost ha prodotto una choropleth che
            racconta varie metriche a proposito del paese e dei suoi abitanti. La choropleth tende
            ad avere alcuni problemi, i dati sono rappresentati su delle aree e sono equiparati come
            valore, quindi un paese che vanta un&apos;area molto grande risulta predominante a
            livello visivo. In questo caso la granularità del dato è alta e le zone (che sono come
            estensione simili a province italiane) hanno grandezze più o meno regolari quindi la
            lettura non risente troppo dei fattori sopracitati. La particolarità di questo oggetto è
            la necessità di dividere, a priori la Germania in due zone. L&apos;operazione viene
            eseguita dall&apos;utente che può provare a predire quali saranno le aree che
            mostreranno dati opposti fra loro. Grazie a questa funzionalità l&apos;utente è
            invogliato a prefigurare la strutturazione dei dati e a prestare maggiore attenzione
            quando arriva nel dettaglio a leggere i valori delle analisi.
            <br />
            <br />
            <a
              href="https://interaktiv.morgenpost.de/deutschland-teilen-deutsche-einheit-wiedervereinigung/"
              target="blank"
            >
              Vai al progetto →
            </a>
          </p>

          <Images image={img7_03} caption="" alt="" />
          <h3>Cameras and Lenses</h3>
          <p>
            Bartosz Ciechanowski ha scritto un articolo sul suo blog riguarda la funzionamento delle
            lenti ottiche e di come queste interagiscono con le varie componenti di una macchina
            fotografica, all&apos;interno si parla anche di come le camere vengono simulate e
            riprodotte in tutti gli ambienti digitali. Il funzionamento del meccanismo è complesso e
            ogni componente impatta sul risultato dell&apos;immagine. Per questo in tutto
            l&apos;articolo si trovano molte visualizzazioni interattive che permettono di giocare
            con i parametri per capire su cosa agisce ogni componente. Si tratta di un contenuto
            molto tecnico e per questo anche il linguaggio visivo e comunicativo delle viz può
            essere scarno per raggiungere un&apos;alta astrazione comunicando un contenuto quasi
            unicamente teorico. Una possibilità alternativa, che spesso viene utilizzata in articoli
            di questo tipo, è quella di aggiungere parametri mano a mano che questi vengono
            menzionati nell&apos;articolo o nel testo per accompagnare ancora più da vicino il
            lettore nel riconoscere l&apos;effetto di ogni componente.
            <br />
            <br />
            <a href="https://ciechanow.ski/cameras-and-lenses/" target="blank">
              Vai al progetto →
            </a>
          </p>

          <Images image={img7_04} caption="" alt="" />
          <h3>Atlas of Sustainable Development Goals</h3>
          <p>
            L&apos;atlante di World Bank riguardo agli SDG è un progetto all&apos;interno del quale
            è presente uno storytelling interattivo e della data visualizzazioni relative a ogni
            obiettivo. Ogni SDG ha una pagina dedicata all&apos;interno della quale vengono esposti
            i dataset più vari (ovviamente relativi all&apos;SDG di riferimento) tramite svariati
            modelli visivi. Si tratta di modelli classici nella maggior parte che sono raccontati
            tramite delle didascalie che appaiono scrollando la pagina, sono visualizzazioni di
            supporto che, come detto, aiutano la lettura e si animano per permettere di fruire i
            dati al meglio. Il progetto non è particolarmente innovativo nella forma ma ha il pregio
            di esporre una mole di dati realmente impressionante, sono presenti 17 SDG e
            all&apos;interno di ogni pagina troviamo almeno 3 dataviz. L&apos;espediente di dividere
            una tematica complessa per presentarne una parte per volta consente all&apos;utente di
            conoscere solo ciò che lo interessa o di ricostruire tutto l&apos;insieme dei dati
            proposti.
            <br />
            <br />
            <a href="https://datatopics.worldbank.org/sdgatlas/" target="blank">
              Vai al progetto →
            </a>
          </p>
        </div>
      </div>
    )
  }
}
