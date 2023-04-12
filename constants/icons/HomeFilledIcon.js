import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function HomeFilledIcon({ color }) {
  return (
    <Svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill={color || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M19.04 4.82L13.28 0.789999C11.71 -0.310001 9.29999 -0.250001 7.78999 0.919999L2.77999 4.83C1.77999 5.61 0.98999 7.21 0.98999 8.47V15.37C0.98999 17.92 3.05999 20 5.60999 20H16.39C18.94 20 21.01 17.93 21.01 15.38V8.6C21.01 7.25 20.14 5.59 19.04 4.82ZM11.75 16C11.75 16.41 11.41 16.75 11 16.75C10.59 16.75 10.25 16.41 10.25 16V13C10.25 12.59 10.59 12.25 11 12.25C11.41 12.25 11.75 12.59 11.75 13V16Z"
        fill={color || "none"}
      />
    </Svg>
  );
}
