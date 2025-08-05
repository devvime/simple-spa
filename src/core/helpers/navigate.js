import { RouterInstance } from "blots";

export function navigate(path) {
  RouterInstance.get().navigate(path);
}
