import React, { useState } from 'react';
import { Typography } from '@mui/material';
import EventSection from './EventSection';
import Schedule from './Schedule';
import FAQSection from './FAQSection';
import Chatbot from './Chatbot';
import ContactSection from '../../components/footer/ContactSection';
import ProfileCard from '../../components/card/ProfileCard';
import EventDialogBox from '../../components/dailog/EventDialogBox';
import { Activity } from '../../data/User';
import { styled } from '@mui/system';

const EventLanding = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleExploreClick = (event) => {
    setSelectedEvent(event);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <EventSection />
      <StyledHeading variant="h4" sx={{ marginY: 2 }}>
        Activity
      </StyledHeading>
      <ProfileCard data={Activity} onExploreClick={handleExploreClick} />
      <Schedule />
      <FAQSection />
      <Chatbot />
      <ContactSection />
      <EventDialogBox
        open={dialogOpen}
        onClose={handleCloseDialog}
        eventData={selectedEvent}
      />
    </>
  );
};



const StyledHeading = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'left',
  marginBottom: '16px',
  '@media (max-width: 768px)': {
    fontSize: '1.8rem',
    marginBottom: '12px',
  },
  '@media (max-width: 480px)': {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
});
export default EventLanding