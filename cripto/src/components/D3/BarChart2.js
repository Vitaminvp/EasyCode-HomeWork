import React, {Component} from 'react';
import * as d3 from "d3";


class BarChart2 extends Component {
    constructor(){
        super();
    }
    componentDidMount() {
    }
    render(){
        const data = this.props.data.map(item => (item.count/ 1000000000).toFixed(5)) || [];

        // const data = [12, 5, 6, 6, 9, 10];
        console.log("this.props.data", data);
        const w=800, h=400;
        const svg = d3.select("div").select("div").select("div")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("margin-left", 100)
            .style("margin-bottom", 100);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d*10 )
            .attr("fill", "green");

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => (d*1000000000).toFixed(0))
            .attr("fill", "gray")
            .attr("x", (d, i) => i * 70 )
            .attr("y", (d, i) => h - (10 * d) - 3);

        return <div id={"#w" + this.props.id}></div>
    }
}

export default BarChart2;