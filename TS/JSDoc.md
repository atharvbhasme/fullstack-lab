### JS/TS Interoperability

### JS/TS Interoperability

- We can write/use TS code into JS code

  - convert the TS file into JS file by compiling(using tsc) and use that js file

- We can use JS file into TS file
  - TS compiler support the JS code type check just provide the `allowJs` and `resolveJSModule` in `tsconfig.json` . also add the `// @ts-check` comment at the top of a file.

```
// @ts-check

/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}
```

This is possible due to JSDoc
What is JSDoc : JSDoc is markup language and API documentation generator in JS
It allow developers to add structures and formatted comments directly. These comments, which begin with /\*_ and end with _/, can then be processed by a documentation generator tool (also called JSDoc) to produce a comprehensive HTML documentation website for the entire codebase

```
@type : Used to describe the type of a variable, constant, or expression.
@typeDef : custome object type
@property : property of custome object
@returns/@return : return of function
@throws/@exception : used documentation thow errors
@exmample : show how to use function
@deprecated : To show function is decrated
@readonly : mark object/any property as readOnly
@default: Document Default value
```
