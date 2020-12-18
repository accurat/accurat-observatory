import React from 'react'

import Header from './Header'
import Footer from './Footer'
import ChapterCard from './ChapterCard'
import Menu from './Menu'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'

export default class Home extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <div className="pa4-l pa3 pt4 mt5-ns mt3">
          <div className="kazoo">
            <Header />
          </div>
          <div className="mh5-l mh4-m flex flex-row">
            <div className="mr3-l pr3-l w-60-l w-80-m w-100">
              <h3 className="kazoo" id="module01">
                Design oriented releases
              </h3>
              <h2>The data visualization observatory</h2>
              <p>
                Grazie alla vastissima quantità di dati che ad oggi siamo in grado di raccogliere e
                alla semplificazione dei processi tecnologici avvenuta negli ultimi anni, la data
                visualization è un campo di ricerca in notevole espansione e di interesse globale.
                Rappresentando i dati si cerca di dare una forma più comprensibile a tutto ciò che
                viene misurato e tracciato in modo da far emergere evidenze e domande che altrimenti
                sarebbe stato molto più difficile scovare. La visualizzazione dati non è una
                disciplina che risulta sempre immediata proprio per via della sua relativa
                giovinezza, soprattutto quando si cerca di rappresentare fenomeni complessi che
                necessitano di soluzioni ad hoc per poter essere compresi esaustivamente.
                L’Osservatorio Dataviz è un’iniziativa di Accurat pensata e progettata per Loccioni
                in cui viene presentata una selezione di lavori interessanti e innovativi nel campo
                della visualizzazione dati. Gli aggiornamenti avvengono su base mensile ed includono
                una selezione progetti rilevanti, di recente rilascio e non. L’Osservatorio permette
                di seguire le novità in materia al fine di sviluppare dimestichezza con le diverse
                modalità e forme di rappresentazione visiva. Sviluppare una sensibilità verso la
                rappresentazione dei dati permette di comprendere meglio la necessità di creare
                strumenti e processi che siano in grado di restituire tutte le sfumature delle
                misurazioni effettuate. La possibilità di dare risalto ai valori più significativi
                permette di rendere più dense di significato le piattaforme nelle quali i dati
                vengono mostrati e raccontati. I progetti presentati saranno di natura diversa in
                modo da offrire una panoramica quanto più ampia possibile sia dal punto di vista
                argomentativo che da quello visivo e tecnico. Si tratta di un buon punto di partenza
                per chi, già appassionato o interessato a questi artefatti, abbia interesse ad
                approfondire le proprie conoscenze in questo ambito.
              </p>

              <ChapterCard
                idRef="1_1"
                chapNum="1"
                audience="2020, June"
                readTime=""
                title="Numero 01"
                coverImg={img1}
              >
                <h4>· Outbreak- Melting Asphalt</h4>
                <h4>· Communicating Model Uncertainty Over Space</h4>
                <h4>· Data Visualization as an act of Witnessing</h4>
                <h4>· Made in Fukushima</h4>
              </ChapterCard>
              <ChapterCard
                idRef="1_2"
                chapNum="2"
                audience="2020, July"
                readTime=""
                title="Numero 02"
                coverImg={img2}
              >
                <h4>· Treinverkeer in Nederland</h4>
                <h4>· A visual introduction to machine learning</h4>
                <h4>· The evolution of the American Census</h4>
                <h4>· Explore the city on a human scale</h4>
              </ChapterCard>
              <ChapterCard
                idRef="1_3"
                chapNum="3"
                audience="2020, August"
                readTime=""
                title="Numero 03"
                coverImg={img3}
              >
                <h4>· Coronavirus tracked</h4>
                <h4>· The True Colors of America&apos;s Political Spectrum</h4>
                <h4>· Shifting Smoke</h4>
                <h4>
                  · How randomized response can help collect sensitive information responsibly
                </h4>
              </ChapterCard>
              <ChapterCard
                idRef="1_4"
                chapNum="4"
                audience="2020, September"
                readTime=""
                title="Numero 04"
                coverImg={img4}
              >
                <h4>· Esri CovidPulse</h4>
                <h4>· Flooding in America</h4>
                <h4>· Overview - A new perspective of how we change the Earth</h4>
                <h4>· Their Names</h4>
              </ChapterCard>
              <ChapterCard
                idRef="1_5"
                chapNum="5"
                audience="2020, October"
                readTime=""
                title="Numero 05"
                coverImg={img5}
              >
                <h4>· Reconstructing seven days of protests in Minneapolis</h4>
                <h4>· 12 Sunset: Exploring Ed Ruscha’s Archive</h4>
                <h4>· Color palettes and accessibility features for data visualization</h4>
                <h4>· The Shape of Dreams</h4>
              </ChapterCard>
              <ChapterCard
                idRef="1_6"
                chapNum="6"
                audience="2020, November"
                readTime=""
                title="Numero 06"
                coverImg={img6}
              >
                <h4>· Noisy City</h4>
                <h4>· The Cultural Borders of Songs</h4>
                <h4>· Breakthrough Energy</h4>
                <h4>· A Breathing Earth</h4>
              </ChapterCard>
              <ChapterCard
                idRef="1_7"
                chapNum="7"
                audience="2020, December"
                readTime=""
                title="Numero 07"
                coverImg={img7}
              >
                <h4>· How the novel coronavirus has evolved</h4>
                <h4>· East West? North South? Or completely different?</h4>
                <h4>· Cameras and Lenses</h4>
                <h4>· Atlas of Sustainable Development Goals</h4>
              </ChapterCard>
            </div>

            <div className="ml4-l w-40-l dn db-l">
              <Menu />
            </div>
          </div>
        </div>
        <Footer idRef="1_0" />
      </div>
    )
  }
}
