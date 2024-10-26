class Cat {
    constructor() {
        this.name = null;
        this.age = null;
        this.favoriteFood = null;
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

    setName(newName) {
        this.name = newName;
    }

    setAge(newAge) {
        this.age = newAge;
    }

    setFavoriteFood(newFavoriteFood) {
        this.favoriteFood = newFavoriteFood;
    }
}