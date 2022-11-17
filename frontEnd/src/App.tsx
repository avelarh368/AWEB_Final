import { Link, Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Movies from './pages/Movies';

// import IUserAccessForm from './model/Form';
// import FormsComponent from './components/Form';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/*
        <Route path='/index(.html)?' exact={true}>
          <FormsComponent props={toForms}/>
        </Route>
      */}
        <Route path='/movies' exact={true}>
          {/**
           * I FUCKING LOVE TYPESCRIPT
           * PLEASE WASTE MORE OF MY FUCKING TIME
           * I HAVE NO FUCKING CLUE HOW THIS SINTAX IS SUPPOSED TO WORK
           * OR WHY THE FUCK IT DOES
           * BUT IT DOES SO I'M FUCKING DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONE
           */}
          
          <Movies/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
