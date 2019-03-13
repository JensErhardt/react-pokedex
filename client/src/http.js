import ky, { options } from 'ky';

// import session from '';

const http = ky;

/* const http = ky.extend({
  headers: {
    Accept: "application/json",
  },
  hooks: {
    afterResponse: [],
    beforeRequest: [(options) => {
      const token = session;
      if (token) {
        const headers = options.headers!;
        headers.append("Authorization", "Token " + Token);
      }
    }],
  },
}); */

export default http;