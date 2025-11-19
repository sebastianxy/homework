import React from "react";
import { Graph as D3Graph } from "react-d3-graph";

const config = {
  height: 600,
  width: 900,
  nodeHighlightBehavior: true,
  directed: true,
  panAndZoom: true,

  staticGraph: false,
  staticGraphWithDragAndDrop: false,
  automaticRearrangeAfterDropNode: true,

  d3: {
    gravity: -200,
    linkLength: 150,
    alphaTarget: 0.05,
  },
  
  node: {
    labelProperty: "label",
    size: 400
  }
};


export default function GraphView({ data, onClickNode }) {
  const graphData = {
    nodes: data.nodes.map(n => ({
      id: n.id,
      label: n.label,
      color: n.type === "city" ? "#ffcc00" : "#00ff22ff",
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
