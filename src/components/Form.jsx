import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Adicoinar Nova Carta</h1>
        <form>
          <Input
            type="text"
            name="cardName"
            testid="name-input"
            label="Nome"
          />
          <Input
            type="textarea"
            name="cardDescription"
            testid="description-input"
            label="Descrição"
          />
          <Input
            type="number"
            name="cardAttr1"
            testid="attr1-input"
            label="Attr01"
          />
          <Input
            type="number"
            name="cardAttr2"
            testid="attr2-input"
            label="Attr02"
          />
          <Input
            type="number"
            name="cardAttr3"
            testid="attr3-input"
            label="Attr03"
          />
          <Input
            type="text"
            name="cardImage"
            testid="image-input"
            label="Imagem"
          />
          <label htmlFor="cardRare">
            Raridade
            <select
              name="cardRare"
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <Input
            type="checkbox"
            name="cardTrunfo"
            testid="trunfo-input"
            label="Super Trybe Trunfo"
          />
          <button
            data-testid="save-button"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
