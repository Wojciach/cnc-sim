import { chainOfCoordinates } from "./chainOfCoordinates.js";
import type { Coordinate } from "./modals.js";
import type { fullCoordInfo } from "./chainOfCoordinates.js";
import { ExtractRadius } from "./extractRadius.js";
import { checkIfRadNotToSmall } from "./checkIfRadNotToSmall.js";

function addPathToExistingSVG(
  svgId: string,
  pathData: string,
  stroke: string = "black",
  strokeWidth: number = 1,
  dashed: string = "none",
  fill: string = "none"
): SVGPathElement | null {
  // Get the existing SVG element
  const svg = document.getElementById("display-svg");
  
  if (!svg) {
    console.error(`SVG element with id "${svgId}" not found!`);
    return null;
  }

    // Create and add the path
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathData);
  path.setAttribute("stroke", stroke);
  path.setAttribute("stroke-width", strokeWidth.toString());
  path.setAttribute("stroke-width", strokeWidth.toString());
  path.setAttribute("stroke-dasharray", dashed);
  path.setAttribute("fill", 'none');
  
  svg.appendChild(path);
  console.log("Path added to SVG:", path);
  return path;
}

export function updateChainOfCoordinatesDispay() {
    const displaySvg =  document.getElementById("display-svg");
    
    chainOfCoordinates.forEach((coordinate, index) => {
        let previousCoord = chainOfCoordinates[index -1]?.coord || {x: 0, y:0, z:0};
        //let radius = coordinate.ijkr.r;
        
        // let radius = ExtractRadius.getRadius(coordinate.ijkr);
        // const radOK: boolean = checkIfRadNotToSmall(previousCoord, coordinate.coord, radius);
       // console.log(" - R A D I U S  F O R  C U R R E N T  A R C : ", radius);

        let cw_ccw = (coordinate.g === 'G02') ? 1 : (coordinate.g === 'G03') ? 0 : null;

        let pathData = `M ${previousCoord.x +200},${-previousCoord.y +200}`; // Reset path data

        if (( coordinate.g === 'G02' || coordinate.g === 'G03')) {
          let radius = ExtractRadius.getRadius(coordinate.ijkr);
          pathData += ` A${radius},${radius} 0 0 ${cw_ccw} ${coordinate.coord.x +200},${-coordinate.coord.y +200} `;
        } else if (coordinate.g === 'G01' || coordinate.g === 'G00') {
          pathData += ` L${coordinate.coord.x +200},${-coordinate.coord.y +200} `;
        } else {
          console.log(" - M L A problem - ");
          return; //skip non-movement coordinates
        }

        const color = coordinate.g === 'G00' ? 'lightgreen' : 'red';
        const dashed = coordinate.g === 'G00' ? '5,5' : 'none';
        const pathName =  "path-" + (index +1);
        addPathToExistingSVG(pathName, pathData, color, 2, dashed, "none");
    })
}






