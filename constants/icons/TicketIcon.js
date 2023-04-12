import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function TicketIcon({ color }) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M19.5005 12.5C19.5005 11.12 20.6205 10 22.0005 10V9C22.0005 5 21.0005 4 17.0005 4H7.00049C3.00049 4 2.00049 5 2.00049 9V9.5C3.38049 9.5 4.50049 10.62 4.50049 12C4.50049 13.38 3.38049 14.5 2.00049 14.5V15C2.00049 19 3.00049 20 7.00049 20H17.0005C21.0005 20 22.0005 19 22.0005 15C20.6205 15 19.5005 13.88 19.5005 12.5Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.0005 4L10.0005 20"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="5 5"
      />
    </Svg>
  );
}
