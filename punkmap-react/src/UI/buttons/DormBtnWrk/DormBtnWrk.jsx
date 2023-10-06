import React from 'react'
import classes from './DormBtnWrk.module.css'

const DormBtnWrk = ({children, ...props}) => {
  return (
    <button {...props} className={classes.dormBtnWrk}>
      {children}
    </button>
  )
}

export default DormBtnWrk