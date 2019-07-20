import React,{Component} from 'react'
import PropTypes from 'prop-types';


export default class ModelDetails extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        origin: PropTypes.string.isRequired,
    };
    
    render(){
        return <div>
                <p>{this.props.name}</p>
                <p>{this.props.manufacturer}</p>
                <p>{this.props.year}</p>
                <p>{this.props.origin}</p>
              </div>
    }
}

