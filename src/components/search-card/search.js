import React, { useState } from 'react';
import './search.css';

function SearchCard() {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    members: '',
  });

  const [errors, setErrors] = useState({
    destination: '',
    date: '',
    members: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Clear errors when the user starts typing
    setErrors({ ...errors, [id]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { destination: '', date: '', members: '' };

    if (!formData.destination) {
      newErrors.destination = 'Destination is required';
      isValid = false;
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
      isValid = false;
    }

    if (!formData.members || formData.members <= 0) {
      newErrors.members = 'Please select a valid number of members';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission, e.g., send data to an API
    }
  };

  return (
    <div className='search-card-container'>
      <div className='search-card-text'>
        <h3>Your journey begins with Parikrama</h3>
        <p>Each destination is a new beginning, a chance to see the world with fresh eyes</p>
      </div>
      <form className='search-bar' onSubmit={handleSubmit}>
        <label className='to-input-label'>Where</label>
        <input
          type='text'
          placeholder='Going to'
          id='destination'
          className='to-input'
          value={formData.destination}
          onChange={handleChange}
        />
        {errors.destination && <span className='error'>{errors.destination}</span>}

        <label className='date-input-label'>Choose Date</label>
        <input
          type='date'
          id='date'
          className='date-input'
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <span className='error'>{errors.date}</span>}

        <label className='members-input-label'>Choose Members</label>
        <input
          type='number'
          placeholder='Select Members'
          id='members'
          className='members-input'
          value={formData.members}
          onChange={handleChange}
        />
        {errors.members && <span className='error'>{errors.members}</span>}

        <button type='submit' className='search-btn'>Search</button>
      </form>
    </div>
  );
}

export default SearchCard;
