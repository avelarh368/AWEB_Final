import MoviePoster from "./MoviePoster";
import MovieList from "../data/MoviesList";
import { IonPage, IonContent } from "@ionic/react";

const Movies: React.FC = () => {
  return(
  <IonPage>
    <IonContent>
      <MoviePoster {...MovieList} />
    </IonContent>
  </IonPage>
  );
};

export default Movies;