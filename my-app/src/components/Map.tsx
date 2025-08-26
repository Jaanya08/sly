import React from 'react';
import { nodes } from '../nodes';

const Map: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <img src="/map.jpg" alt="Scotland Yard Map" className="w-full h-auto" />

      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center"
          style={{
            left: `${node.x * 100}%`,
            top: `${node.y * 100}%`,
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
          }}
          title={`Node ${node.id}`}
        >
          {node.id}
        </div>
      ))}
    </div>
  );
};

export default Map;
// import React from "react";
// import { nodes } from "../nodes";

// const Map: React.FC = () => {
//   return (
//     <div className="relative w-full max-w-5xl mx-auto">
//       {/* ✅ Correct way to load from public/ */}
//       <img
//         src="/map.jpg"
//         alt="Scotland Yard Map"
//         className="w-full h-auto"
//       />

//       {/* ✅ Render nodes */}
//       {nodes.map((node) => (
//         <div
//           key={node.id}
//           className="absolute w-5 h-5 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center shadow-lg"
//           style={{
//             left: `${node.x * 100}%`,  // works if x,y are between 0 and 1
//             top: `${node.y * 100}%`,
//             transform: "translate(-50%, -50%)",
//           }}
//           title={`Node ${node.id}`}
//         >
//           {node.id}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Map;
