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

const stocks = {
  firuts: ["banana", "papaya", "apple"],
};

//console.log(stocks.firuts[0]);
const order = (friutName, productionStyle) => {
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

order(1, production);
