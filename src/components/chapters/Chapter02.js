import React from 'react'
import Images from '../Images'
import Notes from '../Notes'

import img2_01 from '../../assets/M1_C2_img01.jpg'
import img2_02 from '../../assets/M1_C2_img02.jpg'
import img2_03 from '../../assets/M1_C2_img03.jpg'

export default class Chapter02 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Chapter 2</p>
        <div>
          <h2>The Purpose of Data Visualization</h2>
          {/* <Images image={img2_01} caption="Data Visualization at every step of the project." /> */}
          <p>
            This chapter highlights the purpose of using a visual display of data in the three main
            contexts where Data Visualization can play a pivotal role. You will learn about using
            Data Visualization as a trigger at the very beginning of a project, enabling you to
            initiate your analysis; during the process as a tool to elaborate the data, gain
            insights, set milestones, revise your protocols and methods; and finally at the end of
            the analysis, as an effective support for communicating your results, and explaining
            them to other people with different backgrounds.
          </p>
          <h3>Considering data visualization as a design process</h3>
          <p>
            Before plunging into the details, it is important to frame the discipline of Data
            Visualization as an iterative process that is activated to serve a specific purpose.
            Like all the branches of design, Data Visualization should always be oriented towards a
            goal, more specifically to address a problem, help humans understand it and eventually
            (hopefully) solve it. As it belongs to the realm of vision, the design of a data
            visualization also concerns the aesthetic components of the artifact. This aspect should
            not be considered as a mere artistic exercise, but rather as an excellent way to capture
            the readers’ attention and to guide them through the information. The visual appearance
            of the visualization can really have a crucial impact on both the effectiveness of the
            data display as well as on all things which concern the information’s accessibility, and
            should not be underestimated.
          </p>
          <Images
            image={img2_01}
            caption="Data Visualization as an iterative design process."
            alt="Data Visualization as an iterative design process."
          />
          <p>
            The practice of Data Visualization is a design process, as a bare visual representation
            this process doesn’t directly solve anything: it is from our reading and understanding
            of the representation that we generate insights and consequently formulate thoughts,
            whether these are knowledge, strategies, decisions or actions to be taken. Because these
            considerations can emerge at any given point of the process, the design object can
            constantly be re-evaluated, hence re-designed and tested again. These are the
            requirements for an iterative design process that loops from design to prototype to
            evaluation and back to design. During a research project it’s very common to obtain
            materials —in this case your data— along the way, and to obtain them with incremental
            refinement. The same will probably happen to your data visualization: you start from a
            first idea, draft it, evaluate it and then enrich your initial idea with new ideas and
            make a new draft.
            <br />
            <br />
            Potentially, this process could be infinite and never reach a perfect final state,
            nevertheless this iterative evolution will ensure your visualization reaches a version
            which strikes a balance between what needs to be understood and what can be read in it.
            Quoting Mike Monteiro’s Design is a Job,{' '}
            <i>
              “whether you are helping to launch a new business from scratch, or making incremental
              changes to an existing product, or anything in between, every design task that you
              will undertake must serve a goal. It is your job to find out what those goals are”
            </i>
            , because they are the very reasons for which the design process is initiated. As seen
            in the previous chapter, you could start by defining the necessity that you are trying
            to address, or the question which you are trying to answer through your data
            visualization.
          </p>

          <h3>The role of data visualization in the decision process</h3>
          <p>
            Now that you can think of data visualization as a design process, let’s see where we can
            place it within the decision-making process. When can you use data visualization to
            analyze a subject, understand it and eventually reach your goal? First of all,
            visualizing information means making it readily available for the visual system. Human
            perception is triggered to find relations between the elements of the visualization,
            allowing us to read the information, how it is organized and which values are
            represented. Once the information is perceived, the brain elaborates it and the result
            —in an ideal/optimal case— is that we can understand and make sense of it. This is
            crucial in order to understand a subject, and is what translates a phenomenon from
            abstract to tangible, in order that we may be able to actively use it to make decisions.
            One of the explanatory videos concerning Jacques Bertin’s techniques, states that{' '}
            <i>“It’s not a matter of accumulating knowledge, it’s a matter of organizing it”</i>,
            and this is what data visualization should be, a discipline used to create different
            point of view and insights on a subject.
          </p>

          <Notes>
            <a
              href="https://youtu.be/RZzjuma2F-E"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover"
            >
              Go to video: Bébert et la Graphique ↗
            </a>
          </Notes>

          <p>
            There is no universal position for data visualization in the decision process. Still, it
            can be very useful to use it as a starting point, because it could provide the first
            general idea, a first overview of the environment that you are working on. Being able to
            see the initial corpus of data is often instrumental in setting up the analysis. You
            will also discover the advantages of using it repeatedly during your process, while
            refining your insights and handling eventual emerging issues. As your analysis evolves,
            inevitably the visualization of the evolving data or of the objectives will do so too.
            This could be limited to an update of the same chart, or deciding to design different
            charts to see different aspects of the data. Every analysis can be unique, and this has
            great potential; you can design a different set of visual representations each time,
            each one most suited to your specific goals and your specific data. The power that lies
            within is that data visualization becomes a tool of fundamental support to your
            research, which clarifies what’s going on, and by doing so it speeds up the whole
            process and helps you reach a conclusion. Lastly, once the research is concluded,
            presenting your results in a visual form through data visualization has proven to be an
            excellent way to effectively communicate with stakeholders and the public alike, as they
            gain direct visual access to the data.
          </p>
          <Images
            image={img2_02}
            caption="The New York Times - Mapping Migration in the United States. By Gregor Aisch and Robert
            Gebeloff."
            alt="The New York Times - Mapping Migration in the United States. By Gregor Aisch and Robert
            Gebeloff."
          />
          <Images
            image={img2_03}
            caption="Simulated Dendrochronology of U.S. Immigration. By Pedro M. Cruz and John Wihbey."
            alt="Simulated Dendrochronology of U.S. Immigration. By Pedro M. Cruz and John Wihbey."
          />

          <h3>Dataviz as exploration and as a way to explain concepts</h3>
          <p>
            We saw how visualizing information can be useful to understand a subject, and as it will
            help you during the process it can be helpful for other people as well. You should use
            it as a medium to convey a message, to present the process that led you to your
            conclusions and to validate your choices. Data visualization can be your biggest ally in
            explaining the decisions that were taken and the outcomes they create. In order to do
            this properly you must have a goal in mind, you need to have clear what you want to
            represent and why, and to help you understand how to present your work you should try to
            understand the environment you are working in as much as possible. The following list is
            meant to be a guide, a series of questions that you can ask yourself before and whilst
            designing the data visualization in order to identify the context in which you are, to
            structure the visualization you want to create and to understand what is the best way to
            present it.
          </p>
          <ol>
            <li>
              What kind of audience are you addressing? Think about their skills, job or knowledge
              of the topic, think about the characteristics of the people that will see your outcome
              and consider them as the primary users, not yourself.
            </li>
            <li>
              What kind of format are you going to use? PowerPoint presentations, interactive
              applications or step-by-step narrative explanations are three ways that can be used to
              communicate the same content, try to understand which can work better and why.
            </li>
            <li>
              What is the context? A presentation to developers is very different from one
              addressing CEO’s, this can drastically affect how to communicate the same message.
              Keep in mind how much time and attention you’ll have before creating a visualization.
            </li>
          </ol>
        </div>
      </div>
    )
  }
}
