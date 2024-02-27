import React, { useEffect, useState } from 'react';
import EntityTable from '../Components/EntityTable';

const Color = () => {
  const [colors, setColors] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    fetch('https://localhost:44397/api/Color')
      .then(response => response.json())
      .then(data => {
        setColors(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [update]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://localhost:44397/api/color?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log(`Color with ID ${id} deleted successfully`);
        setUpdate(update + 1);
      } else {
        console.error(`Error deleting color with ID ${id}:`, response.statusText);
      }
    } catch (error) {
      console.error('Error deleting color:', error);
    }
  };

  return (
    <EntityTable data={colors} onDelete={handleDelete} entityName={'Colors'} />
  )
};

export default Color;