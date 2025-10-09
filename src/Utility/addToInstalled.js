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
const addInstalledApp = (id) => {
  const storedData = getInstalledApp();
//   storedData.push(id);
//   toast("✅ Successfully Installed");
    if (!storedData.includes(id)) {
      toast("already Installed")
    } else {
      storedData.push(id);
      toast("✅ Successfully Installed");
    }

  const data = JSON.stringify(storedData);
  localStorage.setItem("appsFound", data);
//   toast("✅ Successfully Installed");
};
export { getInstalledApp, addInstalledApp };
