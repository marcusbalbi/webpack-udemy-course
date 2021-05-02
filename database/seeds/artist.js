import _ from "lodash";
import { name, image, internet, company, datatype, date, lorem } from "faker";
import { GENRES } from "../constants";

export default function () {
  return {
    _id: _.uniqueId(),
    name: name.findName(),
    age: randomBetween(15, 45),
    yearsActive: randomBetween(0, 15),
    image: image.avatar(),
    genre: getGenre(),
    website: internet.url(),
    netWorth: randomBetween(0, 5000000),
    labelName: company.companyName(),
    retired: datatype.boolean(),
    albums: getAlbums(),
  };
}

function getAlbums() {
  return _.times(randomBetween(0, 5), () => {
    const copiesSold = randomBetween(0, 1000000);

    return {
      title: _.capitalize(lorem.words()),
      date: date.past(),
      copiesSold,
      numberTracks: randomBetween(1, 20),
      image: getAlbumImage(),
      revenue: copiesSold * 12.99,
    };
  });
}

function getAlbumImage() {
  const types = _.keys(image);
  let method = randomEntry(types);
  method = typeof method === "function" ? method : "image";
  return image[method]();
}

function getGenre() {
  return randomEntry(GENRES);
}

function randomEntry(array) {
  return array[~~(Math.random() * array.length)];
}

function randomBetween(min, max) {
  return ~~(Math.random() * (max - min)) + min;
}
