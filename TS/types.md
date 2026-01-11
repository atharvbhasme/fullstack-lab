Primitive Types in TS
Boolean : check true or false
number: numeric values (2, 3.1432, 0.55) (t includes both integer and floating-point values.)(values under 2^{53}-1)
string: represents textual data. It is a set of elements of the 16-bit Unicode character set.
void: represents the return value of functions which don’t return a value
null: represent nothingness
undefined: represent the intailessed but no value assigned varible
bigint: values larger than (2^{53}-1),
symbol: to create value for variable

Non-primitive data types
object:  we simply list its properties and their types.(refference)
array: store the list of data of same type if type defined

Memory for each data type

| Type        | Category  | Approx Size                         | Notes                     |
| ----------- | --------- | ----------------------------------- | ------------------------- |
| `number`    | Primitive | **8 bytes**                         | IEEE-754 double precision |
| `bigint`    | Primitive | **Variable**                        | Depends on digits         |
| `string`    | Primitive | **~2 bytes per char**               | UTF-16 encoding           |
| `boolean`   | Primitive | **4 bytes** (engine-dependent)      | Often optimized           |
| `null`      | Primitive | **0 bytes**                         | Just a value              |
| `undefined` | Primitive | **0 bytes**                         | Just a value              |
| `symbol`    | Primitive | **~8 bytes+**                       | Unique reference          |
| `object`    | Reference | **~20–50 bytes**                    | Base object overhead      |
| `array`     | Object    | **~8 bytes per element + overhead** | Dynamic                   |
| `function`  | Object    | **~30–100 bytes**                   | Depends on closure        |
| `Date`      | Object    | **~40 bytes**                       | Wraps timestamp           |
| `Map`       | Object    | **~50 bytes + entries**             | Hash table                |
| `Set`       | Object    | **~50 bytes + entries**             | Unique values             |
| `Promise`   | Object    | **~40 bytes**                       | Internal state            |
| `Error`     | Object    | **~50 bytes**                       | Stack trace adds more     |

compile Time memory allocation

| Type                     | Size    | Reason                  |
| ------------------------ | ------- | ----------------------- |
| `interface`              | 0 bytes | Removed after compile   |
| `type`                   | 0 bytes | Compile-time only       |
| `enum`                   | Depends | Object if non-const     |
| `const enum`             | 0 bytes | Inlined at compile time |
| `union` (`A              | B`)     | 0 bytes                 |
| `intersection` (`A & B`) | 0 bytes | Type system only        |
| `generic<T>`             | 0 bytes | Compile-time only       |

| Type      | Meaning                                 |
| --------- | --------------------------------------- |
| `any`     | Disable TypeScript (unsafe)             |
| `unknown` | Value exists, type not known yet (safe) |
| `never`   | Value will never exist                  |

type inference
process of automatically determining the type of a variable based on the value assigned to it

```
let name = 'John Doe';//it will automatically detect it as string
```

**Combining two types**
In TypeScript, you can combine types using type union and type intersection.

**Type Union**
The union operator | is used to combine two or more types into a single type that represents all the possible types. For example:

| Concept      | Union (           | )                | Intersection (&) |
| ------------ | ----------------- | ---------------- | ---------------- |
| Meaning      | OR                | AND              |
| Use case     | Variants          | Composition      |
| Common usage | States, responses | Middleware, auth |
| Risk         | Forget narrowing  | Type conflicts   |

union = one of these
intersection = all of this


