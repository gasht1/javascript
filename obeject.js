/*const portfolio = {
  name: "Gashaw Gebrie",
  profession: ["   front-end developer  ", "maintenance"],
  rate: 5,
  sayHello: () => {
    console.log(hello);
  },
  get getRating() {
    return this.rate;
  },
  set setMethod(value) {
    return (this.rate = value);
  },
};
portfolio.rate;
portfolio.name;
portfolio.getRating;
portfolio.setMethod = 6;
console.log(portfolio.getRating);
const website = {
  _proto_: portfolio,
};
console.log(website._proto_.name);

/*delete portfolio.rate;
portfolio.expert = "front-end expert";
console.log(portfolio);
console.log(portfolio["name"]);

const obj = new Object();
obj.name = "Gashaw Dreamer";
console.log(obj);*/
/*const promise = new Promise(function (resolve, reject) {
  //resolve();
});
console.log(promise);*/
/*async function tester() {
  const value = await new Promise((resolve, reject) =>
    setTimeout(() => resolve(3), 1000)
  );
  console.log(value);
}
tester();*/

//console.log(stocks.firuts[0]);
/*const order = (friutName, productionStyle) => {
  setTimeout(() => {
    console.log(`${stocks.firuts[friutName]}`);
  }, 4000);
  productionStyle();
};

const production = () => {
  setTimeout(() => {
    console.log("production is selected");
  }, 0);
};

order(1, production);*/

const stocks = {
  fruits: ["banana", "papaya", "apple"],
  liquids: ["water", "ice"],
  holders: ["cone", "cup", "stick "],
};
const isShopping_open = true;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopping_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("shop is closed"));
    }
  });
};
order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
  .then(() => {
    return order(2000, () => console.log("production has started"));
  })

  .then(() => {
    return order(4000, () => console.log("the fruit was chopped"));
  })

  .then(() => {
    console.log("the fruit was chopped");
  })

  .then(() => {
    console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was selected`);
  })

  .then(() => {
    console.log("starting the machine");
  })

  .then(() => {
    console.log(` ice cream placed on${stocks.holders[0]}  `);
  })
  .then(() => {
    console.log("checolate was selected");
  })
  .then(() => {
    console.log("ice cream was selected");
  })

  .catch(() => {
    console.log("customer is left");
  })

  .finally(() => {
    console.log(" day is ended ,shop is closed");
  });
