import { Router } from "./core/router";

import { intro } from "@app/pages/introduction/intro";
import { lesson } from "@app/pages/lesson/lesson";

const router = new Router();

router.add("/", intro);
router.add("/lesson", lesson);

router.resolve();
