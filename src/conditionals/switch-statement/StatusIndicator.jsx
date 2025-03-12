import React from 'react'

const StatusIndicator = ({status}) => {
    const getStatusColor = () => {
        switch(status){
            case 'success':
                return 'green';
            case 'warning':
                return 'yellow';
            case 'error':
                return 'red';
            default:
                return 'grey';
        }
    }
  return (
    <div style={{backgroundColor: getStatusColor() }}> Status: {status} </div>
  )
}

export default StatusIndicator