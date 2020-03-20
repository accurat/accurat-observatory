import React from 'react'
import Images from '../Images'
// import Notes from '../Notes'

import img3_01 from '../../assets/M1_C3_img01.jpg'
import img3_02 from '../../assets/M1_C3_img02.jpg'
import img3_03 from '../../assets/M1_C3_img03.jpg'
import img3_04 from '../../assets/M1_C3_img04.jpg'

export default class Chapter03 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Chapter 3</p>
        <div>
          <h2>The Value of Data Visualization</h2>

          {/* <Images
            image={img3_01}
            caption="Comparison between focusing on one layer of information or on a selected area of the visualization."
          /> */}

          <p>
            There is a common tendency to think that we need to simplify in order to understand.
            Data visualization is often considered a way to simplify a concept to make it more
            understandable, but this is a misconception, sometimes caused by a misuse of the
            artifact. The power of data visualization lies in not having to simplify, because to
            simplify is to reduce and cut down, and this is contradictory to the need to fully
            understand. The value of data visualization resides in the ability to make a subject
            more consumable and clear via visual means, and sometimes to access complexity and to
            reflect the original structure of data within a big/comprehensive picture.
          </p>
          <h3>Complexity vs Simplification, and why we need both</h3>
          <p>
            Whilst simplifying information could come in real handy to see key facts at a glance, it
            should not be used as a methodology when designing data visualization. Removing
            information from the big picture can very easily result in a counterproductive output,
            making it actually harder to understand what is really going on. If a phenomenon has a
            complex nature, then its complex structure needs to be communicated to the recipients in
            order to enable understanding the issue. In this context, data visualization becomes the
            portal to access complexity. A good strategy for designing complex visualizations is to
            display multiple layers of information, so that the user can identify each layer and
            focus either on one dimension at a time or on selected areas of the map.
          </p>
          <Images
            image={img3_01}
            caption="The New York Times / A 3-D View of a Chart That Predicts The Economic Future: The Yield Curve. By Gregor Aisch and Amanda Cox"
            alt="The New York Times / A 3-D View of a Chart That Predicts The Economic Future: The Yield Curve. By Gregor Aisch and Amanda Cox"
          />
          <Images
            image={img3_02}
            caption="The New York Times / A 3-D View of a Chart That Predicts The Economic Future: The Yield Curve. By Gregor Aisch and Amanda Cox"
            alt="The New York Times / A 3-D View of a Chart That Predicts The Economic Future: The Yield Curve. By Gregor Aisch and Amanda Cox"
          />
          <p>
            On the other hand, complexity of information does not mean complex visual solutions. On
            the contrary, visual treatment can make a complex structure look simpler and more
            accessible whilst retaining different and important layers of information. Each time the
            design process is repeated, you should ask yourself if there is a way to make the
            information that you are visualizing easier to read and understand for your target user.
            Visual simplicity is a very effective strategy when applied to the storytelling of the
            visualization.
          </p>
          <h3>The value of complexity</h3>
          {/* <Images
            image={img3_04}
            caption="The sum of the parts is more meaningful of the single parts by themselves."
          /> */}
          <p>
            We can appreciate the value of complexity when we start to think of it as being a
            quality of the phenomenon, rather than an issue. Taking into account different parts of
            a subject of study is to see and understand the bigger picture. The sum of the parts is
            more meaningful than all parts viewed separately, as often there are aspects of the
            phenomenon that can only emerge when all players and their behaviors are shown together,
            are all put into relation with one another. Quoting Ewdard Tufte, “What is to be sought
            in designs for the display of information is the clear portrayal of complexity. Not the
            complication of the simple; rather the task of the designer is to give visual access to
            the subtle and the difficult - that is, the revelation of the complex.”
          </p>
          <h3>We are curious beings</h3>
          <p>
            We are surrounded by phenomena that are intrinsically complex, and our attempts to
            simplify them are aimed at understanding what we are looking at. But why do we visualize
            our surroundings? We do that because we are inherently curious beings, and humans need
            to find answers to explain what is around them. Time has changed the way we approach
            this task, as we are now provided with new and different technologies that allow us to
            do things that were once unimaginable. And yet the core drive remains the same, as seen
            in chapter 1.1.
          </p>
          <Images
            image={img3_03}
            caption="The following images are a comparison of early analysis of solar spots and late ones. First: Letters on Sunspots (Istoria e Dimostrazioni intorno alle Macchie Solari) was a pamphlet written by Galileo Galilei in 1612. The Letters on Sunspots, was a continuation of Sidereus Nunicus, Galileo's first work where he publicly declared that he believed that the Copernican system was correct."
            alt="The following images are a comparison of early analysis of solar spots and late ones. First: Letters on Sunspots (Istoria e Dimostrazioni intorno alle Macchie Solari) was a pamphlet written by Galileo Galilei in 1612. The Letters on Sunspots, was a continuation of Sidereus Nunicus, Galileo's first work where he publicly declared that he believed that the Copernican system was correct."
          />
          <Images
            image={img3_04}
            caption="An active region on the sun with dark sunspots. Image credit: NASA/SDO/AIA/HMI/Goddard Space Flight Center."
            alt="An active region on the sun with dark sunspots. Image credit: NASA/SDO/AIA/HMI/Goddard Space Flight Center."
          />
          <p>
            An excellent example are the drawings of sunspots observations, which Galileo Galilei
            published in 1612. Today we can very easily study the same subject with instruments that
            are more advanced than Galileo’s handcrafted telescope. The evolution of technological
            means influences our investigation of the world, fueling the exploration of more complex
            problems needed to satisfy our unstoppable curiosity.
          </p>
          <h3>Insight summary</h3>
          <ol>
            <li>
              The value of data visualization resides in the ability to make complexity accessible
              and readable.
            </li>
            <li>
              Complexity is a quality of data and should be represented for what it is.
              Simplification should be directed towards the storytelling, and should not be used to
              cut down on the quantity of data.
            </li>
            <li>
              Curiosity fuels our investigation of the world, and data visualization supports the
              exploration of phenomena in a tangible way. This allows us to explain our findings.
            </li>
          </ol>
        </div>
      </div>
    )
  }
}
