import { toast } from "react-toastify";

const getInstalledApp = () => {
  const storedAppData = localStorage.getItem("appsFound");
  if (storedAppData) {
    const storedApp = JSON.parse(storedAppData);
    return storedApp;
  } else {
    return [];
  }
};
const addInstalledApp = (data) => {
  const storedData = getInstalledApp();

  const found = storedData.find((id) => data.id === id.id);
  if (found) {
    toast.warning("already exist");
    return;
  } else {
    storedData.push(data);
    const data = JSON.stringify(storedData);
    localStorage.setItem("appsFound", data);
    toast.success("installed");
  }
};
export { getInstalledApp, addInstalledApp };
