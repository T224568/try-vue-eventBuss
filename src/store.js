// EventBus.js
export const store = {
  state: {
    numbers: [1, 2, 3, 5, 7, 56],
  },
  addNumber(newNumber) {
    if (!this.state.numbers.includes(newNumber)) {
      console.log(`StoreaddMember --${newNumber}`)
        this.state.numbers.push(parseInt(newNumber));
    }
  },
};
