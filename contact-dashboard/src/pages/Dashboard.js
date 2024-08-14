import React, { useEffect, useState } from 'react';
import DashboardTable from '../components/DashboardTable';
import MapView from '../components/MapView'
import { getContacts } from '../utils/localStorage';

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      const storedContacts = await getContacts();
      setContacts(storedContacts);
    }
    fetchContacts();
  }, []);

  return (
    <div className="dashboard">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Dashboard</h2>
      <DashboardTable contacts={contacts} />
      <MapView />
    </div>
  );
};

export default Dashboard;
