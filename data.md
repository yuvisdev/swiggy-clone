# Points

1.packages / dependencies means same
2.every dependency has its own package.json
3.To re-create deleted node_modules: npm install
3.What Parcel brings 🔥?

- Dev Build ( built local server )
- HMP ( Hot Module Replacement aka HOT RELOAD ) using File Watching Algorithm
- Image Optimisation
- Caching all the files for faster build
- minification of our file ( removing whitespaces and other thing )
- Bundling
- Compressed the File
- Consistent Hashing
- Code spiliting
- Differential bundling ( gives different bundles for each type of browser old , new )
- Diagnostic ( beautiful errors )
- can gives HTTPS server
- Tree shaking algorithm ( parcel will remove unused code )

4. npx parcel build index.html ( this will covert our dev build files and put them in dist folder for the production )
5. instead of writting npx parcel index.html or npx parcel build index.html write it in scripts in package.json and now its npm run start , npm run build ( NOW YOU KNOW HOW TO START ANY PROJECT VIA PACKAGE.JSON ) see code in package.json too

6. JS doesn't comes with built-in JSX, Js engine doesnt undertsand JSX it understand ecmaScript, behind the scees my Man PARCEL, even before the code is sent to JS engine it's transpiled by PARCEL and it;s not again doing itself its done by BABEL one of PARCEL dependency
   // JSX CODE -------> PARCEL -- BABEL (js compiler and transpiled the code) ---> JS ENGINE (it can now execute)
   // JSX --(BABEL)--> React.CreateElement() --> JS Object --.render()--> HtmlElement

7.React has 2 types of components -> Class Based Component ( old way ) , Functional Based Component ( new way )

8. Props are nothing at the end of day they are normal arguments to a function ( passing a prop to a function is same as passing an argument to a function ) eg. <Restraunt resName="kfc" time="11" /> -> now react will take all these properties , wrap it in object and pass in component as props

9. config driven UI => website layput depending on data
10. exports and imports are of two types -> default and named

- named export and import
  export let data = 10;
  let {data} from "thatFile.js"

- default export and import
  export default Component;
  let Component from "thatFile.js"

# BEST APPROACH TO RENDER ->

PAGE LOAD -> RENDER asap -> API CALL -> RE-RENDER APP W/ DATA

10. When you want to make your DataLayer and UiLayer sync with each other we have to make a normal js Variable to STATE varibale ( a normal js variable on steriods ), by using HOOKS ( a normal js function )

# HOOKS 🪝 -> A NORMAL JS utility FUNCTION

1.useState() -> used to generate superpowerful variables (state varibale)
let a; -> normal varibale
let [currentState, updatedState] = useState(default_value); -> useState() returns array and we destruct it write from state as soon as state change react renders the whole componenet not just that particular thing, (reconsilation )
->
whenever a state variable changed react re-render the whole component
2.useEffect() ->
useEffect(callbackFunction, dependencyArray) -> when component will be rendered than this cb will be called , it is mainly used to re-render the componenet with the fetched data

# useEffect() : NOTE: in all cases below one thing is common that atleast once it'll render always

useEffect(()=>{

}) -> this will be call callback every time it renders the whole component

useEffect(()=>{

}, []) -> this will be called only once after the render

useEffect(()=>{

}, [stateVaribale]) -> this will be called only when that particular componnet state changes

11. there are 2 types of routing=>
    1.client side routing => react ( all code already present when we load it ,it just load this time)
    2.server side routing => html js vanilla (you make a call and page is coming from server )

# Keywords and their usecase:

- NPM : it's a standard package manager for all packages. it used to managemthem
- package.json : it's a JSON file i.e configuration for NPM it has dependencies or packages which npm will manage , it has ~version (major version install automatically) , ^(minor version automatically install)
- package-lock.json -> stores exact version of (dependencies) of our project
- Bundler : helps our code to bundled together, clean, cached, minified, compromised
- Node Modules is like a DB i.e it contains actual core code of all dependencies ( it is collection of dependencies )
- Transitive dependencies : A dependency which is itself dependent on other dependency to run itself
- NPX : used to execute the package
- broswersList : npm package to convert our project for older browser version

# Code and lin.

// React element is an object when we render() this in dom then itll become element
// ( core react )
// const heading = React.createElement("h1", {}, "Heading !!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// \* JSX is not part of React, it's HTML-like Syntax (JSX = React.CreateElement )
// const heading = <h1 id="heading">Namaste from JSX</h1>; // creating React element using JSX
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// React Element

// const heading = <h1 className="primary--heading">Hello Duniya</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// React functional Component
// it is a js function that returns some JSX or react element

// this is component composition -> component inside component
// const List = () => {
// return (
// <ul>
// <li>Aloo</li>
// <li>Gobi</li>
// <li>Pyaaz</li>
// <li>Kaduu</li>
// </ul>
// );
// };

// const sum = 13;

// const Heading = () => <h1 className="primary--heading">Hello Yuvraj</h1>;
// const HeadingComponent = () => (
// <div>
// {sum % 2 == 0 ? "even number here " : "odd number here"}

// {/_ all means same below _/}
// <List />
// <List></List>
// {List()}
// </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);
