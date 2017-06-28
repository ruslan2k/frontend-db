var app = app || {};

(function () {
  'use strict';

  function store (namespace, data) {
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data));
    }
    
    var store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
  }

  class ModelList extends React.Component {
    constructor(props) {
      super(props);
      this.handleModelAdd = this.handleModelAdd.bind(this);
      this.state = {models: props.models};
    }

    handleModelAdd(modelName) {
      var models = this.state.models;
      models.push(modelName);
      this.setState({models: models});
    }

    render() {
      const models = this.state.models;
      const listModes = models.map((model) =>
        <li>{model}</li>
      );
      return (
        <p>
          <ul>{listModes}</ul>
          <ModelForm onModelAdd={this.handleModelAdd} />
        </p>
      );
    }
  }

  class ModelForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.onModelAdd(this.state.value);
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  const models = ['First', 'Second', 'Third'];

  ReactDOM.render((
      <div>
        <ModelList models={models} />
      </div>
    ),
    document.getElementById('root')
  );

})();
