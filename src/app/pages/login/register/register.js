import { render, state, RouterInstance } from "blots";
import element from "./register.html?raw";

import { registerService } from "@core/services/register.service";
import Swal from "sweetalert2";
import { navigate } from "@core/helpers/navigate";

const data = state(
  {
    refs: {},
    title: "Register",
    loading: false,
    name: "",
    email: "",
    password: "",
    async register() {
      const user = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      if (!validate(user)) return;
      handleRegister(user);
    },
  },
  register
);

export function register(params, query) {
  render("app", element, data);
}

function validate(values) {
  if (values.name === "") {
    data.refs.name.classList.add("is-invalid");
    return false;
  }
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

async function handleRegister(values) {
  data.loading = true;
  await registerService(values)
    .then(async (res) => {
      if (res.success) {
        await Swal.fire({
          title: "Success",
          text: res.message,
          icon: "success",
        });
      } else {
        await Swal.fire({
          title: "Error",
          text: res.message,
          icon: "error",
        });
      }
      setTimeout(() => {
        navigate("/");
      }, 500);
    })
    .catch((err) => {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    });
  data.loading = false;
}
