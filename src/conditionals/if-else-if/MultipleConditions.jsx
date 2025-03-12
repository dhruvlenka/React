import React from 'react'

const MultipleConditions = ({temperature}) => {
    const getWeatherMessage = () => {
        if(temperature > 30){
            return "It's too hot outside."
        }
        if(temperature > 15){
            return "It's pleasent outside."
        }
        if(temperature > 10){
            return "It's cold outside, carry your jackets."
        }
        if(temperature < 5){
            return "Too cold outside, wear warmers, jackets, shoes and socks."
        }
    }
  return (
    <div>
        <p> Temperature {temperature}°C</p>
        <p> {getWeatherMessage()}</p>
    </div>
  )
}

export default MultipleConditions