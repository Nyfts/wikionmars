import type { UserRoles } from '@presentation/enums/UserRoles';

interface UserCreateTO {
  name: string;
  username: string;
  password: string;
  email: string;
  role: UserRoles;
  active: boolean;
}

export default UserCreateTO;
