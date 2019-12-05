const Currency = {
  calculateReal(change, quantityByCoins) {
    change = parseInt(change);
    let realCount = quantityByCoins[quantityByCoins.length - 1];

    if (change > realCount) {
      throw new Error(`empty box`);
    }

    return change;
  },
  calculateCents(change, quantityByCoins) {
    let cents = [50, 25, 10, 5, 1],
      count = 0;
    let rawCents = parseInt(Math.round((change - parseInt(change)) * 100));
    let acumullateCents = [0, 0, 0, 0, 0];

    quantityByCoins.pop();
    quantityByCoins.reverse();

    for (let i = 0; rawCents !== 0; i++) {
      count = rawCents / cents[i];
      if (count != 0 && count >= 1) {
        if (quantityByCoins[i] < parseInt(count)) {
          throw new Error(`empty box`);
        }
        acumullateCents[i] = parseInt(count);
        rawCents = rawCents % cents[i];
      }
    }

    return acumullateCents.reverse();
  },

  validateInputs(change, quantityByCoins) {
    if (typeof change !== 'number') {
      throw new Error(`missing type number`);
    }

    if (change < 0) {
      throw new Error(`missing number greater than zero`);
    }

    if (!Array.isArray(quantityByCoins)) {
      throw new Error(`missing array of numbers`);
    }

    if (quantityByCoins.length !== 6) {
      throw new Error(`missing array length 6`);
    }

    quantityByCoins.forEach(coinTotal => {
      if (typeof coinTotal !== 'number') {
        throw new Error(`missing type number in array`);
      }
      if (coinTotal < 0) {
        throw new Error(`missing number greater than zero in array`);
      }
    });
  }
};

module.exports = Currency;
