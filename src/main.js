import page from "page";

import { intro } from "@app/pages/introduction/intro";
import { lesson } from "@app/pages/lesson/lesson";

page("/", intro);
page("/lesson", lesson);

page();
