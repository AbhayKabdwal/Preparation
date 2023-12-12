const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


// Exercise : Level 1

// 1
for (let i = 0; i < 11; i++) {
    console.log(i);
}
console.log("\n")

let i = 0
while (i<=10) {
    console.log(i);
    i++
}
console.log("\n")

i = 0
do {
    console.log(i);
    i++
} while (i<=10);
console.log("\n")

// 2
for (let j = 10; j >= 0; j--) {
    console.log(j);
}
console.log("\n")

let j = 10
while (j >= 0) {
    console.log(j);
    j--
}
console.log("\n")

j = 10
do {
    console.log(j);
    j--
} while (j>=0);

// 3
// This ques is similar as above just define n before using loop
console.log("\n")

// 4
for(i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}
console.log("\n")

// 5
for (let k = 0; k <= 10; k++) {
    console.log(k," x ",k," = ",k*k);
}
console.log("\n")

// 6
console.log("i\ti^2\ti^3");
for(i = 0; i < 11; i++) {
   console.log(`${i}\t${i**2}\t${i**3}`);
}
console.log("\n")

// 7
for (let k = 0; k <= 100; k++) {
    if (k%2==0) {
        console.log(k)
    }
}
console.log("\n");

// 8
for (let k = 0; k <= 100; k++) {
    if (k%2!=0) {
        console.log(k)
    }
}
console.log("\n");

// 9
let isprime = true;
for (let k = 1; k <= 100; k++) {
    isprime = true
    for (let l = 2; l < parseInt(k/2); l++) {
        if (k%l===0) {
            isprime = false
            break
        }
    }
    if (isprime) {
        console.log(k);
    }
}
console.log("\n");

// 10
let sum = 0
for (let k = 0; k <= 100; k++) {
    sum += k
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);
console.log("\n");

// 11
let evensum = 0
let oddsum = 0
for (let k = 0; k <= 100; k++) {
    if (k%2==0) {
        evensum += k
    } else {
        oddsum += k
    }
}
console.log(`The sum of all even numbers from 0 to 100 is ${evensum}.And sum of all odd numbers from 0 to 100 is ${oddsum}`);
console.log("\n");

// 12
// Same as above but answer in array format
console.log([evensum,oddsum]);

// 13
let randomNums = [];
for (let i = 0; i < 5; i++) {
   randomNums.push(parseInt(Math.random() * 100));
}
console.log(randomNums);

// 14
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
   let randNum = parseInt(Math.random() * 100)     
   if(randomNumbers.indexOf(randNum) == -1) {
      randomNumbers.push(randNum);
   }
}
console.log(randomNumbers);

// 15
let alphabets = 'abcdefghijklmnopqrstuvwxyz';
let randoms = [];
for(let i = 0; i < 6; i++) {
   if(i%2 != 0) randoms.push(i);
   else randoms.push(alphabets[parseInt(Math.random() * 25)])
}
console.log(randoms.join(''));

// Exercise : Level 2

// 1
alphanums = '123456789abcdefghijklmnopqrstuvwxyz123456789';
randoms = [];
let num = parseInt(Math.random() * alphanums.length) % 16; // max can be 16
for(let i = 0; i < num; i++) {
   randoms.push(alphabets[parseInt(Math.random() * alphanums.length-1)])
}
console.log(randoms.join(''));

// 2
let hexChars = '123456789abcdef'
let hexCode = []
for(let i=0; i<6; i++) {
    hexCode.push(hexChars[parseInt(Math.random()*hexChars.length)-1]);
 }
console.log('#' + hexCode.join(''));
console.log("\n");

// 3
let rgb = [];
for(const char of '123') {
   var red = (parseInt(Math.random() * 255));
   var grn = (parseInt(Math.random() * 255));
   var blu = (parseInt(Math.random() * 255));
   
   rgb.push(red, grn, blu);
} console.log(`rgb(${red}, ${grn}, ${blu})`);
console.log("\n")

// 4
const upperCountries = []
countries.forEach(country => {
    upperCountries.push(country.toUpperCase())
});
console.log(upperCountries);
console.log("\n");

// 5
const countriesLength = []
countries.forEach(country => {
    countriesLength.push(country.length)
});
console.log(countriesLength);
console.log("\n");

// 6
const arrOfArr = []
countries.forEach(country => {
    arrOfArr.push([country,country.slice(0,3).toUpperCase(),country.length])
}); 
console.log(arrOfArr);
console.log("\n");

// 7
let noCountry = true;
let landCountriesList = [];

for(const i of countries) {
   if(i.includes('land')) {
      landCountriesList.push(i);
      noCountry = false;
   }
} 
if(noCountry) {
   console.log("All these countries are without land");
} else {
    console.log(landCountriesList);
}
console.log("\n");

// 8
noCountry = true;
let iaCountriesList = [];

for(const i of countries) {
   if(i.endsWith('ia')) {
      iaCountriesList.push(i);
      noCountry = false;
   }
} 
if(noCountry) {
   console.log("All these countries end without ia");
} else {
      console.log(iaCountriesList);
}
console.log("\n");

// 9
let maxLength = 0;
let maxLenCountry;
for (const country of countries) {
   if(country.length > maxLength) {
      maxLength = country.length;
      maxLenCountry = country;
   }
}
console.log(maxLenCountry);
console.log("\n");

// 10
let lenFiveCountries = [];
for (const country of countries) {
   if (country.length === 5)
      lenFiveCountries.push(country);
}
console.log(lenFiveCountries);
console.log("\n");

// 11 
let length = webTechs[0].length;
let word;
for(const tech of webTechs) {
   if (tech.length > length) {
      word = tech;    
      length = tech.length;
   }
}
console.log(word);
console.log("\n");

// 12   
let techWithLen = [];
for (const tech of webTechs) {
   let len = tech.length;
   let caps = tech.toUpperCase();
   
   techWithLen.push([caps, len])
};
console.log(techWithLen);
console.log("\n");

// 13
let mernArray = ['MongoDB', 'Express', 'React', 'Node'];
let mernStack = [];

for (const tech of mernArray) {
   mernStack.push(tech[0].toUpperCase());
};
console.log(mernStack.join(''));
console.log("\n");

// 14 
for(const tech of webTechs) {
    console.log(tech);
}
console.log("\n");

// 15 
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let reversedFruits = [];

for (let i = fruits.length-1; i >= 0; i--) {
   reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);
console.log("\n");

// 16 print the webTechs 
for (const each of webTechs) {
   console.log(each);
}
console.log("\n");

// Exercise : Level 3

// 1 
let countriesCopy = [];
for (const country of countries) {
   countriesCopy.push(country);
} // copied without mutation

// 2
let sortedCountries = countriesCopy.sort();
console.log(sortedCountries);

// 3
let sortedWebTechs = webTechs.sort();
let sortedMernStack = mernStack.sort();

// 4 
let landCountries = [];
for(const country of countries) {
   if(country.includes('land')) {
      landCountries.push(country);
   }
}
console.log(landCountries);
console.log("\n");

// 5
maxLength = 0;
for (const country of countries) {
   if(country.length > maxLength) {
      maxLength = country.length;
      maxLenCountry = country;
   }
}
console.log(maxLenCountry);
console.log("\n");

// 6
// Same as 4

// 7
let lenFourCountries = [];
for (const country of countries) {
   if(country.length === 4) 
      lenFourCountries.push(country);
}
console.log(lenFourCountries);
console.log("\n");

// 8 
let twoOrMoreWordCountries = [];
for(const country of countries) {
   if(country.split(' ').length > 1) 
      twoOrMoreWordCountries.push(country);
}
console.log(twoOrMoreWordCountries);
console.log("\n");

// 9 
let reversedCountries = countries.reverse();
let capReverseCountries = [];

for(const country of reversedCountries) {
   capReverseCountries.push(country.toUpperCase());   
}
console.log(capReverseCountries);
console.log("\n");