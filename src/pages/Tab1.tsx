import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import '../assets/css/Tab1.css';
import logo from '../images/logo.png';
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent id="login-ecran">
          <IonCard>
              <img alt="bmw" src={logo} id="login-logo"></img>
              <IonCardHeader>
                  <IonCardTitle class="card-title">Login</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                  <IonInput label='Email' labelPlacement='floating' fill='solid' placeholder='Email'></IonInput>
                  <IonInput label='Password'type='password' labelPlacement='floating' fill='solid' placeholder='Password'></IonInput>
                  <IonButton expand='block' fill='solid' color='primary'>Login</IonButton>
              </IonCardContent>
              <IonButton href='/insc' fill='clear'>Creer un compte</IonButton>
          </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
