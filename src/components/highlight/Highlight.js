import React from 'react'
import HighlightBox from './HighlightBox'
import './Highlight.scss'

function Highlight() {
  const boxs = [
    {
      id: 'highlight-consult',
      title: 'Consult',
      icon: <i className="far fa-comments" />,
      content:
        'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.'
    },
    {
      id: 'highlight-design',
      title: 'Design',
      icon: <i className="fas fa-paint-brush" />,
      content:
        'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.'
    },
    {
      id: 'highlight-develop',
      title: 'Develop',
      icon: <i className="fas fa-cubes" />,
      content:
        'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.'
    },
    {
      id: 'highlight-marketing',
      title: 'Marketing',
      icon: <i className="fas fa-bullhorn" />,
      content:
        'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.'
    },
    {
      id: 'highlight-manage',
      title: 'Manage',
      icon: <i className="fas fa-server" />,
      content:
        'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.'
    },
    {
      id: 'highlight-evolve',
      title: 'Evolve',
      icon: <i className="fas fa-chart-line" />,
      content:
        'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass  incarceration. Outcomes big data, fairness, social game-changer.'
    }
  ]

  const highlightBoxes = boxs.map(box => (
    <HighlightBox
      key={box.id}
      title={box.title}
      icon={box.icon}
      content={box.content}
    />
  ))

  return (
    <div className="highlight">
      <div className="highlight__container">
        <div className="highlight__header">
          <h1 className="highlight__header__title">How Can I Help You?</h1>
          <p className="highlight__header__content">
            Our work then targeted, best practices outcomes social innovation
            synergy. Venture philanthropy, revolutionary inclusive policymaker
            relief. User-centered program areas scale.
          </p>
        </div>
        <ul className="highlight__grid">{highlightBoxes}</ul>
      </div>
    </div>
  )
}

export default Highlight
