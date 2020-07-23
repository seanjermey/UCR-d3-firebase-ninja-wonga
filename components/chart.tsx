import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import d3Tip from "d3-tip";
import { legendColor } from "d3-svg-legend";

interface Value {
  name: string;
  cost: number;
}

interface ChartProps {
  data: Value[];
  dims?: { height: number; width: number; radius: number };
  onSliceClick: (data) => Promise<any>;
}

const Chart = ({
  data,
  dims = { height: 300, width: 300, radius: 150 },
  onSliceClick,
}: ChartProps) => {
  const graphRef = useRef();
  const legendRef = useRef();

  const cent = { x: dims.width / 2 + 5, y: dims.height / 2 + 5 };
  const color = d3.scaleOrdinal(d3["schemeSet3"]);
  const legend = legendColor().shape("circle").shapePadding(10).scale(color);

  const pie = d3
    .pie<Value>()
    .sort(null)
    .value((d) => d.cost);

  const arcPath = d3
    .arc<d3.PieArcDatum<Value>>()
    .outerRadius(dims.radius)
    .innerRadius(dims.radius / 2);

  // arc tweens
  const arcTweens = {
    enter(d) {
      const i = d3.interpolate(d.endAngle, d.startAngle);

      return function (t) {
        d.startAngle = i(t);

        return arcPath(d);
      };
    },
    update(d) {
      const i = d3.interpolate(this._current, d);

      this._current = i(1);

      return function (t) {
        return arcPath(i(t));
      };
    },
    exit(d) {
      const i = d3.interpolate(d.startAngle, d.endAngle);

      return function (t) {
        d.startAngle = i(t);

        return arcPath(d);
      };
    },
  };

  // update dom
  const update = (data) => {
    const graph = d3.select(graphRef.current);
    const paths = graph.selectAll("path").data(pie(data));

    // @ts-ignore
    const tooltip = d3Tip()
      .attr("class", "tip card")
      .html((d) => {
        return `<div style="padding: 10px; background: #333; color: #fff">
              <div class="name">${d.data.name}</div>
              <div class="cost">${d.data.cost}</div>
              <div class="delete" style="color: hotpink; font-size: .8em">Click slice to delete</div>
            </div>`;
      });

    // attach tooltip
    graph.call(tooltip);

    // configure colors
    color.domain(data.map((d) => d.name));

    // attach legend
    d3.select(legendRef.current)
      .call(legend)
      .selectAll("text")
      .attr("fill", "#fff");

    // handle exit dom paths
    paths
      .exit()
      .transition()
      .duration(750)
      .attrTween("d", arcTweens.exit)
      .remove();

    // handle current dom paths
    paths
      .attr("d", arcPath)
      .transition()
      .duration(750)
      .attrTween("d", arcTweens.update);

    // handle enter dom paths
    paths
      .enter()
      .append("path")
      .attr("class", "arc")
      .attr("stroke", "#fff")
      .attr("stroke-width", 3)
      .attr("fill", (d) => color(d.data.name))
      .each(function (d) {
        this["_current"] = d;
      })
      .transition()
      .duration(750)
      .attrTween("d", arcTweens.enter);

    // add events
    graph
      .selectAll("path")
      .on("mouseover", (d, i, n) => {
        tooltip.show(d, n[i]);

        d3.select(n[i])
          .transition("changeSliceFill")
          .duration(300)
          .attr("fill", "#fff");
      })
      .on("mouseout", (d: d3.PieArcDatum<Value>, i, n) => {
        tooltip.hide();

        d3.select(n[i])
          .transition("changeSliceFill")
          .duration(300)
          .attr("fill", color(d.data.name));
      })
      .on("click", (d: d3.PieArcDatum<Value>) => {
        tooltip.hide();

        onSliceClick(d.data);
      });
  };

  useEffect(() => {
    update(data);
  }, [data]);

  return (
    <svg width={dims.width + 150} height={dims.height + 150}>
      <g ref={graphRef} transform={`translate(${cent.x}, ${cent.y})`} />
      <g ref={legendRef} transform={`translate(${dims.width + 40}, 10)`} />
    </svg>
  );
};

export default Chart;
