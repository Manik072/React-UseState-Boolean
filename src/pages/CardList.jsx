import React from 'react'
import { Link } from 'react-router-dom';

export default function CardList() {
    const cardData = [
        { id: 1, title: 'Card 1', content: 'Details of Card 1...' },
        { id: 2, title: 'Card 2', content: 'Details of Card 2...' },
        // ... more cards
      ];
  return (
    <div>
      <h2>Card List</h2>
      {cardData.map(card => (
        <div key={card.id}>
          <h3>{card.title}</h3>
          <p>{card.content.substring(0, 100)}...</p>
          {/* Link to CardDetails with card id as a parameter */}
          <Link to={`/card/${card.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  )
}
