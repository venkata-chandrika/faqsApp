// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isClicked: false,
  }

  onClickPlusBtn = () => {
    const {isClicked} = this.state
    this.setState({
      isClicked: !isClicked,
    })
  }

  render() {
    const {eachDetails} = this.props
    const {isClicked} = this.state
    const {questionText, answerText} = eachDetails
    const imgUrl = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altMsg = isClicked ? 'minus' : 'plus'
    const stmt = isClicked ? (
      <div>
        <hr className="line" />
        <p className="answer">{answerText}</p>
      </div>
    ) : (
      ''
    )

    return (
      <li className="list-container">
        <div className="text-img-container">
          <h1 className="text">{questionText} </h1>
          <button
            type="button"
            onClick={this.onClickPlusBtn}
            className="button"
          >
            <img src={imgUrl} alt={altMsg} className="img" />
          </button>
        </div>
        {stmt}
      </li>
    )
  }
}
export default FaqItem
