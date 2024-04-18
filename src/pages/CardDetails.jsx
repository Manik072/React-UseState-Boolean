import React from 'react'
import { useParams } from 'react-router-dom';

export default function CardDetails() {
    const { id } = useParams();
    const fetchCardDetails = (cardId) => {
        // Static data as an example
        const staticCardData = [
          { id: 1, title: 'Card 1', content: 'Details of Card 1...' },
          { id: 2, title: 'Card 2', content: 'Details of Card 2...' },
          // ... more cards
        ];
    
        // Find the card with the specified id
        const selectedCard = staticCardData.find(card => card.id === parseInt(cardId, 10));
    
        return selectedCard || { title: 'Not Found', content: 'Card not found' };
      };
      const cardDetails = fetchCardDetails(id);

    
  return (
    <div>
    <h2>{cardDetails.title}</h2>
    <p>{cardDetails.content}</p>
  </div>
  )
}
