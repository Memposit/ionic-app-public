import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform
} from '@ionic/react';

import { arrowRedo } from 'ionicons/icons';

import ExploreContainer from '../../components/ExploreContainer';
import './styles.css';

const Home: React.FC = () => {
  const MOBILE = isPlatform('android');
  const DESKTOP = isPlatform('desktop');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => alert('You click button')}>
          <IonIcon icon={arrowRedo} /> Alert World!!
        </IonButton>
        {!MOBILE && <button onClick={() => {}}>Login with Google</button>}
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
