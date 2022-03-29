import Geul from "geul";
import { delay } from "./utility";

document.addEventListener("DOMContentLoaded", () => {
  const typeHeaderLabel = async () => {
    await delay(2300);
    const headerLabel = new Geul(
      "resume",
      document.querySelector(".dot-label"),
      80
    );
    await headerLabel.run();
  };

  typeHeaderLabel();
});
