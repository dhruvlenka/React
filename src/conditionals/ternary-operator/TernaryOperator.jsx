import React from 'react'
import MadeGoal from '../if-else/MadeGoal';
import MissedGoal from '../if-else/MissedGoal';

const TernaryOperator = (props) => {
    const isGoal = props.isGoal;
  return (
    <div>
        {
            isGoal? <MadeGoal/> : <MissedGoal/>
        }
    </div>
  )
}

export default TernaryOperator