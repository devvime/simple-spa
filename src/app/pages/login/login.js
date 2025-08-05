import { render, state, RouterInstance } from "blots";
import element from "./login.html?raw";
import { loginService } from "@core/services/login.service";
import Swal from "sweetalert2";
import Storage from "@core/helpers/storage";
import { navigate } from "@core/helpers/navigate";

const data = state(
  {
    refs: {},
    title: "Login",
    isLogin: false,
    email: "",
    password: "",
    handleLogin() {
      const loginData = {
        email: data.email,
        password: data.password,
      };
      if (!validate(loginData)) return;
      handleSession(loginData);
    },
  },
  login
);

export function login(params, query) {
  render("app", element, data);
}

function validate(values) {
  if (values.email === "") {
    data.refs.email.classList.add("is-invalid");
    return false;
  }
  if (values.password === "") {
    data.refs.password.classList.add("is-invalid");
    return false;
  }
  return true;
}

async function handleSession(values) {
  data.isLogin = true;
  await loginService(values)
    .then(async (res) => {
      if (res.token) {
        await Swal.fire({
          title: "Success",
          text: res.message,
          icon: "success",
        });
        Storage.set("user", {
          id: res.id,
          name: res.name,
          email: res.email,
          token: res.token,
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      } else {
        await Swal.fire({
          title: "Error",
          text: res.message,
          icon: "error",
        });
      }
    })
    .catch((err) => {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    });
  data.isLogin = false;
}
