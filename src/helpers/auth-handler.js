import Cookies from "js-cookie";

export const isLogged = () => {
  let token = Cookies.get("token");
  return token ? true : false;
};

export const doLogin = (token, remenberPassword = false) => {
  if (remenberPassword) {
    Cookies.set("token", token, { expires: 999 }); //setando a informação do cookie e deixando ela em 999 dias
  } else {
    Cookies.set("token", token);
  }
};

export const doLogout = () => {
  Cookies.remove("token");
};
