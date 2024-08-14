import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getContacts } from '../utils/localStorage';

const MapView = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      const storedContacts = await getContacts();
      setContacts(storedContacts);
    }
    fetchContacts();
  }, []);

  return (
    <div className="mt-6">
      <div className="relative h-96 w-full">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={2}
          className="h-full w-full rounded-lg"
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {contacts.map((contact, index) => (
            <Marker key={index} position={[contact.latitude, contact.longitude]}>
              <Popup>
                {contact.name}<br />{contact.phoneNumber}<br />{contact.email}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapView;
