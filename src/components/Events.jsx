import React, { useState , useEffect} from 'react'
import Event from './Event'
import { Row, Col, Alert } from 'react-bootstrap'
// importer la liste des events depuis le fichier json
import eventsJson from '../data/events.json'

export default function Events() {
    // État pour gérer les événements
    const [events, setEvents] = useState(eventsJson);
    // État pour gérer l'affichage de l'alerte
    const [showAlert, setShowAlert] = useState(false);
    const [bookedEventName, setBookedEventName] = useState('');

    // question 10
    // État pour le message de bienvenue
    const [showWelcome, setShowWelcome] = useState(false);

    // useEffect pour le cycle de vie du composant
    useEffect(() => {
        // Montage du composant (componentDidMount)
        console.log("Component mounted");
        
        // Afficher le message de bienvenue après 3 secondes
        const welcomeTimer = setTimeout(() => {
            setShowWelcome(true);
            
            // Faire disparaître le message après 3 secondes
            setTimeout(() => {
                setShowWelcome(false);
            }, 3000);
        }, 3000);

        // Nettoyage (componentWillUnmount)
        return () => {
            console.log("Component will unmount");
            clearTimeout(welcomeTimer);
        };
    }, []); // [] signifie que cet effet s'exécute uniquement au montage

    // useEffect pour suivre les mises à jour du composant
    useEffect(() => {
        console.log("Component updated - Events changed");
    }, [events]); // S'exécute à chaque changement de events,
    // function buy
    const buy = (index) => {
        // Créer une copie des événements
        const updatedEvents = [...events];
        
        // Mettre à jour l'événement à l'index spécifié
        const updatedEvent = {
            ...updatedEvents[index],
            nbTickets: updatedEvents[index].nbTickets - 1,
            nbParticipants: updatedEvents[index].nbParticipants + 1
        };
        
        updatedEvents[index] = updatedEvent;
        if(updatedEvent.nbTickets === 0) {
          // Si plus de tickets disponibles, on peut désactiver le bouton d'achat ou afficher un message
          console.log("No more tickets available for this event.");
          // désactiver le bouton d'achat ou afficher un message d'indisponibilité

        }
        console.log("Event booked:", updatedEvent);
        
        // Mettre à jour le state
        setEvents(updatedEvents);
        setBookedEventName(updatedEvent.name);
        setShowAlert(true);
        
        // Le msg doit disparaître après 3 secondes
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    // function toggleLike - Nouvelle fonction pour gérer Like/Dislike
    const toggleLike = (index) => {
        const updatedEvents = [...events];
        updatedEvents[index] = {
            ...updatedEvents[index],
            like: !updatedEvents[index].like
        };
        setEvents(updatedEvents);
    };
    return (
        <>
            <div>
              {/* Message de bienvenue */}
                {showWelcome && (
                    <Alert variant="info" onClose={() => setShowWelcome(false)} dismissible>
                        Hey welcome to Esprit Events
                    </Alert>
                )}
                <h2>Events List:</h2>

                
                {/* Alerte de confirmation */}
                {showAlert && (
                    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                        You have booked the event: {bookedEventName}
                    </Alert>
                )}
                
                {/* Row pour que les card soient sur la même ligne et col pour que les données d'un event soient sur la même colonne */}
                <Row>   
                    {events.map((event, index) => (
                        <Col key={index} md={4}>
                            <Event event={event}
                             buy={() => buy(index)}
                             toggleLike={() => toggleLike(index)} />
                        </Col>
                    ))}
                </Row>
            </div> 
        </>
    );
}