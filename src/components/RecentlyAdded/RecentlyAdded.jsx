import recentlyAddedImg from "../../assets/wabi_sabi_alpha.png";
import "./RecentlyAdded.css"

class RecentlyAddedClass {
  constructor(title, descriptions, image) {
    this.title = title;
    this.descriptions = descriptions;
    this.image = image;
  }
}


const recentlyAddedDescriptions = [
    "📚 Wydawnictwo: Sensus",
    "📖 Liczba stron: 165",
    "📕 Oprawa: twarda",
    "📦 Stan: dobry (delikatne ślady użytkowania)"
];

const ra_item = new RecentlyAddedClass(
    "Wabi Sabi – Andrew Juniper | Stan dobry",
    recentlyAddedDescriptions,
    recentlyAddedImg
);

function genRandomInt(max, min= 0){
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function RecentlyAdded(){
  const randomDescription = ra_item.descriptions[genRandomInt(ra_item.descriptions.length)];
  return (
      <header id="recently-added">
        <div>
            <img src={ra_item.image} alt={ra_item.title}/>
            <div>
              <h1>{ra_item.title}</h1>
              <p>{randomDescription}</p>
            </div>
        </div>
      </header>
  )
}