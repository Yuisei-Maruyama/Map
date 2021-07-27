import React from "react"

type Props = {
  icon?: React.ReactNode;
}

const Icon : React.FC<Props> = ({ icon }) => {
  return (
    <>{icon}</>
  )
}

export default Icon
