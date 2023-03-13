// function createArrayOfArrays(countries) {
//     return countries.map(country => [ 
//       country.charAt(0) + country.slice(1).toLowerCase(),
//       country.slice(0, 3),
//       country.length
//     ]);
//   }
  
//   const countries = [   
//     'ALBANIA',   
//     'BOLIVIA',   
//     'CANADA',   
//     'DENMARK',   
//     'ETHIOPIA',   
//     'FINLAND',   
//     'GERMANY',   
//     'HUNGARY',   
//     'IRELAND',   
//     'JAPAN',   
//     'KENYA'
//   ];
  
//   const countriesWithData = createArrayOfArrays(countries);
  
//   console.log(countriesWithData);


function createArrayOfArrays(countries) {
let newarr =[];
for(let i=0; i<countries.length; i++)
{
    let nestedarr =[ 
        countries[i].charAt(0)+countries[i].slice(1).toLowerCase(),
        countries[i].slice(0,3),
        countries[i].length
];
newarr.push(nestedarr);
}
return newarr;
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

