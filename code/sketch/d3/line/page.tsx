'use client'
import React, { useEffect } from 'react';
import * as d3 from 'd3';

export default function Line(){
    
    let dataset = [1,2,3,4,5,6,7]
    let reds = ['#fcbba1', '#fc9272','#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d']

    useEffect(() => {
      async function getData(){
        let [tweets, movies] = await Promise.all([ d3.json("/data/tweets.json"), d3.csv("/data/movies.csv") ])
        console.log(tweets, movies)
      }
      
      getData()
  
      var test = d3.select("#chart svg").data(dataset).enter().append("circle").attr('r', 30)
      console.log(test)
      
      const colorScale = d3.scaleQuantize([1,7], reds)
  
      const xScale = d3.scaleLinear([1,7],[10,800])
      const yScale = d3.scaleLinear([0,10],[300,100])
  
      const xAxis = d3.axisTop(xScale).ticks(14).tickSize(300)
      d3.select("#chart svg").append("g").call(xAxis).attr("transform", "translate(0,400)")
      
  
      d3.select("#chart svg")
        .style('width', '100%')
        .style('height', '500px')
        .append('g')
        .selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
        .attr('cx', function(d,i){return xScale(d)})
        .attr('cy', function(d,i){console.log(d,yScale(d));return yScale(d)})
        .attr('r', 5)
        .style('fill', function(d){return colorScale(d)})
  
      return () =>{
        //d3.selectAll('g').remove()
      }
      }, []);

      return (
        <div id="chart">
            <svg>
                
            </svg>
        </div>
      )
}
