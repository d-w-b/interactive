import React from 'react'
import { useEffect } from 'react';
import * as d3 from 'd3'

// DOMTree Object 를 받아서 Tree를 그려줍니다.
export default function DOMTree() { 
  
  // d3.js 는 데이터를 전처리한 후
  // 전처리된 데이터를 바탕으로 레이아웃을 계산합니다.
  // 계산된 레이아웃을 바탕으로 svg 를 그립니다.

  useEffect(()=>{
    // 데이터 전처리
    const root = d3.hierarchy(document.children[0]);
    const width = 928;
    const dx = 15;
    const dy = width / (root.height + 1);
  
    const tree = d3.tree().nodeSize([dx, dy]);
    root.sort((a, b) => d3.ascending(a.data.name, b.data.name));
    // 레이아웃 계산
    tree(root);
  
    // 최대, 최솟값 찾아서 범위 지정
    let x0 = Infinity;
    let x1 = -x0;
    root.each(d => {
      if (d.x > x1) x1 = d.x;
      if (d.x < x0) x0 = d.x;
    });
  
    const height = x1 - x0 + dx * 2;
    
    // svg 그리기
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-dy / 3, x0 - dx, width, height])
        .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");
    
    // edge
    const link = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#fabbab")
        .attr("stroke-opacity", 0.7)
        .attr("stroke-width", 1.5)
        .selectAll()
        .data(root.links())
        .join("path")
        .attr("d", d3.linkHorizontal()
            .x(d => d.y)
            .y(d => d.x));

    // vertex
    const node = svg.append("g")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
        .selectAll()
        .data(root.descendants())
        .join("g")
        .attr('cursor', 'pointer')
        .attr("transform", d => `translate(${d.y},${d.x})`)
  
    node.append("circle")
        .attr("fill", d => d.children ? "red" : "#bbb")
        .attr("r", 2.5);
  
    node.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.children ? -6 : 6)
        .attr("text-anchor", d => d.children ? "end" : "start")
        .text(d => `${d.data.nodeName}${d.data.id? '#'+d.data.id:''}${d.data.class? '.'+d.data.class:''}`)
        .attr("stroke", "#fff")
        .attr("paint-order", "stroke");
    
    document.getElementById('chart').append(svg.node())
  
  },[])

  return (
    // svg container
    <div id="chart"></div>
  )
}
