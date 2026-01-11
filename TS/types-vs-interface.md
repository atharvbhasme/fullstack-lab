## Types vs Interfaces in TS

**Interfaces are best for objects and extnesionallbilty while types are best for intersections, unions and types logic**

| Feature                   | `interface` | `type`            |
| ------------------------- | ----------- | ----------------- |
| Object shape              | ✅ Best     | ✅ Good           |
| Union types (`A \| B`)    | ❌ No       | ✅ Yes            |
| Intersection (`A & B`)    | ❌ No       | ✅ Yes            |
| Primitives                | ❌ No       | ✅ Yes            |
| Tuples                    | ❌ No       | ✅ Yes            |
| Declaration merging       | ✅ Yes      | ❌ No             |
| Extending                 | `extends`   | `&`               |
| Implements (class)        | ✅ Yes      | ✅ Yes            |
| Error messages            | Cleaner     | Sometimes complex |
| Preferred for public APIs | ✅ Yes      | ❌ Usually no     |
