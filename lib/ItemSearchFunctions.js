function capitalizeFirstLetter(string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function splitThenURL(vals) {
  let itemList = vals.split(",");
  itemList = itemList.filter((item) => item !== "");
  itemList = itemList.filter((item) => item !== " ");
  itemList = itemList.map((item) => item.replace(/^\s+/g, ""));
  itemList = itemList.map((item) => item.replace(/ /g, "_"));
  itemList = itemList.map((item) => capitalizeFirstLetter(item));
  itemList = itemList.map(
    (item) => "https://runescape.wiki/images/" + item + "_detail.png"
  );

  return itemList;
}

export function makeSingleUrl(name) {
  let newName = name;
  newName = newName.replace(/ /g, "_");
  let finalUrl = "https://runescape.wiki/images/" + newName + "_detail.png";
  return finalUrl;
}

export function checkValidImages(urls) {
  return Promise.all(
    (urls = urls.map((url) =>
      fetch(url).then((res) => {
        if (!res.ok) {
          return "";
        } else {
          return url;
        }
      })
    ))
  );
}

export function formatItemUrls(names) {
  let itemName = names;
  itemName = itemName.replace(/, /g, "%7C");
  itemName = itemName.replace(/,/g, "%7C");
  itemName = itemName.replace(/ /g, "%20");
  itemName = itemName.replace(/\(/g, "%28");
  itemName = itemName.replace(/\)/g, "%29");
  itemName = itemName.replace(/'/g, "%27");
  let my_url = `https://api.weirdgloop.org/exchange/history/rs/latest?name=${itemName}`;
  return my_url;
}
