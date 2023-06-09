import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function MessageIcon({ color }) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H14"
        stroke={color ? "white" : "#1E1E1E"}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56"
        stroke={color ? "white" : "#1E1E1E"}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
        stroke={color ? "white" : "#1E1E1E"}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
