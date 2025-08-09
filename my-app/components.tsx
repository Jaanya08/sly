import React from 'react';
import { NodeType } from '../types/NodeType.ts';

interface Props {
  node: NodeType;
}

const NodeComponent: React.FC<Props> = ({ node }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: node.y,
        left: node.x,
        width: '80px',
        height: '40px',
        backgroundColor: '#2563eb',
        color: 'white',
        borderRadius: '8px',
        textAlign: 'center',
        lineHeight: '40px',
        fontSize: '14px',
        fontWeight: 'bold',
      }}
    >
      {node.label}
    </div>
  );
};

export default NodeComponent;
