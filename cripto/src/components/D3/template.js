import React, { Component } from 'react';
import * as d3 from 'd3';

class CongressionalDistricts extends Component {
    state = {
        usData: null,
        usCongress: null
    };

    componentWillMount() {
        const data = [
            {month: "Q1-2016", apples: 3840, bananas: 1920, cherries: -1960, dates: -400},
            {month: "Q2-2016", apples: 1600, bananas: 1440, cherries: -960, dates: -400},
            {month: "Q3-2016", apples:  640, bananas:  960, cherries: -640, dates: -600},
            {month: "Q4-2016", apples:  320, bananas:  480, cherries: -640, dates: -400}
        ];
        this.setState({
            usData: data
        });
    }

    componentDidUpdate() {


        const series = d3.stack()
            .keys(["apples", "bananas", "cherries", "dates"])
            .offset(d3.stackOffsetDiverging)
            (this.state.data);

        const svg = d3.select("svg"),
            margin = {top: 20, right: 30, bottom: 30, left: 60},
            width = +svg.attr("width"),
            height = +svg.attr("height");

        const x = d3.scaleBand()
            .domain(this.state.data.map(function(d) { return d.month; }))
            .rangeRound([margin.left, width - margin.right])
            .padding(0.1);

        var y = d3.scaleLinear()
            .domain([d3.min(series, this.stackMin), d3.max(series, this.stackMax)])
            .rangeRound([height - margin.bottom, margin.top]);

        const z = d3.scaleOrdinal(d3.schemeCategory10);
        svg.append("g")
            .selectAll("g")
            .data(series)
            .enter().append("g")
            .attr("fill", function(d) { return z(d.key); })
            .selectAll("rect")
            .data(function(d) { return d; })
            .enter().append("rect")
            .attr("width", x.bandwidth)
            .attr("x", function(d) { return x(d.data.month); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("height", function(d) { return y(d[0]) - y(d[1]); })

        svg.append("g")
            .attr("transform", "translate(0," + y(0) + ")")
            .call(d3.axisBottom(x));

        svg.append("g")
            .attr("transform", "translate(" + margin.left + ",0)")
            .call(d3.axisLeft(y));
    }
    stackMin(serie) {
        return d3.min(serie, function(d) { return d[0]; });
    }

    stackMax(serie) {
        return d3.max(serie, function(d) { return d[1]; });
    }

    render() {
        const { usData, usCongress } = this.state;

        if (!usData || !usCongress) {
            return null;
        }

        return <g ref="anchor" />;
    }
}

export default CongressionalDistricts;