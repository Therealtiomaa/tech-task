const catAge = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

const isBetween = (num) => {
    return num >= 5 && num <= 10;
} 

test('Make sure that cat age is randomly assigned between 5 and 10', () => {
    expect(isBetween(catAge)).toBe(true)
})

const speak = () => {
return "meow"
}

test('Make sure that method properly functioning', () => {
    expect(speak()).toBe("meow")
});

