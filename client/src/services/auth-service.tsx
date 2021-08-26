import { Service } from "./service";

export default class AuthService extends Service {
  registerUser = async () => {
    const res = await this.getResourse(`/auth/register`);

    return res;
  };
  loginUser = async () => {
    const res = await this.getResourse(`/auth/login`);

    return res;
  };
}
