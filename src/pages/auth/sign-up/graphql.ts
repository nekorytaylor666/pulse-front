import { graphql } from 'graphql/gql';
export const SIGN_UP = graphql(`
  mutation Signup($data: SignupInput!) {
    signup(data: $data)
  }
`);

export const VERIFY_CODE = graphql(`
  mutation VerifyCode($code: String!, $verifyCodeData: SignupInput!) {
    verifyCode(code: $code, data: $verifyCodeData) {
      accessToken
      refreshToken
    }
  }
`);
