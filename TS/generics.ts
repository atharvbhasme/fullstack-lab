// function identity(value:any){
//     return any;
// }


function identity<T>(value: T): T {
  return value;
}

//real life examples
type ApiResponse<T> = {
  data: T;
  success: boolean;
  error?: string;
};

type User = { id: string; name: string };

const response: ApiResponse<User> = {
  data: { id: "1", name: "Atharv" },
  success: true,
};


//generic fecth function
async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}

const data = fetchData<User>('/gateway./data');

//if we want to have the some properties compulsory we can use below example
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdentity({
    length: 3
});

//generics class
class Repository<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const userObj = new Repository<User>();z

