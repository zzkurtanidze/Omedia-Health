export default function () {
  let storageProfileString = localStorage.getItem("data");
  let weight = JSON.parse(storageProfileString);
  return weight;
}