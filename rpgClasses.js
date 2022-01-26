// This code is here to represent various classes that are found in video games

class Class {
    constructor(name, gender, race) {
        this.name = name;
        this.gender = gender;
        this.race = race;
        this.healthBar = 100;
    }
}

class Warrior extends Class {
    constructor(name, gender, race) {
        super(name, gender, race);
        this.rageBar = 0;
    }
}

class Mage extends Class {
    constructor(name, gender, race) {
        super(name, gender, race);
        this.manaBar = 100;
    }
}

const lorthar = new Warrior('Lorthar', 'male', 'nord');
console.log(lorthar);
const misty = new Mage('Misty', 'female', 'human');
console.log(misty);