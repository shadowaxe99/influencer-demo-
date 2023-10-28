```javascript
import React, { useState } from 'react';

const ProfileCreationForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const profileData = {
      name,
      age,
      skills,
      experience
    };
    console.log(profileData);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={e => setAge(e.target.value)} required />
      </label>
      <label>
        Skills:
        <input type="text" value={skills} onChange={e => setSkills(e.target.value)} required />
      </label>
      <label>
        Experience:
        <textarea value={experience} onChange={e => setExperience(e.target.value)} required />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ProfileCreationForm;
```