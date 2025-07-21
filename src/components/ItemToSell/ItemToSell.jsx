import "./ItemToSell.css"

export default function ItemToSell({itemImage, itemTitle, itemDescription}){
  return (
      <div>
        <img src={itemImage} alt={itemTitle}/>
        <div>
          <h1>{itemTitle}</h1>
          <p>{itemDescription}</p>
        </div>
      </div>
  )
}