import * as React from "react"

const SvgComponent = ({ width, height, color,  ...props }) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props} >
    <path
      d="M17.414 18.548a2.099 2.099 0 0 0-2.828 0 1.787 1.787 0 0 0 0 2.646L24 30l9.414-8.806a1.787 1.787 0 0 0 0-2.646 2.099 2.099 0 0 0-2.828 0L24 24.708l-6.586-6.16Z"
      fillRule="nonzero"
      fill={color}
    />
  </svg>
)

export default SvgComponent
