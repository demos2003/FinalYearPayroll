import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import axios from 'axios';

function TimePicker2() {
  const [value, onChange] = useState('10:00');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('/api/time', {
         time: value 
        });
        res.data && window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='TimeSetter'>
      <TimePicker onChange={onChange} value={value} />
      <button style={{marginLeft:10, backgroundColor:"#5D3FD3", border:"none", width:70}} onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default TimePicker2