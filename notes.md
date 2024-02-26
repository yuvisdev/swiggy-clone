# Points

1. packages / dependencies means same
2. every dependency has its own package.json
3. To re-create deleted node_modules: npm install
4. Transitive dependencies : A dependency which is itself dependent on other dependency to run itself
5. NPM : it's a standard package manager for all packages. it used to manage them
6. package.json : it's a JSON file i.e configuration for NPM it has dependencies or packages which npm will manage , it has ~version (major version install automatically) , ^(minor version automatically install)
7. package-lock.json -> stores exact version of (dependencies) of our project
8. Bundler : helps our code to bundled file together, clean, cached, minified, compressed eg(Parcel, webpack)
9. Node Modules is like a DB i.e it contains actual core code of all dependencies ( it is collection of dependencies )
10. NPX : used to execute the package
11. broswersList : convert our project for older browser version

12. What Parcel brings 🔥?

- Dev Build ( built local server )
- HMP ( Hot Module Replacement aka HOT RELOAD ) using File Watching Algorithm ( c++ )
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

13. npx parcel build index.html ( this will covert our dev build files and put them in dist folder for the production )

14. JSX isnt part of React or JS
    JSX ---babel---> React.CreateElement() ( both will return object ) and .render() will take that object and convert it into HTML element

15. React has 2 types of components -> Class Based Component ( old way ) , Functional Based Component ( new way )

16. Functional Component -> normal JS function that returns JSX or react element

17. Component Composition -> A component inside other component

18. Props are normal arguments to a function ( passing a prop to a function is same as passing an argument to a function ) eg. <Restraunt resName="kfc" time="11" /> -> now react will take all these properties , wrap it in object and pass in component as props

19. config driven UI => website layput depending on data and changes according to it

20. its imp to give keys as prop to uniquely identify componenet else react will have to re-render entire to fit that new componenet

21. exports and imports are of two types -> default and named

- named export and import
  export let data = 10;
  let {data} from "thatFile.js"

- default export and import
  export default Component;
  let Component from "thatFile.js"

22. BEST APPROACH TO RENDER ->

PAGE LOAD -> RENDER asap -> API CALL -> RE-RENDER APP W/ DATA

### HOOKS 🪝 : A NORMAL JS utility FUNCTION

- Note : When you want to make your DataLayer and UiLayer sync with each other we have to make a normal js Variable to STATE varibale ( a normal js variable on steriods ), by using HOOKS ( a normal js function )

1. useState() -> It is uused to generate superpowerful variables ( Local state varibale )
   let a; -> normal varibale
   let [currentState, updatedState] = useState(default_value); -> useState() returns array and we destruct it write from start, as soon as state change react re-renders the whole componenet not just that particular thing.

2. useEffect() : useEffect(callbackFunction, dependencyArray) -> when component will be rendered than this cb will be called , it is mainly used to re-render the componenet with the fetched data

### NOTE: in all cases below one thing is common that atleast once it'll render always

- useEffect(()=>{

}) -> this will be call callback every time it renders the whole component

- useEffect(()=>{

}, []) -> this will be called only once after the render

- useEffect(()=>{

}, [stateVaribale]) -> this will be called only when that particular componnet state changes

## WHY react is so fast??

- due to many dependencies comes with it -> parcel, babel
- its best in DOM manipulation ( faster )
-

11. there are 2 types of routing=>
    1.client side routing => react ( all code already present when we load it ,it just load this time)
    2.server side routing => html js vanilla (you make a call and page is coming from server )
