'use strict';

function scoreMaker () {
  user = new Buddy(user[0], user[1], user[2]);
  for (var i = 0; i < buddyArray.length; i++) {
    if (user.birdOwl === buddyArray[i].birdOwl) {
      buddyArray[i].tally++;
    }
    if (user.personality = buddyArray[i].personality) {
      buddyArray[i].tally++;
    }
    if (user.noise === 'quiet') {
      if (buddyArray[i].noise === 'quiet') {
        buddyArray[i].tally += 2;
      }
    }
    if (user.noise === 'music'){
      if (buddyArray[i].noise === 'music') {
        buddyArray[i].tally += 2;
      }
      else if (buddyArray[i].noise === 'quiet'){
        buddyArray[i].tally ++;
      }
    }
    if (user.noise === 'talk') {
      if (buddyArray[i].noise === 'talk'){
        buddyArray[i].tally += 2;
      }
      else if (buddyArray[i].noise === 'music'){
        buddyArray[i].tally++;
      }
    }
    if (user.noise === 'busy') {
      if (buddyArray[i].noise === 'busy'){
        buddyArray[i].tally += 2;
      }
      else if (buddyArray[i].noise === 'talk' || buddyArray[i].noise === 'music') {
        buddyArray[i].tally++;
      }
    }
    if (user.catDog === 'cat') {
      if (buddyArray[i].name === 'Java') {
        buddyArray[i].tally += 5;
      }
      else if (buddyArray[i].catDog === 'cat' || buddyArray[i].catDog === 'both') {
        buddyArray[i].tally++;
      }
    }
    if (user.catDog === 'dog') {
      if (buddyArray[i].name === 'Asha') {
        buddyArray[i].tally += 5;
      }
      else if (buddyArray[i].catDog === 'dog' || buddyArray[i].catDog === 'both') {
        buddyArray[i].tally++;
      }
    }
    if (user.catDog === 'both') {
      if (buddyArray[i].name === 'Java' || buddyArray[i].name === 'Asha') {
        buddyArray[i].tally += 5;
      }
      else if (!buddyArray[i].catDog === 'neither') {
        buddyArray[i].tally++;
      }
    }
    if (user.catDog === 'neither') {
      if (buddyArray[i].name === 'Java' || buddyArray[i].name === 'Asha') {
        buddyArray.tally -= 5;
      }
    }
  };
};
scoreMaker();
