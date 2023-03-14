import BadCredentialsError from "../../errors/BadCredentialsError";


interface Credentials {
  username: string;
  password: string;
}

const authenticate = async (credentials: Credentials): Promise<string> => {
  const {username, password} = credentials;

  if (username !== 'admin' || password !== 'admin') {
    throw new BadCredentialsError();
  }

  return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE2Nzg0NTE4ODEyNTMsInJvbGVzIjpbIlJPTEVfQURNSU4iLCJST0xFX0FOQUxJU1RBIiwiUk9MRV9JTlRFUk5PIl0sImlkIjoyLCJleHAiOjE2Nzg4ODM4ODF9.q8SVqZ8K6B9Ex-p6BEjYoJm91pWoaLQ-g0uSyi2j-5arMEp7OK1fZaKAN_Xx7KekMP9pk81EtQPXq8FC4Cz1Jw';
}

export default { authenticate };