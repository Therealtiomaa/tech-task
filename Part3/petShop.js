let db = {};

const saveTest = () => {
    db.catName = "Kot"
    db.dogName = "Sobaka"
}

const savePetShop = (petType) => {
    for (let i = 0; i < 3; i++) {
      const petKey = `${petType}${i + 1}`;
  
      db[petKey] = null
    }
  };

  const logStats = () => {
    const pets = Object.keys(db);
    console.log("All pets: ", pets.join(", "));
    console.log("Total pets count: ", pets.length)
  }

saveTest();
savePetShop("dog");
savePetShop("cat");
console.log(db);
logStats()






