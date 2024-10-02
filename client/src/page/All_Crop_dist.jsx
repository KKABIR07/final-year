import React, { useState, useEffect } from 'react';

const All_Crop_dist = () => {
  const [districts, setDistricts] = useState([]);
  const [selectedDistrictData, setSelectedDistrictData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [districtNames , setdistrictNames] = useState([])

  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:5000/api/auth/crops');
        if (!response.ok) throw new Error('Failed to fetch districts');
        const data = await response.json();
        setDistricts(data);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }

      
    };
    

    fetchData();

    
    
  }, []);

  
  
  const handleDistrictChange = async (event) => {
    const districtId = event.target.value;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/cropsBydist/${districtId}`);
      const districtData = await response.json();
      setSelectedDistrictData(districtData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDataToText = (data) => {
    return Object.entries(data).map(([category, items]) => {
      // Check if items is an array or object and format accordingly
      if (Array.isArray(items)) {
        return `${category}:\n${items.map(item => {
          // Check if item is an object
          if (typeof item === 'object' && item !== null) {
            return Object.entries(item).map(([key, value]) => {
              // Exclude _id from being displayed
              if (key === '_id') return '';
              return `  ${key}: ${Array.isArray(value) ? value.join(', ') : value}`;
            }).filter(line => line !== '').join('\n');
          }
          // Handle non-object items
          return `  ${item}`;
        }).join('\n\n')}`;
      } else if (typeof items === 'object' && items !== null) {
        return `${category}:\n${Object.entries(items).map(([key, value]) => {
          // Exclude _id from being displayed
          if (key === '_id') return '';
          return `  ${key}: ${Array.isArray(value) ? value.join(', ') : value}`;
        }).filter(line => line !== '').join('\n')}`;
      } else {
        return `${category}: ${items}`;
      }
    }).join('\n\n');
  };


  

  return (
    <div className='p-4 space-y-3 bg-orange-50'>
      <h1 className='font-semibold font-mono'>Select a District</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <select onChange={handleDistrictChange} defaultValue="" className='border-2 border-black rounded-md p-2'>
        <option value="" disabled>Select a district</option>
        {districts.map((district) => (
          <option key={district._id} value={district._id}>
            {district.District}
          </option>
        ))}
      </select>

      {selectedDistrictData && (
        <div>
        
          {/* <pre>{formatDataToText(selectedDistrictData)}</pre> */}
          <p className='text-center font-semibold text-2xl'>{selectedDistrictData['District']}</p>
          <p className='font-semibold text-xl my-2 text-center'>Field Crops 🌾</p>
          <div className='flex gap-2 flex flex-wrap mt-3 justify-center'>
          {selectedDistrictData['Field Crops'].map((x,i) => (
            <div key={i} className='rounded-xl p-3 bg-green-300 w-[700px]'>
            <p className='font-semibold text-lg'><u>{x.Name}</u></p>
            <p> <span className='font-semibold'>Seasons : </span>{x['Growing Seasons']?.map((y,index) => (
              <span key={index}>{y}</span>
            ))}</p>

            <p><span className='font-semibold'>Temperature : </span>{x.Temperature}</p>
            <p><span className='font-semibold'>Soil-Type : </span>{x['Soil Type']}</p>
            <p><span className='font-semibold'>Fertilizers : </span>{x.Fertilizer}</p>
            <p className='flex gap-2'><span className='font-semibold'> Pesticides : </span> {x['Pesticides']?.map((y,index) => (
              <p key={index}>{y}</p>
            ))}</p>
 
            <p className='flex gap-2'><span className='font-semibold'>Common-pests/diseases : </span> {x['Common Pests/Diseases']?.map((y,index) => (
              <p key={index}>{y}</p>
            ))}</p>
            </div>
          ))} 
          </div>

          <p className='font-semibold text-xl my-2 text-center'>Vegetables 🥦</p>
          <div className='flex gap-2 flex flex-wrap mt-3 justify-center'>
          {selectedDistrictData['Vegetables'].map((x,i) => (
            <div key={i} className='rounded-xl p-3 bg-green-300 w-[700px]'>
            <p className='font-semibold text-lg'><u>{x.Name}</u></p>
            <p> <span className='font-semibold'>Seasons : </span>{x['Growing Seasons']?.map((y,index) => (
              <span key={index}>{y}</span>
            ))}</p>

            <p><span className='font-semibold'>Temperature : </span>{x.Temperature}</p>
            <p><span className='font-semibold'>Soil-Type : </span>{x['Soil Type']}</p>
            <p><span className='font-semibold'>Fertilizers : </span>{x.Fertilizer}</p>
            <p className='flex gap-2'><span className='font-semibold'> Pesticides : </span> {x['Pesticides']?.map((y,index) => (
              <p key={index}>{y}</p>
            ))}</p>
 
            <p className='flex gap-2'><span className='font-semibold'>Common-pests/diseases : </span> {x['Common Pests/Diseases']?.map((y,index) => (
              <p key={index}>{y}</p>
            ))}</p>
            </div>
          ))} 
          </div>

          <p className='font-semibold text-xl my-2 text-center'>Fruits 🥭</p>
          <div className='flex gap-2 flex flex-wrap mt-3 justify-center'>
          {selectedDistrictData['Fruits'].map((x,i) => (
            <div key={i} className='rounded-xl p-3 bg-green-300 w-[700px]'>
            <p className='font-semibold text-lg'><u>{x.Name}</u></p>
            <p> <span className='font-semibold'>Seasons : </span>{x['Growing Seasons']}</p>

            <p><span className='font-semibold'>Temperature : </span>{x.Temperature}</p>
            <p><span className='font-semibold'>Soil-Type : </span>{x['Soil Type']}</p>
            <p><span className='font-semibold'>Fertilizers : </span>{x.Fertilizer}</p>
            <p className='flex gap-2'><span className='font-semibold'> Pesticides : </span> {x['Pesticides']?.map((y,index) => (
              <p key={index}>{y}</p>
            ))}</p>
 
            <p className='flex gap-2'><span className='font-semibold'>Common-pests/diseases : </span> {x['Common Pests/Diseases']?.map((y,index) => (
              <p key={index}>{y}</p>
            ))}</p>
            </div>
          ))} 
          </div>
        </div>
      )}
    </div>
  );
};

export default All_Crop_dist;
