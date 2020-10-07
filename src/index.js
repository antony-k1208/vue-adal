import { AuthenticationContext } from './authentication-context';
import { AxiosAuthHttp } from './axios-http.js';

let authContextInstance = null;

const AdalPlugin = {
  install(app, opts = {}) {
    authContextInstance = new AuthenticationContext(opts);
    app.config.globalProperties.$adal = authContextInstance;
  },
};

export default AdalPlugin;
export {
  authContextInstance as AuthContextInstance,
  AxiosAuthHttp,
  AuthenticationContext,
};
