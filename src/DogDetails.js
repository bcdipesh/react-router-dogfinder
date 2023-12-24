import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dog from "./Dog";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentDog, setCurrentDog] = useState(null);

  useEffect(() => {
    const foundDog = dogs.find((dog) => dog.name.toLowerCase() === name);
    setCurrentDog(foundDog);
    setIsLoading(false);
  }, [dogs, name]);

  return (
    <div className="DogDetails">
      {!isLoading && (
        <Dog
          name={currentDog.name}
          age={currentDog.age}
          image={currentDog.src}
          facts={currentDog.facts}
        />
      )}
    </div>
  );
}

export default DogDetails;
