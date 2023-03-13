import BadCredentialsError from "../../errors/BadCredentialsError";
import ValidationError from "../../errors/ValidationError";

interface Credentials {
  username: string;
  password: string;
}

const authenticate = async (credentials: Credentials): Promise<String> => {
  const {username, password} = credentials;

  if (username === 'admin' && password === 'admin') {
    return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE2Nzg0NTE4ODEyNTMsInJvbGVzIjpbIlJPTEVfQURNSU4iLCJST0xFX0FOQUxJU1RBIiwiUk9MRV9JTlRFUk5PIl0sImlkIjoyLCJleHAiOjE2Nzg4ODM4ODF9.q8SVqZ8K6B9Ex-p6BEjYoJm91pWoaLQ-g0uSyi2j-5arMEp7OK1fZaKAN_Xx7KekMP9pk81EtQPXq8FC4Cz1Jw';
  }

  throw new BadCredentialsError();
}

export default { authenticate };