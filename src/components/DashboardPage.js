import React from 'react';
import Header from './Header'
import EventList from './EventList';
import EventListFilters from './EventListFilters'

const DashboardPage = () => (
  <div>
    <Header />
    <EventListFilters />
    <EventList />
  </div>

);

export default DashboardPage;
