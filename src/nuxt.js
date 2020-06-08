import { join } from "path";

export default function() {
  this.nuxt.hook("components:dirs", (dirs) => {
    dirs.push({
      path: join(__dirname, "components/elements"),
      prefix: "e-",
    });

    dirs.push({
      path: join(__dirname, "components/patterns"),
      prefix: "p-",
    });

    dirs.push({
      path: join(__dirname, "components/templates"),
      prefix: "tp-",
    });

    dirs.push({
      path: join(__dirname, "components/tokens"),
      prefix: "t-",
    });
  });
}
