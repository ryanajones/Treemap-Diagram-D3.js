/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Pre define necessary variables

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

const fader = (colors) => d3.interpolateRgb(colors, '#fff')(0.2);
console.log(fader);
/* const color = d3.scaleOrdinal(d3.schemeCategory20.map(fader));
 */
const treemap = d3.treemap().size([w, h]);

// Define json call

d3.json(
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json'
).then((data) => {
  const root = d3.hierarchy(data).sum((d) => d.value);
  treemap(root);

  const cell = svg.selectAll('g').data(root.leaves()).enter().append('g');

  const tile = cell
    .append('rect')
    .attr('width', (d) => d.x1 - d.x0)
    .attr('height', (d) => d.y1 - d.y0);
  /*     .attr('fill', (d3) => color(d.data.category));
   */
});
