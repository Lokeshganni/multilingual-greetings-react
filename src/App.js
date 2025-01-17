import {Component} from 'react'
import LanguageTab from './components/LanguageTab'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeLangObj: languageGreetingsList[0],
  }

  handleLanguageTab = id => {
    const filteredObj = languageGreetingsList.filter(each => each.id === id)
    this.setState({activeLangObj: filteredObj[0]})
  }

  render() {
    const {activeLangObj} = this.state
    return (
      <div className="main-container">
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(each => (
            <LanguageTab
              handleLanguageTab={this.handleLanguageTab}
              key={each.id}
              obj={each}
              isActive={each.id === activeLangObj.id}
            />
          ))}
        </ul>
        <img src={activeLangObj.imageUrl} alt={activeLangObj.imageAltText} />
      </div>
    )
  }
}

export default App
