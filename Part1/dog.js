class Dog {
    constructor(initialName = null) {
        this.name = initialName;
        this.age = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        this.favoriteFood = null;
        this.namesHistory = [];
        this.speakCount = 0;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getFavoriteFood() {
        return this.favoriteFood;
    }

    getNames() {
        return this.namesHistory;
    }

    getAverageNameLength() {
        const addedCurrentName = [...this.namesHistory, this.name];
        const totalLength = addedCurrentName.reduce((res, name) => res + name.length, 0);
        return (totalLength / addedCurrentName.length).toFixed(2);
    }

    setName(newName) {
        this.namesHistory.push(this.name);
        this.name = newName;
    }

    setAge(newAge) {
        this.age = newAge;
    }

    setFavoriteFood(newFavoriteFood) {
        this.favoriteFood = newFavoriteFood;
    }

    speak(initialSpeak = "gav") {
        console.log(initialSpeak);
        this.speakCount += 1;

        if (this.speakCount === 5) {
            this.age += 1;
            this.speakCount = 0;
        }
    }
}
