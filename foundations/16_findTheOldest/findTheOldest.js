const findTheOldest = function(people) {
    let max_age = -1;
    return people.reduce(
        (oldestPerson, person) => {
            const death = person.yearOfDeath==undefined ?
                (new Date().getFullYear()) :
                (person.yearOfDeath);
            const age = death - person.yearOfBirth;
            if (age > max_age) {
                max_age = age;
                return person;
            } else {
                return oldestPerson;
            }},
        undefined);
};

// Do not edit below this line
module.exports = findTheOldest;
