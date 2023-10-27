import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { storeHandler } from '../types/types'
import { Row, Col } from 'react-bootstrap';

type WeatherInfoProps = {
  store: storeHandler
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ store }) => {
  let weather: string = ''

  switch (store.conditions) {
    case 'Clear':
      weather = 'Images/clear.png'
      break;
    case 'Overcast':
      weather = 'Images/cloud.png'
      break;
    case 'Rain':
    case 'Rain, Partially cloudy':
    case 'Rain, Overcast':
      weather = 'Images/storm.png'
      break;
    case 'Partially cloudy':
      weather = 'Images/cloudy.png'
      break;
    case 'Snow':
    case 'Snow, Partially cloudy':
    case 'Snow, Overcast':
      weather = 'Images/snowy.png'
      break;
  }

  return (
    <div>
        <Row  className='subinfo'>
          <Col xs={4}>
            <div className='city'>{store.city.toUpperCase()}</div>
            <div className='conditions'>{store.conditions}</div>
          </Col>
          <Col xs={8} text>
            <div className='icon'>
              <img className="icon_image" src={weather} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className='col_info'>
              <img className='mini_image' src="Images/temp.png" alt="" />
              <div className='temp'>Temp: <span className='number'>{store.temp}°C</span></div>
            </div>
            <div className='col_info'>
              <img className="mini_image" src="Images/wind.png" alt="" />
              <div className='windspeed'>Windspeed: <span className='number'>{store.windspeed} km/h</span></div>
            </div>
          </Col>
          <Col md={6}>
            <div className='col_info'>
              <img className='mini_image' src="Images/mood.png" alt="" />
              <div className='feelslike'>Feelslike: <span className='number'>{store.feelslike}°C</span></div>
            </div>
            <div className='col_info'>
              <img className='mini_image' src="Images/snow.png" alt="" />
              <div className='snow'>Show: <span className='number'>{store.snow} mm</span></div>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default WeatherInfo