import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.png'; // Example image

const scrollRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 220px; /* Adjust height as needed */
`;

const Row = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${props => props.direction === 'right' ? scrollRight : scrollLeft} 20s linear infinite;
  &:hover {
    animation-play-state: paused; /* Pause animation on hover for better UX */
  }
`;

const MemberImage = styled.img`
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  margin: 10px;
  border-radius: 50%; /* Optional: for circular images */
  object-fit: cover; /* Ensure the image covers the area */
`;

const membersRow1 = [
  { id: 1, imgSrc: logo },
  { id: 2, imgSrc: logo },
  { id: 3, imgSrc: logo },
  { id: 4, imgSrc: logo },
  { id: 5, imgSrc: logo },
];

const membersRow2 = [
  { id: 6, imgSrc: logo },
  { id: 7, imgSrc: logo },
  { id: 8, imgSrc: logo },
  { id: 9, imgSrc: logo },
  { id: 10, imgSrc: logo },
];

// Duplicate the arrays to create an infinite scrolling effect
const infiniteMembersRow1 = [...membersRow1, ...membersRow1, ...membersRow1];
const infiniteMembersRow2 = [...membersRow2, ...membersRow2, ...membersRow2];

const Carousel = () => {
  return (
    <CarouselContainer>
      <Row direction="right">
        {infiniteMembersRow1.map((member, index) => (
          <MemberImage key={`${member.id}-${index}`} src={member.imgSrc} alt={`Member ${member.id}`} />
        ))}
      </Row>
      <Row direction="left">
        {infiniteMembersRow2.map((member, index) => (
          <MemberImage key={`${member.id}-${index}`} src={member.imgSrc} alt={`Member ${member.id}`} />
        ))}
      </Row>
    </CarouselContainer>
  );
};

export default Carousel;