type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type CreateUser = Omit<User, "id">;
type UpdateUser = Partial<Omit<User, "id">>;
type PublicUser = Omit<User, "password">;
