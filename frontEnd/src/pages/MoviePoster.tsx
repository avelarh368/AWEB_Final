import React from "react";
import {
  IonList,
  IonImg,
  IonItem
} from '@ionic/react';
import IMovie from "../model/Movie";

const chosenMovie = (key: number) => {};
const handleImageError = (counter: number) => {
  if (counter < 3) {
    counter += 1;
  } else {
    return 'true shit';
  }
};

const MoviePoster: React.FC<Array<IMovie>> = (props) => {
  // Declares variables for poster location.
  let posterId: number = 0;
  let extension: [string, string, string] = ['avif', 'webp', 'jpeg'];
  
  return(
    <IonList>
      {
        // I need to add an empty fragment or it gives me error,
        // fuck me if I know why.
      }
      <>
        {props.forEach((element: IMovie) => {
          const imgFolder: string =
              `../../public/assets/img/${posterId}/poster.${extension[element.fail]}`;
          posterId = element.src;
          <IonItem key={element.id}>
            <IonImg
            src={imgFolder}
            alt={element.alt}
            // This is how you write functions, how the fuck was I
            // supposed to know that.
            onClick={() => chosenMovie(element.src)}
            onError={() => handleImageError(element.fail)}
          ></IonImg>
          </IonItem>
        })};
      </>
      <IonItem></IonItem>
    </IonList>
  );
}
  

export default MoviePoster;