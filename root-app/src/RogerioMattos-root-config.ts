import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@RogerioMattos/counter",
  app: ():any => System.import("@RogerioMattos/counter"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
