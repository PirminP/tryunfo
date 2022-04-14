import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <h1>Adicoinar Nova Carta</h1>
        <form>
          <Input
            type="text"
            name="cardName"
            testid="name-input"
            label="Nome"
            value={ cardName }
            callback={ onInputChange }
          />
          <Input
            type="textarea"
            name="cardDescription"
            testid="description-input"
            label="Descrição"
            value={ cardDescription }
            callback={ onInputChange }
          />
          <Input
            type="number"
            name="cardAttr1"
            testid="attr1-input"
            label="Attr01"
            value={ cardAttr1 }
            callback={ onInputChange }
          />
          <Input
            type="number"
            name="cardAttr2"
            testid="attr2-input"
            label="Attr02"
            value={ cardAttr2 }
            callback={ onInputChange }
          />
          <Input
            type="number"
            name="cardAttr3"
            testid="attr3-input"
            label="Attr03"
            value={ cardAttr3 }
            callback={ onInputChange }
          />
          <Input
            type="text"
            name="cardImage"
            testid="image-input"
            label="Imagem"
            value={ cardImage }
            callback={ onInputChange }
          />
          <label htmlFor="cardRare">
            Raridade
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              label=" "
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          {hasTrunfo
            && <p>Você já tem um Super Trunfo em seu baralho</p>}
          {!hasTrunfo
            && <Input
              type="checkbox"
              name="cardTrunfo"
              testid="trunfo-input"
              label="Super Trybe Trunfo"
              value={ cardTrunfo }
              callback={ onInputChange }
            />}
          <button
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};

export default Form;
