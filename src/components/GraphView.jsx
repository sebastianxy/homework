
import React from "react";
import { Graph as D3Graph } from "react-d3-graph";


const config = {
  nodeHighlightBehavior: true,
  node: {
    labelProperty: "label",
    fontSize: 12,
    highlightStrokeColor: "blue",
    size: 300,
  },
  link: {
    highlightColor: "lightblue"
  },
  directed: true,
  panAndZoom: true,
  height: 600,
  width: 900
};

export default function GraphView({ data, onClickNode }) {
  const graphData = {
    nodes: data.nodes.map(n => ({
      id: n.id,
      label: n.label,
      color: n.type === "city" ? "#ffcc00" : "#7fb3ff",
      size: n.type === "city" ? 600 : 400
    })),
    links: data.links
  };

  return (
    <div style={{ overflow: "auto" }}>
      <D3Graph
        id="graph-id"
        data={graphData}
        config={{
          ...config,
          node: {
            ...config.node,
            color: "lightgray",
          }
        }}
        onClickNode={onClickNode}
      />
    </div>
  );
}
