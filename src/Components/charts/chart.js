import * as d3 from 'd3';

const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";
const margin = {top: 10, right: 10, bottom: 50, left: 120   }
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

export default class D3Chart {
    constructor(element){
        const visualization = this
        visualization.svg = d3.select(element)
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`)

            visualization.svg.append("text")
                .attr("x", width / 2)
                .attr("y", height + 50  )
                .attr("text-anchor", "middle")
                .text("wordld's largest men")

            visualization.svg.append("text")
                .attr("x", -(height / 2))
                .attr("y", -50)
                .attr("text-anchor", "middle")
                .text("Height in cms")
                .attr("transform", "rotate(-90)")

            visualization.xAxisGroup = visualization.svg.append("g")
                .attr("transform", `translate(0, ${height})`)

            visualization.yAxisGroup = visualization.svg.append("g")

        d3.json(url).then(data => {
            visualization.data = data
            d3.interval(() => {
                visualization.update()
            }, 1000)
        })
    }

    update(){
        const visualization = this;
        const x = d3.scaleBand()
            .domain(visualization.data.map(d => d.name)) 
            .range([0, width])
            .padding(0.4)

        const y = d3.scaleLinear()
            .domain([d3.min(visualization.data, d => d.height * 0.95), d3.max(visualization.data, d => d.height)])
            .range([height, 0])

        const xAxis = d3.axisBottom(x)
            visualization.xAxisGroup.call(xAxis)

        const yAxis = d3.axisLeft(y)
            visualization.yAxisGroup.call(yAxis)

        //Data Join
        const rects = visualization.svg.selectAll("rect")
        .data(visualization.data)
        
        //Exit
        rects.exit().remove()

        //Update
        rects
            .attr("x", d => x(d.name))
            .attr("y", d => y(d.height))
            .attr("width", x.bandwidth)
            .attr("height", d => height -  y(d.height))

        //Enter
        rects.enter().append("rect")
            .attr("x", d => x(d.name))
            .attr("y", d => y(d.height))
            .attr("width", x.bandwidth)
            .attr("height", d => height -  y(d.height))
            .attr("fill", "grey")
    }
}
