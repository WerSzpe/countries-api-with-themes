import React from 'react'

export default function CountryCard(props) {
  return (
    <div>

        <div>{props.flag}</div>
        <div>{props.name}</div>
        <div>Population: {props.population}</div>
        <div>Region: {props.region}</div>
        <div>Capital: {props.capital}</div>

    </div>
  )
}
