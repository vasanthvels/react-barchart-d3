import React, {Component} from 'react'
import D3Chart from './chart'

export default class chartWrapper extends Component {
    componentDidMount(){
        new D3Chart(this.refs.chart)
    }

    render() {
        return <div ref="chart"></div>
    }
}
