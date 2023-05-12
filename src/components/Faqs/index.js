// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="container">
        <div className="faq-container">
          <h1 className="heading">FAQS</h1>
          <ul>
            {faqsList.map(eachList => (
              <FaqItem eachDetails={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
