type roles = {
  isAdmin: boolean,
  isCient?: boolean,
  isVisitor?: boolean,
}

type userInfo = {
  id: string,
  name?: string,
  age?: number
}

type user = roles | userInfo;

const user1:user = {
    id: "1234"
}



