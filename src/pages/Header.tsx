import {IonPage,IonAvatar,IonLabel,IonChip,IonAlert, IonContent, IonHeader, IonTitle, IonItem } from "@ionic/react";
import bmw from "../images/bm.jpg";
import logo from "../images/logo.png";
import { useHistory } from "react-router";
import '../assets/css/header.css';
const Header :React.FC = () => {
    const history = useHistory();
    return (
        <IonHeader id="head">
            <img alt="Logo" src={logo} id="img-logo"></img>
            <IonChip id="profile-head">
                <IonAvatar>
                    <img alt="bmw" src={bmw}></img>
                </IonAvatar>
                <IonLabel>Toavina Razakarivony</IonLabel>
            </IonChip>
            <IonAlert trigger='profile-head' header='Se deconnecter' message="Voulez vous vraiment vous deconnecter?" 
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
            </IonHeader>
    )
}
export default Header;