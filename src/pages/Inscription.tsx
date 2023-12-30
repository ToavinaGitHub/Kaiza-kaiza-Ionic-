import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonInput,IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../assets/css/inscription.css';

import logo from '../images/logo.png';
const Inscription: React.FC = () => {
  return (
    <IonPage>
    <IonContent id="login-ecran">
        <IonCard>
            <img alt="bmw" src={logo} id="login-logo"></img>
            <IonCardHeader>
                <IonCardTitle class="card-title">Sign in</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonInput label='Nom' labelPlacement='floating' fill='solid' placeholder='Nom'></IonInput>
                <IonInput label='Prenom' labelPlacement='floating' fill='solid' placeholder='Prenom'></IonInput>
                <IonInput type="date" label='Date de naissance' labelPlacement='floating' fill='solid' placeholder='Date de naissance'></IonInput>
                <IonInput label='Email' labelPlacement='floating' fill='solid' placeholder='Email'></IonInput>
                <IonInput  type="password" label='Password' labelPlacement='floating' fill='solid' placeholder='Password'></IonInput>
                <IonSelect label="Modèle" labelPlacement="floating" fill="solid">
                <IonSelectOption>E30</IonSelectOption>
                  <IonSelectOption>E36</IonSelectOption>
                  <IonSelectOption>E46</IonSelectOption>
                  <IonSelectOption>E90</IonSelectOption>
                  <IonSelectOption>E92</IonSelectOption>
                  <IonSelectOption>F30</IonSelectOption>
                  <IonSelectOption>F32</IonSelectOption>
                  <IonSelectOption>G20</IonSelectOption>
                  <IonSelectOption>G22</IonSelectOption>
                  <IonSelectOption>M3 E30</IonSelectOption>
                  <IonSelectOption>M3 E36</IonSelectOption>
                  <IonSelectOption>M3 E46</IonSelectOption>
                  <IonSelectOption>M3 E90</IonSelectOption>
                  <IonSelectOption>M3 E92</IonSelectOption>
                  <IonSelectOption>M4 F82</IonSelectOption>
                  <IonSelectOption>M4 G82</IonSelectOption>
                  <IonSelectOption>X3</IonSelectOption>
                  <IonSelectOption>X5</IonSelectOption>
                  <IonSelectOption>X6</IonSelectOption>
              </IonSelect>
                <IonButton expand='block' fill='solid' color='primary'>Creer un compte</IonButton>
            </IonCardContent>
            <IonButton href='/Tab1' fill='clear'>J'ai deja un compte</IonButton>
        </IonCard>
    </IonContent>
  </IonPage>
  );
};

export default Inscription;
