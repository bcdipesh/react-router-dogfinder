import { v4 as uuidv4 } from "uuid";

function Dog({ name, age, image, facts }) {
  return (
    <div className="Dog">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <img src={image} alt={`${name}`} />
      <p>Facts about {name}</p>
      <ul>
        {facts.map(function (fact) {
          return <li key={uuidv4()}>{fact}</li>;
        })}
      </ul>
    </div>
  );
}

export default Dog;
