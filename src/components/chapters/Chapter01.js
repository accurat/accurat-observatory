import React from 'react'
import Images from '../Images'
import Notes from '../Notes'

import img1_01 from '../../assets/M1_C1_img01.jpg'
import img1_02 from '../../assets/M1_C1_img02.jpg'
import img1_03 from '../../assets/M1_C1_img03.jpg'
import img1_04 from '../../assets/M1_C1_img04.jpg'
import img1_05 from '../../assets/M1_C1_img05.jpg'

export default class Chapter01 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Chapter 1</p>
        <div>
          <h2>What is, and what do we mean by data visualization?</h2>
          <p>
            Maps, pie charts or bar charts are all globally recognized as representation of data,
            but what does this actually mean?.
            <br />
            <br />
            As Edward Tufte says in his The Visual Display of Quantitative information, one of the
            most important books on data visualization theory:{' '}
            <i>
              “Data graphics visually display measured quantities by means of the combined use of
              points, lines, a coordinate system, numbers, symbols, words, shading, and color”
            </i>
            .
            <br />
            <br />
            There have been several attempts to reach a standard definition for this discipline, but
            it appears that the debate is still an ongoing process. Nevertheless, literature offers
            many tentative descriptions that we can use to understand the boundaries of this
            particular design practice. This is probably because data visualization is researched
            and applied to many different fields of study, leading to different acquisitions and
            points of view on its role and essence.
            <br />
            <br />
            For instance, a property of what can be called Data Visualization is its informative and
            explorative nature that helps to create insights and improve the understanding of the
            subject matter. Some may argue that data visualization only concerns the quantitative
            representation of information, while others include more qualitative aspects of data -
            such as categories - in the definition. Furthermore, another important aspect of
            information representation is the ability to see emerging relations between the elements
            of the visual map, which are generally hidden and invisible in the mere dataset or
            spreadsheet. Anyway, all of these are valid criteria to distinguish any visual
            representation, which could also consist of images or written text, from what is
            generally agreed upon to be considered as Data Visualization.
          </p>
          <Images
            image={img1_01}
            caption="Elements that make a Data Visualization."
            alt="Elements that make a Data Visualization."
          />
          <p>
            As you can see, Data Visualization can be described in different ways and, depending on
            the subject area, its value addition may be evaluated based on different criteria. This
            module does not aim at providing a unique definition, but at showing its applications
            and its potential when combined with AI and complexity.
          </p>

          <h3>Where does it come from?</h3>
          <Images
            image={img1_02}
            caption="Cave painting used to enumerate reality."
            alt="Cave painting used to enumerate reality."
          />
          <p>
            The process of counting and organizing has always been a crucial need for human beings,
            starting from the very first cave paintings. Today, as the amount of digital information
            is increasing at an ever-accelerating pace, combined with the huge technological
            improvements of the tools and machines that we use to elaborate it, this need is very
            much present and is more relevant than ever. We are used to represent information
            visually, in order to understand it and to share it with other people, to communicate a
            concept, an idea or even knowledge. While the evolution of technology has drastically
            changed the way we approach this, the core of this necessity always remains the same. We
            may think of these needs as more recent than they actually are, when we assume that
            talking about data visualization automatically leads to taking into consideration big
            data, computers and high-level technologies, but the reality is quite different. Humans
            began organizing their lives ever since consciously experiencing the world, and the need
            to communicate experiences and facts, together with the need to share and preserve
            knowledge, began to surface quite quickly.
          </p>
          <Images
            image={img1_03}
            caption="Continentem Dudum Notam Componebat (with) Continentem Noviter Detectam Componebat. Nicolosi, Giovanni Battista, 1610-1670. From the David Rumsey Map Collection."
            alt="Continentem Dudum Notam Componebat (with) Continentem Noviter Detectam Componebat. Nicolosi, Giovanni Battista, 1610-1670. From the David Rumsey Map Collection."
          />

          <p>
            During the last centuries, while our society was changing and we kept on expanding our
            knowledge of the world we live in, the practice of visualizing information was led by
            cartography. The need for orientation, guidance and navigation around the world, often
            required by commercial routes, or even the simple desire to explore and understand our
            world led us to create maps, and eventually extremely detailed thematic atlases. This
            helped us to develop visual languages used to communicate information that would later
            be formalized, creating the fundamentals of the discipline. During the last century,
            whilst visualizations were being produced for all kinds of fields and subjects, a series
            of focused research defined the structure of the field of study, igniting the creation
            of proper literature and of a set of rules, based on human perception, which are still
            in use today.
          </p>
          <Images
            image={img1_04}
            caption="Visual languages. Isotype (International System of Typographic Picture Education), Otto
            Neurath."
            alt="Visual languages. Isotype (International System of Typographic Picture Education), Otto
            Neurath."
          />

          <p>
            We now have the necessary knowledge and background to understand both how to visualize
            phenomena and how to represent these correctly. We have the tools to gather data and to
            create outputs, in order to fulfil the need we have had for thousands of years: to
            understand, communicate and share organized knowledge.
          </p>
          <Images
            image={img1_05}
            caption="Visual variables to encode information in a visual form. Semiology of Graphics: Diagrams, Networks, Maps. Jacques Bertin"
            alt="Visual variables to encode information in a visual form. Semiology of Graphics: Diagrams, Networks, Maps. Jacques Bertin"
          />

          <Notes>
            If you would like to find out more about the history of data visualization, its
            milestones and the people who had the biggest impact, thanks to the work of R.J. Andrews
            you can get more information on the “The History of Infographics” webpage.{' '}
            <a
              href="https://infowetrust.com/scroll/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover"
            >
              Read more about the history of Data Visualization ↗
            </a>
          </Notes>

          <h3>What are its focal points and goals?</h3>
          <p>
            The final (and practical) role of data visualization is to encode information into
            visual features, with the ultimate goal of making things readable, explorable and, in
            some cases, to tell a story. In order to do this properly, you should always bear in
            mind that communicating anything, from hard data to abstract concepts, requires a common
            language between the two parties of the conversation. This language could be a library
            of shared symbols —for instance we typically rely on alphabets, words and linguistic
            rules to talk to each other— or a series of practices that humans carry out, including
            involuntary ones, that are inherently part of everyone’s culture. Studies and literature
            on visual perception have taught us that in order to design a data visualization we can
            rely on and take advantage of natural behaviors and cerebral reactions, which can help
            or even guide the user’s focus. This concept has been investigated and framed by the
            Gestalt psychologists at the end of the 19th century, and it explores how humans
            understand and react to visual information. The Gestalt Theory constitutes the basis of
            why and how people perceive visual shapes in the first place. The next chapters of this
            module will provide the in-depth details of this area. We introduced this concept to
            emphasize how important it is to remember that visualized information should not exist
            just for the sake of it, but for communicating, explaining and sharing knowledge through
            a readable representation of data.
          </p>
        </div>
      </div>
    )
  }
}
