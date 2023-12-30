import { IonInfiniteScroll,IonInfiniteScrollContent,IonContent, IonGrid, IonHeader, IonPage, IonTitle,IonRow, IonCol, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonList, IonItem } from "@ionic/react";

import '../assets/css/Profile.css';
import bmw from "../images/bm.jpg";
const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
               
            </IonHeader>
            <IonContent>
               <div id="profile" >
                    <img alt="bmw" src={bmw} id="pdp"></img>
                    <h4 id="profile-name">Toavina Razakarivony</h4>
               </div>
               <br/>
                <IonToolbar id="profile-toolbar">
                    <IonTitle><strong>Mes medias</strong></IonTitle>
                </IonToolbar>
                <IonGrid id="profile-grid">
                    <IonList>
                        <IonItem>
                            <IonRow>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonRow>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonRow>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonRow>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonRow>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonRow>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonRow>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonRow>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                                <IonCol>
                                    <img alt="bmw" src={bmw}></img>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                    </IonList>
                    <IonInfiniteScroll>
                        <IonInfiniteScrollContent></IonInfiniteScrollContent>
                    </IonInfiniteScroll>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default Profile;