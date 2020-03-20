import React from 'react'
import Images from '../Images'
// import Notes from '../Notes'

import img5_01 from '../../assets/M1_C5_img01.jpg'
import img5_02 from '../../assets/M1_C5_img02.jpg'
import img5_03 from '../../assets/M1_C5_img03.jpg'
import img5_04 from '../../assets/M1_C5_img04.jpg'
import img5_05 from '../../assets/M1_C5_img05.jpg'

export default class Chapter05 extends React.Component {
  componentDidMount() {
    window.document.scrollingElement.scrollTop = 0
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div>
        <p className="chapter-breadcrumb mt4 mb2">Chapter 5</p>
        <div>
          <h2>Data Visualization and AI</h2>
          <h3>How can we use data visualization to represent and explain AI processes?</h3>
          <p>
            It’s often hard to explain AI techniques. Why? their dynamism makes them complex and not
            always clear for non-experts. Data visualization can provide the user with a way to
            access the black box of AI processes, it can help to follow and explain what the
            algorithm is doing and to make decisions based on the evolution of the process itself.
          </p>
          <h3>Accurat for Watson Studio</h3>
          <p>
            Accurat and the IBM Watson Studio team collaborated in 2018, designing a series of
            visualizations made to explore and understand the nature of unstructured text data.
            During the project the team focused on the two main aspects of the problem: the
            representation of the content itself and the validation of the models created to analyze
            it. These two approaches are designed to serve data scientists in two different
            situations:
          </p>
          <ol>
            <li>
              Understanding.
              <br /> As we mentioned in chapter 1.4, visually representing data can help to
              understand its structure, in particular when its size requires this. This first
              approach will help the engineer when framing the future analysis.
            </li>
            <li>
              Validation
              <br />
              Once a machine learning model is designed, this tool will help to understand the
              results and to refine details thanks to the possibility of going back and forth in the
              process iterations.
            </li>
          </ol>
          <Images
            image={img5_01}
            title="Customer Service sentiment analysis"
            caption="The analysis has been conceived to give an image of the evolution of customer care conversation with clients. The goal is to visualize the changing satisfaction of the clients during the call (or chat) using the Sentiment Analysis services from Watson Studio."
            alt="The analysis has been conceived to give an image of the evolution of customer care conversation with clients. The goal is to visualize the changing satisfaction of the clients during the call (or chat) using the Sentiment Analysis services from Watson Studio."
          />
          <Images
            image={img5_02}
            title="Scatterplot analysis (tweets, sentences, unstructured text)"
            caption="The customizable scatterplot is an agnostic tool created to represent any kind of indicator or variables given by Watson Studio in the analysis of unstructured data (such as tweets and social media content). The visualization will be used to understand the structure of the dataset and its features, to foster a personal exploration of the corpus."
            alt="The customizable scatterplot is an agnostic tool created to represent any kind of indicator or variables given by Watson Studio in the analysis of unstructured data (such as tweets and social media content). The visualization will be used to understand the structure of the dataset and its features, to foster a personal exploration of the corpus."
          />
          <Images
            image={img5_03}
            title="Occurrences analysis"
            caption="This visual model has been created to allow a visual exploration and analysis of keywords’ role in long texts. Different layers of information allow the user to understand the changing subject of articles and large amount of texts."
            alt="This visual model has been created to allow a visual exploration and analysis of keywords’ role in long texts. Different layers of information allow the user to understand the changing subject of articles and large amount of texts."
          />
          <Images
            image={img5_04}
            title="Machine Learning Validation"
            caption="Visualizing the outputs of ML models it’s important to understand the effect of the algorithm directly on the data. This analysis has been designed to create a better way to validate the results of AI processes."
            alt="Visualizing the outputs of ML models it’s important to understand the effect of the algorithm directly on the data. This analysis has been designed to create a better way to validate the results of AI processes."
          />
          <h3>Visualizing uncertainty</h3>
          <p>
            Uncertainty is an aspect of statistical calculations that should not be hidden away or
            discarded when visually representing data. This is because it represents an important
            piece of information that should be passed on to the readers, to whom it might be
            valuable. Visualizing uncertainty becomes more relevant when AI is applied to represent
            and track the evolution of the algorithms’ outputs, as statistical uncertainty is part
            of the computation of forecast values. It is considered an added value to communicate
            transparency on data and methods in the visualization, and you can display this by
            clarifying the fact that you are statistically considering a range of probability,
            rather than exact values (which are hypothetical). Showing uncertain values is a good
            thing, but it should not be improvised. There are best practices that you should follow
            in order to do so correctly, to make sure that the reader will be able to understand
            which values are actual measures, as opposed to what is just a supposition. For example,
            forecasts usually show mean values that are the most probable within a range or
            distribution of possible values. You could start by simply visualizing the entire range
            of values. Another option is to show the definite values with sharp visual features,
            such as crisp lines and bold color fills, while using a different set of fuzzy visual
            features when it comes to uncertain values, such as blurred borders, shapes, or using
            different values of opacity. You can go even further in the visual treatment of the
            visualization by using different styles for the graphs’ own structural elements, such as
            switching from continuous to dotted lines for the axis, or differentiating the uncertain
            section of the graph with a change of background color.{' '}
            <a
              href="https://flowingdata.com/2018/01/08/visualizing-the-uncertainty-in-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover"
            >
              Read more about uncertainty ↗
            </a>
          </p>
          <br />
          <Images
            image={img5_05}
            title="Representation of uncertain values"
            caption="Visual representation of uncertain values on linechart. Image from the collavoration between Accurat and the IBM Watson Team."
            alt="Visual representation of uncertain values on linechart. Image from the collaboration between Accurat and the IBM Watson Team."
          />
          <br />
          <h3>Bias and ethic in Data Visualization</h3>
          <p>
            One of the main concerns and tackled aspects of Artificial Intelligence, and of Machine
            Learning in particular, consists of biases. Biases can be found in the training set or
            in the algorithms alike, and biased prediction models can lead to veered results. There
            are multiple ways in which we can try to minimize their impact{' '}
            <a
              href="https://parametric.press/issue-01/the-myth-of-the-impartial-machine/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover"
            >
              Read Parametric Press ↗
            </a>
          </p>
          <p>
            Just as biases can be found in the output data, it becomes fundamental to be aware that
            biases also concern the way we display data. There is a perverse branch in the
            information visualization sphere that deals with how to stretch, skew and cut graphs to
            show totally misleading representations that seem “trustworthy.” This practice is most
            commonly used in politics or economic battles, where the disputant tries to earn consent
            by finding support for their arguments in scientific-looking graphs, whilst in reality
            they are an intentional distortion made to deceive our perception. A recent example and
            analysis was published by the Washington Post in relation to Trump’s 2016 campaign:{' '}
            <a
              href="https://www.washingtonpost.com/graphics/politics/2016-election/trump-charts/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover"
            >
              Read the Washington Post analysis ↗
            </a>
          </p>
          <p>
            In this context, it is a matter of ethics to remain neutral and show facts just as they
            are, especially in contexts where our decision-making depends on visual evidence. Since
            there are deceptive tricks that have proven to be very effective, it is important to
            notice that two visualization built on the same dataset could produce two totally
            different stories. An example that clearly renders this concept was made by the New York
            Times:{' '}
            <a
              href="https://archive.nytimes.com/www.nytimes.com/interactive/2012/10/05/business/economy/one-report-diverging-perspectives.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover"
            >
              Read The New York Times article ↗
            </a>
          </p>
          <p>
            Ethics is a fundamental aspect of working with data visualization, because the visual
            representation of information can be used to communicate different messages, and it is
            important to be conscious about the potential interpretations. Starting from the visual
            model that you choose, the visual perception with which we make sense of the data
            displayed can change dramatically.{' '}
            <a
              href="https://lenagroeger.s3.amazonaws.com/papers/BarsLines.pdf)"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover"
            >
              Read more about ethics ↗
            </a>
          </p>
          <p>Further reading:</p>
          <ol>
            <li>
              <a
                href="https://www.washingtonpost.com/graphics/politics/2016-election/trump-charts/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-hover"
              >
                Tha Washington Post / John Muyskens: Most of Trump’s charts skew the data. And not
                always in his favor. ↗
              </a>
            </li>
            <li>
              <a
                href="http://www.thefunctionalart.com/2019/04/charts-that-lie.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-hover"
              >
                Alberto Cairo: Charts that lie. ↗
              </a>
            </li>
            <li>
              <a
                href="https://parametric.press/issue-01/the-myth-of-the-impartial-machine/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-hover"
              >
                Parametric press / Alice Feng & Shuyan Wu. The Myth of the Impartial Machine ↗
              </a>
            </li>
            <li>
              <a
                href="https://www.propublica.org/article/how-information-graphics-reveal-your-brains-blind-spots"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-hover"
              >
                ProPublica / Lena V. Groeger: How Information Graphics Reveal Your Brain’s Blind
                Spots ↗
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@blaisea/do-algorithms-reveal-sexual-orientation-or-just-expose-our-stereotypes-d998fafdf477"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-hover"
              >
                Blaise Agüera y Arcas, Alexander Todorov & Margaret Mitchell: Do algorithms reveal
                sexual orientation or just expose our stereotypes? ↗
              </a>
            </li>
            <li>
              <a
                href=" https://www.nytimes.com/2015/07/10/upshot/when-algorithms-discriminate.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                The New York Times / Claire Cain Miller: When Algorithms Discriminate ↗
              </a>
            </li>
            <li>
              <a
                href="https://archive.nytimes.com/www.nytimes.com/interactive/2012/10/05/business/economy/one-report-diverging-perspectives.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-hover"
              >
                The New York Times / Mike Bostock, Shan Carter, Amanda Cox & Kevin Quealy: One
                Report, Diverging Perspectives ↗
              </a>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}
