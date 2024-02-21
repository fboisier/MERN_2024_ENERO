//const myReactComponent = React.createElement("h1", {}, "I am creating my first React component")

//ReactDOM.render(myReactComponent, document.getElementById("root"))

// <h1>I am creating my first React component</h1>


const myReactComponent = React.createElement(
    "h1", // create a h1 element
    {}, // no properties
    "I am creating my first React component" // text content
); // <h1>I am creating my first React component</h1>


const myNestedReactComponent = React.createElement(
    "div", // create a div element
    {}, // no properties
    React.createElement("p", {}, "This element is nested") // nested component
);
//<div>
//   <p>This element is nested</p>
//</div>

const parentElement = React.createElement(
    "div", // create a div element
    {}, // no properties
    myReactComponent, // add myReactComponent
    myNestedReactComponent // add myNestedReactComponent
);

//<div>
//  <h1>I am creating my first React component</h1>
//  <div>
//     <p>This element is nested</p>
//  </div>
//</div>


ReactDOM.render(parentElement, document.getElementById("root"))
