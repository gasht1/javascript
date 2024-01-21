const portfolio = {
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

/*delete portfolio.rate;
portfolio.expert = "front-end expert";
console.log(portfolio);
console.log(portfolio["name"]);

const obj = new Object();
obj.name = "Gashaw Dreamer";
console.log(obj);*/
