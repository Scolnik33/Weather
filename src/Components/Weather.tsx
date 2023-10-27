import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/style.css";
import { useNavigate } from 'react-router-dom'
import Input from "./Input/Input";
import WeatherInfo from "./WeatherInfo";
import { storeHandler } from '../types/types'
import Loader from "./Loader/Loader";

const Weather: React.FC = () => {
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [rightInput, setRightInput] = useState(true)
  const navigate = useNavigate()

  const [store, setStore] = useState<storeHandler>({
    city: '',
    conditions: '',
    feelslike: 0,
    pressure: 0,
    snow: 0,
    temp: 0,
    windspeed: 0 
  })

  useEffect(() => {
    if (search == '') {
      return navigate('/')
    }
  }, [])

  const handleSearch = () => {
    getWeather(search)
    setSearch('')
  }

  const handleEnter = (e: any) => {
    if (e.key == 'Enter' && search != '') {
      handleSearch()
    }
  }

  const getWeather = async (city: string) => {
    try {
      setIsLoading(true)
      const {data} = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=AZAHBBKWRD56C2EL7SRGV7LX4&contentType=json`
      );
  
      setStore({
        city,
        conditions: data.currentConditions.conditions,
        feelslike: data.currentConditions.feelslike,
        pressure: data.currentConditions.pressure,
        snow: data.currentConditions.snow,
        temp: data.currentConditions.temp,
        windspeed: data.currentConditions.windspeed 
      })
  
      setIsOpen(true)
  
      return navigate(`/${city}`)
    } catch (err) {
      setRightInput(false)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="my_container">
      <div className={isOpen ? "form_weather_open" : "form_weather_close"}>
        <Input rightInput={rightInput} setRightInput={setRightInput} search={search} setSearch={setSearch} handleSearch={handleSearch} handleEnter={handleEnter}/>
        {
          (isLoading && isOpen) ? (
            <Loader />
          ) : (
            <WeatherInfo store={store}/>
          )
        }
      </div>
    </div>
  );
};

export default Weather;
