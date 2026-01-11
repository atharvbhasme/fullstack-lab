# Typescript tsconfig properties

### Create basic tsconfig

```
tsc --init
```

**Running tsc locally will compile the closest project defined by a tsconfig.json, or you can compile a set of TypeScript files by passing in a glob of files you want. When input files are specified on the command line, tsconfig.json files are ignored.**

### First Level Fields in `tsconfig.json`

`tsconfig`

- `compilerOptions` //there are lot of `tsconfig` options for compicatop
- `watchOptions`
- `typeAcquisition`
- `files`
- `include`
- `exclude`
- `refference`

**Important properties to remember in `tscondig.json` **

- compiler options
  - `esModuleInterop` : It lets CommonJS and ES Modules work together smoothly, so you can import things without errors or extra syntax
  - `skipLibCheck` : Skips checking the types of .d.ts files. This is important for performance, because otherwise all node_modules will be checked.
  - `target` : The version of JavaScript you're targeting. I recommend es2022 over esnext for stability.
  - `allowJs`: Allows you to import `.js`  files
  - `resolveJsModulw` : Allow you to import `.json` files
  - `moduleDetection` : This option forces TypeScript to consider all files as modules. This helps to avoid 'cannot redeclare block-scoped variable' errors.
    e.g. : `"moduleDetection": "force"`
  - `isolatedModules` : It makes sure each file can work alone safely, so TypeScript blocks features that need other files to understand them.
  - `verbatimModuleSyntax` It makes you clearly say what is type-only and what is real code, so imports are correct and behave predictably in ESM or CommonJS.
  - `strict` : Enables all strict type checking options. Indispensable.
  - `noUncheckedIndexedAccess` : Prevents you from accessing an array or object without first checking if it's defined. This is a great way to prevent runtime errors, and should really be included in strict.
  - `noImplicitOverride` : Makes the override keyword actually useful in classes.
  - `module` : Tells TypeScript what module syntax to use. `NodeNext` is the best option for Node. [`moduleResolution: NodeNext`](https://www.typescriptlang.org/tsconfig#moduleResolution) is implied from this option.
  - `outDir` : Tells TypeScript where to put the compiled JavaScript files. dist is my preferred convention, but it's up to you.
  - `declaration` : ells TypeScript to emit .d.ts files. This is needed so that libraries can get autocomplete on the .js files you're creating.
  - `lib` : Tells TypeScript what built-in types to include. es2022 is the best option for stability. dom and dom.iterable give you types for window, document etc.(if you don't want to run the DOM, remove dom and dom.iternable options)

**Example `tsconfig.json` **

```
{
  "compilerOptions": {
    /* Base Options: */
    "esModuleInterop": true,
    "skipLibCheck": true,
    "target": "es2022",
    "allowJs": true,
    "resolveJsonModule": true,
    "moduleDetection": "force",
    "isolatedModules": true,
    "verbatimModuleSyntax": true,

    /* Strictness */
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    /* If transpiling with TypeScript: */
    "module": "NodeNext",
    "outDir": "dist",
    "sourceMap": true,

    /* AND if you're building for a library: */
    "declaration": true,

    /* AND if you're building for a library in a monorepo: */
    "composite": true,
    "declarationMap": true,

    /* If NOT transpiling with TypeScript: */
    "module": "preserve",
    "noEmit": true,

    /* If your code runs in the DOM: */
    "lib": ["es2022", "dom", "dom.iterable"],

    /* If your code doesn't run in the DOM: */
    "lib": ["es2022"]
  }
}
```

Refer below article for more: https://www.totaltypescript.com/tsconfig-cheat-sheet
