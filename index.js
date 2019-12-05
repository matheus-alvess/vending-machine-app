const currency = require('./currency');

const Index = {
  calculateChange(change, quantityByCoins) {
    try {
      currency.validateInputs(change, quantityByCoins);
      let real = currency.calculateReal(change, quantityByCoins);
      let result = [...currency.calculateCents(change, quantityByCoins), real];
      return result;
    } catch (e) {
      console.log(`error: ${e.message}`);
    }
  }
};

module.exports = Index;

(() => {
  console.log(Index.calculateChange(6.5, [1, 20, 30, 40, 10, 6]));
})();
