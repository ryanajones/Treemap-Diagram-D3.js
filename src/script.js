/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const w = 1200;
const h = 770;
const padding = 60;

const tooltip = d3
  .select('body')
  .append('div')
  .attr('id', 'tooltip')
  .style('opacity', 0);

const svg = d3
  .select('main')
  .append('svg')
  .attr('width', w)
  .attr('height', h)
  .style('background-color', 'rgb(0, 0, 0)')
  .style('border-bottom-right-radius', '10px')
  .style('border-bottom-left-radius', '10px');

// Define json call

d3.json();
