import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToggle,
  IonToolbar,
  IonPage,
  IonAlert,
} from '@ionic/react';
import { create } from 'ionicons/icons';

import '../assets/css/Setting.css'; // Use correct case for file names

const Setting = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Title</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={create} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color={darkMode ? 'dark' : 'light'}>
        <IonList inset={true}>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel>Check for a free puppy</IonLabel>
            <IonCheckbox />
          </IonItem>
          <IonItem>
            <IonLabel>Enable Notifications</IonLabel>
            <IonToggle checked={darkMode} onIonChange={toggleDarkMode} />
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem>
            <IonLabel>Item 1</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Item 2</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Item 3</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>
            <IonButton id="btn-deco">
              Se deconnecter
            </IonButton>
            <IonAlert trigger='btn-deco' header='Se deconnecter' message="Voulez vous vraiment vous deconnecter?" 
              buttons={[
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                    console.log('Confirm Cancel');
                  }
                }
                ,
                {
                  text: 'Ok',
                  role: 'ok',
                  handler: () => {
                    console.log('Confirm Ok');
                    history.push('/Tab1');
                  }
                }
              ]}>
            </IonAlert>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Setting;
