class Gif extends React.Component {
  render() {
    return (
      <div>
        <img className="image" src={this.props.gif} />
      </div>
    ) 
  }
}

class RandomButton extends React.Component {
  
  handleOnClick(){
    return this.props.onClickRandomButton();
  }
  render() {
    return (
      <button className="random-button" onClick={this.handleOnClick.bind(this)}> Random Gif </button>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        gif: '',
        loading: true
    };
  }
 
  handleClickRandomButton(){
    fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .then(res => res.json())
      .then(json => {
        this.setState({
          gif: json.data.image_original_url
        })
      })
  }
  
  componentDidMount(){
    this.handleClickRandomButton()
  }
  
  
  render() {
    return (
      <div>
        <Gif gif={this.state.gif} />
        <RandomButton onClickRandomButton={this.handleClickRandomButton.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)