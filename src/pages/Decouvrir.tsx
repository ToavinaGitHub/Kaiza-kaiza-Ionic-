import { IonCard,IonCardTitle,IonCardSubtitle,IonCardContent,IonButton,IonIcon,IonAlert } from "@ionic/react";

import { chatbubbleOutline } from "ionicons/icons";
import bmw from "../images/bm.jpg";
import '../assets/css/decouvrir.css';
const Decouvrir: React.FC = () => {
    return(
        <IonCard>
            <IonCardTitle className="card-title">
                Decouvrez
            </IonCardTitle>
            <img alt="bmw" src={bmw}></img>
            <IonCardSubtitle class="card-title">
                 BMW e90
            </IonCardSubtitle>
            <IonCardContent>
                    Bolide allemande de 2008 avec 200 000km au compteur et un moteur de 200ch !
            </IonCardContent>
            <IonCardContent>
            <IonButton fill="clear" id="btn-comment"> 
                <IonIcon icon={chatbubbleOutline}></IonIcon>
                <IonAlert trigger="btn-comment"
                                header="Avis"
                                message="Donnez votre avis sur cette voiture"
                                inputs={[

                                    {
                                        name: 'avis',
                                        type: 'textarea',
                                        placeholder: 'Votre avis'
                                    }
                                    ,
                                    {
                                        placeholder: 'Note sur 10',
                                        type: 'number',
                                    }
                                ]}
                                buttons={[
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                    },
                                    {
                                        text: 'Envoyer',
                                        role: 'envoyer',
                                        handler: () => {
                                            console.log('Avis envoyé');
                                        }
                                    }
                                ]}
                            >

                </IonAlert>
            </IonButton>
            <IonButton className="btn-plus" fill="clear" id="btn-savoirPlus"> 
                            En savoir plus
            </IonButton>
            <IonAlert trigger="btn-savoirPlus" header="En savoir plus?" 
                            message="Vous allez etre dirigés vers un autre page" 
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
                                    }
                                }
                            ]}>

                </IonAlert>
            </IonCardContent>
        </IonCard>
    )
}
export default Decouvrir;