
// Exercise : Level 1

// 1
const empty_arr = []

// 2
const names = ["Name1","Name2","Name3","Name4","Name5","Name6"]

// 3
console.log(names.length,"\n")

// 4
console.log(names[0],names[Math.floor(names.length/2)],names[names.length-1],"\n")

// 5
const mixedDataTypes = [
    22,
    "Name1",
    ["something","something_else"],
    true,
    Math.PI,
    false
]
console.log(mixedDataTypes.length,"\n")

// 6
const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
]

// 7
console.log(itCompanies,"\n")

// 8
console.log(itCompanies.length,"\n")

// 9
console.log(itCompanies[0],itCompanies[Math.floor(itCompanies.length/2)],itCompanies[itCompanies.length-1],"\n")

// 10
for (let index = 0; index < itCompanies.length; index++) {
    const element = itCompanies[index];
    console.log(element)
}
console.log("\n")

// 11
for (let index = 0; index < itCompanies.length; index++) {
    const element = itCompanies[index].toUpperCase();
    console.log(element)
}
console.log("\n")

// 12
const itCompaniesExceptLast = itCompanies.slice(0,itCompanies.length-1)
const lastCompany = itCompanies[itCompanies.length-1]
const itCompaniesExceptLastAsSentence = itCompaniesExceptLast.join(",")

console.log(itCompaniesExceptLastAsSentence,"and",lastCompany,"are big IT companies.")

// 13
if (itCompanies.includes("Apple")) {
    console.log("Apple")
} else {
    console.log("Apple is not found")
}

// 14


// 15
itCompanies.sort()
console.log(itCompanies)

// 16
itCompanies.reverse()
console.log(itCompanies)

// 17
console.log(itCompanies.slice(0,3))

// 18
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))

// 19
if (itCompanies.length%2 === 0) {
    middleitCompanies = itCompanies.slice(Math.floor(itCompanies.length/2),Math.floor(itCompanies.length/2)+2)
} else {
    middleitCompanies = itCompanies.slice(Math.floor(itCompanies.length/2),Math.floor(itCompanies.length/2)+1)
}

console.log(middleitCompanies)

// 20
itCompanies.shift()
console.log(itCompanies)

// 21
if (itCompanies.length%2 === 0) {
    removedMiddleitCompanies = itCompanies.splice(itCompanies.length/2-1,2)
} else {
    removedMiddleitCompanies = itCompanies.splice(Math.floor(itCompanies.length/2),1)
}
console.log(itCompanies)

// 22
removedLastitCompany = itCompanies.pop()
console.log(itCompanies)

// 23
emptyitCompanies = itCompanies.splice()
console.log(emptyitCompanies)


// Exercise : Level 2
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

// 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, REACT, PYTHON.'
let arr = text.split(/[,\s]+|[\s]/)
console.log(arr)

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes("Meat")) {
    shoppingCart.unshift("Meat")
}

if (!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar")
}

shoppingCart.splice(shoppingCart.lastIndexOf('Honey'), 1)

shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea"

console.log(shoppingCart)


// 4
if (countries.indexOf("Ethiopia")) {
    console.log("ETHIOPIA");
 } else countries.push("Ethiopia")
console.log(countries)

// 5
if (webTechs.indexOf("Sass")) {
    console.log("Sass is a CSS preprocess");
 } else webTechs.push("Sass");
 console.log(webTechs);

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MangoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercise : Level 3

// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)

let min = ages[0]
let max = ages[ages.length-1]
console.log("Min :",min,"Max :",max)

let len = ages.length
let median = (ages[parseInt(len/2)-1] + ages[parseInt(len/2)])/2
console.log("Median :",median)

let sum = 0
for (let i = 0; i < ages.length; i++) {
    const age = ages[i];
    sum += age
}
const average = sum/ages.length
console.log("Average :",average)

console.log("Range :",max - min)

Math.abs(min-average) < Math.abs(max-average) ? console.log("Data is left skewed"): console.log('Data is right skewed!')

let first10Countries = countries.slice(0, 10)
console.log(first10Countries)

// 2 : Find the mid countries  
if (countries.length % 2 === 0){
   let firstMid = (countries.length)/2 -1
   let secondMid = (countries.length)/2
   console.log(countries[firstMid], countries[secondMid])
} else console.log(countries[parseInt(countries.length/2)-1]); // Lebanon

// 3: convert in to equal halves 
// remove first country to make the arr even
countries.shift()
// now convert into equal halves
console.log(countries)
let firstHalf = countries.splice(0,countries.length/2)
let anotherHalf = countries.splice(0, countries.length)
console.log(anotherHalf)