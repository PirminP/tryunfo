import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: '',
      cardTrunfo: false,
      airplainCards: [],
    };
  }

  isInputEmpty = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
    ) {
      return false;
    }
    return true;
  }

  isAttributionRight = () => {
    let { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    cardAttr1 = parseInt(cardAttr1, 10);
    cardAttr2 = parseInt(cardAttr2, 10);
    cardAttr3 = parseInt(cardAttr3, 10);
    const maxSum = 210;
    const maxOneAttr = 90;
    if (
      cardAttr1 >= 0 && cardAttr1 <= maxOneAttr
      && cardAttr2 >= 0 && cardAttr2 <= maxOneAttr
      && cardAttr3 >= 0 && cardAttr3 <= maxOneAttr
      && cardAttr1 + cardAttr2 + cardAttr3 <= maxSum
    ) {
      return false;
    } return true;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick= () => {
    const { airplainCards } = this.state;
    const newAirplain = this.state;
    delete newAirplain.airplainCards;
    airplainCards.push(newAirplain);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
      cardTrunfo: false,
      airplainCards,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      airplainCards,
    } = this.state;

    const isSaveButtonDisabled = this.isAttributionRight() || this.isInputEmpty();
    const hasTrunfo = airplainCards.some((airplain) => airplain.cardTrunfo === true);

    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        { airplainCards.map((airplain) => (<Card
          key={ airplain.cardName }
          cardName={ airplain.cardName }
          cardDescription={ airplain.cardDescription }
          cardAttr1={ airplain.cardAttr1 }
          cardAttr2={ airplain.cardAttr2 }
          cardAttr3={ airplain.cardAttr3 }
          cardImage={ airplain.cardImage }
          cardR={ airplain.cardRare }
          cardTrunfo={ airplain.cardTrunfo }
        />))}
      </div>
    );
  }
}

export default App;
