import { IonButton, IonCard, IonContent, IonHeader, IonInput, IonPage, IonTitle,IonIcon, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonList, IonItem, IonThumbnail, IonLabel, IonAlert, IonChip, IonAvatar, IonFab, IonFabButton, IonFabList, IonBadge, RefresherEventDetail, IonRefresher, IonRefresherContent, IonSearchbar, IonRouterOutlet } from "@ionic/react";
import "../assets/css/accueil.css";
import bmw from "../images/bm.jpg";
import { search,chatbubbleOutline,chatboxOutline,add,imageOutline} from "ionicons/icons";
import { Route, useHistory } from "react-router";
import Header from "./Header";
import Publication from "./Publication";
import Decouvrir from "./Decouvrir";
import Plus from "./Plus";
import { IonReactRouter } from "@ionic/react-router";

import Tab1 from "./Tab1";
const Accueil : React.FC = () => {
    const history = useHistory();
    function pullRefresh(event: CustomEvent<RefresherEventDetail>){
        setTimeout(() => {
            event.detail.complete();
        },2000);
    }   
    return(
        <IonPage>
            <Header />
            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={pullRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonFab slot="fixed" vertical="center"  horizontal="end">
                    <IonFabButton>
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                    <IonFabList>
                        <IonFabButton>
                            <IonIcon icon={imageOutline}>   
                            </IonIcon> 
                        </IonFabButton>
                    </IonFabList>
                </IonFab>
                <Publication />
                <Publication />
                <Publication />
                <Plus />
                <Decouvrir />
            </IonContent>
        </IonPage>
    )
}
export default Accueil;