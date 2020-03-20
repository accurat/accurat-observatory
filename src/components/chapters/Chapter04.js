import React from 'react'
import Images from '../Images'
// import Notes from '../Notes'

import img4_01 from '../../assets/M1_C4_img01.jpg'
import img4_02 from '../../assets/M1_C4_img02.jpg'
import img4_03 from '../../assets/M1_C4_img03.gif'

export default class Chapter04 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Chapter 4</p>
        <div>
          <h2>Success stories</h2>
          <p>
            So far you have learned important aspects about data visualization, the central
            theoretical basis of the topic. In this chapter, you will see practical examples that
            are proof of the value data visualization can have in the decision process. The most
            important concept to learn in visualizing data is its relevance, this activity is often
            mistaken for adornment, a final step of the process useful just to make things visually
            better and to present them to others but reality is quite different and in this chapter
            you’ll be able to understand its potential. The three case studies selected for this
            module will offer an excellent validation of how data visualization can really be the
            missing link to solve a problem —and sometimes even to save lives.
          </p>
          <h3>FOCUS 1 / 1854 Broad Street cholera outbreak</h3>

          <p>
            As the title of this focus may suggest, in 1854 England experienced a cholera outbreak,
            part of the pandemic which took place worldwide between 1846–1860. People were dying at
            increasing rates and no one seemed to be able to explain how the virus was spreading. It
            was unclear whether the infection was airborne, transmitted by physical contact, carried
            by animals or found in food sources.
          </p>
          <Images
            image={img4_01}
            caption="Original map by John Snow showing the clusters of cholera cases (indicated by stacked rectangles) in the London epidemic of 1854. The contaminated pump is located at the intersection of Broad Street and Cambridge Street (now Lexington Street), running into Little Windmill Street."
            alt="Original map by John Snow showing the clusters of cholera cases (indicated by stacked rectangles) in the London epidemic of 1854. The contaminated pump is located at the intersection of Broad Street and Cambridge Street (now Lexington Street), running into Little Windmill Street."
          />
          <p>
            John Snow, an English Physician, had the idea to mark out on a map where each deceased
            person lived. Snow did not understand the mechanism by which the disease was
            transmitted, but evidence led him to believe that it was not due to breathing foul air.
            Based on the pattern of illness among residents, Snow hypothesized that cholera was
            spread by an agent found in contaminated water. As a matter of fact, most of the deaths
            occurred around a public water pump that supplied the nearby homes. Cholera ceased in
            these places only a few days after switching to cleaner water sources.{' '}
            <a
              href="https://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover"
            >
              Read more about the Broad Street cholera outbreak ↗
            </a>
          </p>
          <h3>FOCUS 2 / How the Circle Line rogue train was caught with data</h3>

          <p>
            In 2016, when the metro network of Singapore started to experience sudden disruptions,
            no one had a clue as to their origin. During an initial analysis of the data, the
            investigation was approached in a traditional way, with a statistical elaboration of
            said data. However, no relevant insights emerged, as no correlation was found.
            Additionally, the analysts did not really know what they were looking for, which made
            solving this mystery even harder. A
          </p>
          <Images
            image={img4_02}
            caption="Once understood, the insight was confirmed by further analysis and visualizations. The visual model used to understand the problem was eventually used to check on different days and situations such as September 1, where the problem appears to be clearly linked to train PV46. Image from How the Circle Line rogue train was caught with data. Daniel Sim, Lee Shangqian and Clarence Ng."
            alt="Once understood, the insight was confirmed by further analysis and visualizations. The visual model used to understand the problem was eventually used to check on different days and situations such as September 1, where the problem appears to be clearly linked to train PV46. Image from How the Circle Line rogue train was caught with data. Daniel Sim, Lee Shangqian and Clarence Ng."
          />
          <p>
            t one point, they decided to try and analyze the problem in a visual way, using visual
            models previously designed specifically to map train timetables. By doing this, their
            trial shifted towards the right area. This allowed the data patterns to emerge in a
            meaningful way. They discovered that the disruptions, mapped out in this visual model,
            revealed a visual pattern identical to the movement of trains, but with opposite
            direction to the latter. Because of this visual insight, it was possible to hypothesize
            that the problem may have been caused by a different train than the ones affected by the
            disruptions. This is a case where the right chart was used in the right context. Data
            did not show the problem itself: they conveyed an image of the problem, the results of
            measurements of the monitoring system.{' '}
            <a
              href="https://blog.data.gov.sg/how-we-caught-the-circle-line-rogue-train-with-data-79405c86ab6a"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover"
            >
              Read more about the Circle Line rogue train ↗
            </a>
          </p>
          <h3>
            FOCUS 3 / Same Stats, Different Graphs: Generating Datasets with Varied Appearance and
            Identical Statistics through Simulated Annealing
          </h3>

          <p>
            As seen in chapter 1.3, sometimes simplification is not necessarily a positive thing to
            do: summarizing a set of data points into a single number could hide the defining
            characteristics of the issue. This becomes extremely relevant when studying statistical
            phenomena and highlights the importance of using data visualization throughout an
            analysis as well as choosing the right parameters to describe a set of data. This
            example shows precisely this situation, and does so using visual representations of
            profoundly different numeric distributions that are however very similar when averaged
            out.
          </p>
          <Images
            image={img4_03}
            caption="The Datasaurus Dozen. While different in appearance, each dataset has the same summary statistics (mean, standard deviation, and Pearson's correlation) to two decimal places. From Same Stats, Different Graphs: Generating Datasets with Varied Appearance and Identical Statistics through Simulated Annealing. Justin Matejka, George Fitzmaurice."
            alt="The Datasaurus Dozen. While different in appearance, each dataset has the same summary statistics (mean, standard deviation, and Pearson's correlation) to two decimal places. From Same Stats, Different Graphs: Generating Datasets with Varied Appearance and Identical Statistics through Simulated Annealing. Justin Matejka, George Fitzmaurice."
          />
          <p>
            The Datasaurus Dozen. While different in appearance, each dataset has the same summary
            statistics (mean, standard deviation, and Pearson‘s correlation) to two decimal places.
            Each of these 13 datasets (the Datasaurus, plus 12 others) has the same summary
            statistics (x/y mean, x/y standard deviation, and Pearson‘s correlation) to two decimal
            places, while being drastically different in appearance. Visualization helps
            understanding the nature of datasets and will come in hand when choosing which
            parameters to use, which is crucial to make reliable analysis. From the graphical point
            of view, since we now have the computational power and the technology to see things in
            their entirety, we should aim at actually seeing these phenomena in full. In most cases,
            you are not limited to samples anymore and you have the possibility to apply data
            visualization to the entire set that you are researching. In this scenario, if you
            decide to not visualize the big picture, you are likely to miss the inner mechanisms of
            the phenomenon.{' '}
            <a
              href="https://www.autodeskresearch.com/publications/samestats"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover"
            >
              Read more about the project Same Stats, Different Graphs ↗
            </a>
          </p>
        </div>
      </div>
    )
  }
}
