function createArrayOfArrays(countries) {
    return countries.map(country => [ 
      country.charAt(0) + country.slice(1).toLowerCase(),
      country.slice(0, 3),
      country.length
    ]);
  }
  
  const countries = [   
    'ALBANIA',   
    'BOLIVIA',   
    'CANADA',   
    'DENMARK',   
    'ETHIOPIA',   
    'FINLAND',   
    'GERMANY',   
    'HUNGARY',   
    'IRELAND',   
    'JAPAN',   
    'KENYA'
  ];
  
  const countriesWithData = createArrayOfArrays(countries);
  
  console.log(countriesWithData);

