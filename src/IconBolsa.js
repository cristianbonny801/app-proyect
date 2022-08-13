import * as React from "react"

const IconBolsa = ({...props}) => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke={props.color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.141 8a3 3 0 0 0-2.937 2.39L4 16.187A4 4 0 0 0 7.916 21h8.168A4 4 0 0 0 20 16.187l-1.204-5.797A3 3 0 0 0 15.86 8H8.141ZM15 6a3 3 0 1 0-6 0" />
  </svg>
)

export default IconBolsa