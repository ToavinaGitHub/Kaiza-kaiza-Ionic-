import { IonContent, IonHeader, IonLabel, IonList, IonNote, IonPage, IonText, IonTitle,IonIcon, IonItem, IonSearchbar } from "@ionic/react";

import { chevronForward } from "ionicons/icons";

import "../assets/css/Message.css";
const Message : React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonSearchbar placeholder="Rechercher" animated={true} id="search-bar"></IonSearchbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <div className="unread-indicator-wrapper" slot="start">
                            <div className="unread-indicator"></div>
                        </div>
                        <IonLabel>
                            <strong>Toavina Razakarivony</strong>
                            <br/>
                            <IonNote>Bonjour ,recu!Mercii</IonNote>
                        </IonLabel>
                        <div className="metadata-end-wrapper" slot="end">
                            <IonNote color="medium">06:11</IonNote>
                            <IonIcon color="medium" icon={chevronForward}></IonIcon>
                        </div>
                    </IonItem>
                    <IonItem>
                        <div className="unread-indicator-wrapper" slot="start">
                           
                        </div>
                        <IonLabel>
                            <strong>Cathie Andrianirina</strong>
                            <br/>
                            <IonNote>Bonne soirée</IonNote>
                        </IonLabel>
                        <div className="metadata-end-wrapper" slot="end">
                            <IonNote color="medium">12:67</IonNote>
                            <IonIcon color="medium" icon={chevronForward}></IonIcon>
                        </div>
                    </IonItem>
                    <IonItem>
                        <div className="unread-indicator-wrapper" slot="start">
                            
                        </div>
                        <IonLabel>
                            <strong>Agnes Randrianarivony</strong>
                            <br/>
                            <IonNote>Oke A demain</IonNote>
                        </IonLabel>
                        <div className="metadata-end-wrapper" slot="end">
                            <IonNote color="medium">06:11</IonNote>
                            <IonIcon color="medium" icon={chevronForward}></IonIcon>
                        </div>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}
export default Message;
