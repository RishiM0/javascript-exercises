const findTheOldest = function(people) {
    people.forEach((person) => {
        if (!person.hasOwnProperty('yearOfDeath')) {
            person['yearOfDeath'] = new Date().getFullYear();
        }
        person['age'] = person['yearOfDeath'] - person['yearOfBirth']
    })

    let resultIndex = 0;
    let resultt = people.reduce((longest, person, index) => {
        if (person['age'] > longest){
            resultIndex = index;
            longest = person['age']
        }
        return longest;
    }, 0)

    return people[resultIndex];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
