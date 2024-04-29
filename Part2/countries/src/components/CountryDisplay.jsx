const CountryDisplay = ({ country }) => {
    const { name, region, capital, area, languages, flags } = country
  
    return (
      <div>
        <h2>{name.common}</h2>
        <p>Region: {region}</p>
        <p>Capital: {capital[0]}</p>
        <p>Area: {area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(languages).map(language => 
          <li key={language}>{language}</li>
          )}
        </ul>
        <img src={flags.png} alt={`${name.common}'s flag`} width="100" />
      </div>
    )
}

export default CountryDisplay
