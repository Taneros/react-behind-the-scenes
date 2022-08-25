import React, { memo } from 'react'

const DemoOutput = (props) => {
  console.log(`demo paragraph`)

  return <p>{props.show ? 'New p' : ''}</p>
}

export default memo(DemoOutput)
