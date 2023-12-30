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
                            <strong>Carole Randrianarisoa</strong>
                            <br/>
                            <IonNote>Je t'aime aussii Toavina!Bisouuuu</IonNote>
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
                            <IonNote>Je t'aime aussii bebe !Bonne nuit</IonNote>
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
                            <strong>Agnes Ralaialitiana</strong>
                            <br/>
                            <IonNote>Je t'aime aussii babe!Bisouuuu</IonNote>
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