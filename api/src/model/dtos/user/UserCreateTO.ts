import { UserRoles } from "../../enums/UserRoles";

export default interface UserCreateTO {
  name: string;
  username: string;
  password: string;
  email: string;
  role: UserRoles;
  active: boolean;
}
