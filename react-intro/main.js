let helo = React.createElement("h1", null, "hellooo");
ReactDOM.render(helo, document.getElementById("root"));

let divListNode = document.querySelector(".ul-list");

let items = [
  "1 cup Fresh Basil",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic",
];

let ulList = React.createElement(
  "ul",
  null,
  items.map((elem, i) => React.createElement("li", { key: i }, elem))
);
ReactDOM.render(ulList, divListNode);

