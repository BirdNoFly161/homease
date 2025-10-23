const environement = getEnvironment();
let apiURL = "";
let clientURL = "";

if (environement === "development") {
  apiURL = "http://localhost:3001";
  clientURL = "http://localhost:5173";
}

if (environement === "production") {
  apiURL = "https://homeaseapi.vercel.app";
  clientURL = "https://homease-swart.vercel.app/";
}

function getEnvironment() {
  return import.meta.env.MODE;
}

export { environement, apiURL, clientURL };
