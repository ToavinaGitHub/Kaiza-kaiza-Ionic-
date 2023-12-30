import { IonCard, IonCardHeader, IonCardSubtitle, IonChip, IonPage,IonAvatar,IonLabel, IonCardContent, IonButton, IonIcon } from "@ionic/react";

import '../assets/css/publication.css';
import { heartOutline } from "ionicons/icons";
import bmw from "../images/bm.jpg";
const Publication: React.FC = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardSubtitle>
                    <IonChip className="user-pub">
                        <IonAvatar>
                            <img alt="bmw" src={bmw}></img>
                        </IonAvatar>
                        <IonLabel className="users">Toavina Razakarivony</IonLabel>
                    </IonChip>
                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                Salama daholo!! Zany indray ny bolide efa nisy 200 000km ny compteur sady tsy misy olana
                <img alt="bmw" src={bmw} className="sary-pub"></img>
                <IonButton fill="clear" className="like"><IonIcon icon={heartOutline}></IonIcon></IonButton>
            </IonCardContent>
        </IonCard>
    )
}
export default Publication;