import { v4 as uuidv4 } from "uuid";
import Dog from "./Dog";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      {dogs.map(function (dog) {
        return (
          <Dog
            key={uuidv4()}
            name={dog.name}
            age={dog.age}
            image={dog.src}
            facts={dog.facts}
          />
        );
      })}
    </div>
  );
}

export default DogList;
