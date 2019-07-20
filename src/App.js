import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import {addComputer} from './actions/computers'
import ModelDetails from './components/ModelDetails';

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {value: ''};
  }
  updateSelection=(event)=>{
    this.setState({value: event.target.value});
    console.log('STATE:', this.state)
  }
  handleAddComputer =()=>{
    const computer = data.find((item) => {
      return item.name === this.state.value;
    });

    if (computer) {
      this.props.addComputer(computer);
    }
    else {
      alert('Select computer')
    }
    
  }
  render(){
    console.log('SELECTETD:', this.props.selectedComputers)
    return (
      <div className="App">
        <main>
          {this.props.selectedComputers.map((computer)=>{
              return <ModelDetails key = {computer.name} name ={computer.name} manufacturer={computer.manufacturer} year={computer.year} origin={computer.origin}/>
          })}
            <select value={this.state.value} onChange={this.updateSelection}>
              <option value=''>-- pick a model --</option>
              {data.map((item)=>{
                return <option key ={item.name} value={item.name}>{item.name} ({item.year})</option>
              })}
            </select>
            <button onClick= {this.handleAddComputer}>add</button>
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { selectedComputers: state.computers }
}

export default connect(mapStateToProps, { addComputer })(App)
