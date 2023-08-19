import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
      removeButton,
      deleteCard,
    } = this.props;

    return (
      <div className="card-display">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p
          data-testid="description-card"
          className="cardDescription"
        >
          { cardDescription }
        </p>
        <p data-testid="attr1-card" className="attr">{ cardAttr1 }</p>
        <p data-testid="attr2-card" className="attr">{ cardAttr2 }</p>
        <p data-testid="attr3-card" className="attr">{ cardAttr3 }</p>
        <p data-testid="rare-card" className="rareCard">{ cardRare }</p>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        { removeButton
          && (
            <button
              data-testid="delete-button"
              className="buttonDelete"
              type="submit"
              name={ cardName }
              onClick={ deleteCard }
            >
              Excluir
            </button>
          )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  removeButton: PropTypes.bool,
  deleteCard: PropTypes.func,
};

Card.defaultProps = {
  removeButton: false,
  deleteCard: '',
};

export default Card;
