// This code is here to represent various classes that are found in video games

class Class {
  constructor(name, gender, race) {
    this.name = name;
    this.gender = gender;
    this.race = race;
    this.healthBar = 100;
  }

  introduction() {
    return `I am a mighty force in Azeroth. My name you will know me as is ${this.name}`;
  }
}

class Warrior extends Class {
  constructor(name, gender, race) {
    super(name, gender, race);
    this.rageBar = 0;
  }

  rageMeter(num) {
    let newMeter = num + this.rageBar;
    return `I used Lightning Strike on my foe. My rage has now grown to ${newMeter}.`;
  }
}

class Mage extends Class {
  constructor(name, gender, race) {
    super(name, gender, race);
    this.manaBar = 100;
  }
}

const lorthar = new Warrior("Lorthar", "male", "nord");
console.log(lorthar);
console.log(lorthar.rageMeter(50));
console.log(lorthar.introduction());
// const misty = new Mage('Misty', 'female', 'human');
// console.log(misty);
