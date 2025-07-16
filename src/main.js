import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { Router } from "blots";

import { login } from "@/app/pages/login/login";
import { register } from "@/app/pages/login/register/register";

const router = new Router();

router.add("/", login);
router.add("/register", register);

router.resolve();
