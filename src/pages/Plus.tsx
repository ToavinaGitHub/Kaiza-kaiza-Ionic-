import { IonCard,IonCardTitle,IonCardContent,IonSearchbar,IonList,IonItem,IonThumbnail,IonLabel,IonButton } from "@ionic/react"

import bmw from "../images/bm.jpg";
import '../assets/css/plus.css';
const Plus: React.FC = () => {

    return(
        <IonCard>
            <IonCardTitle className="card-title">
                Plus de BMW ?
            </IonCardTitle>
            <IonCardContent>
                <IonSearchbar placeholder="Rechercher..."></IonSearchbar>
                <IonList>
                    <IonItem>
                        <IonThumbnail slot="start">
                            <img alt="bmw" src={bmw}></img>
                        </IonThumbnail>
                        <IonLabel> BMW e30 </IonLabel>
                        <IonButton fill="clear">Details</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start">
                            <img alt="bmw" src={bmw}></img>
                        </IonThumbnail>
                        <IonLabel> BMW e30 </IonLabel>
                        <IonButton fill="clear">Details</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start">
                            <img alt="bmw" src={bmw}></img>
                        </IonThumbnail>
                        <IonLabel> BMW e30 </IonLabel>
                        <IonButton fill="clear">Details</IonButton>
                    </IonItem>       
                </IonList>
            </IonCardContent>                    
        </IonCard>
    )
}
export default Plus;