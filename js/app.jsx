var app = app || {};

(function () {
  'use strict';

  class ModelList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        models: props.models
      };
    }

    render() {
      const listModels = this.state.models.map((model) =>
        <li>{model}</li>
      );
      return (
        <ul>{listModels}</ul>
      );
    }
  }

  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        models: ['one', 'two'],
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      alert('A name was submitted: ' + this.state.value);
      
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <ModelList models={this.state.models} />
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  } // -- class Toggle


  ReactDOM.render((
      <div>
        <h1>Hello, world</h1>
        <Toggle />
        <NameForm />
      </div>
    ),
    document.getElementById('root')
  );

})();
