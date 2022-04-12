import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <Form>
        <Input>
          type="text"
          name="cardName"
          data-testid="name-input"
          labe="Nome"
        </Input>
      </Form>
    )
  }
 
}
export default Form;
