import { useState, useEffect } from 'react';

// Component to display each doctor/patient
function Patient({ patient, doctor }) {
  return (
    <li>
      <strong>{patient.name}</strong> - Address: {patient.address}, Doctor: {doctor ? doctor.name : 'Unknown'}
    </li>
  );
}

// Main App Component
const HospitalApp = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPatientsAndDoctors = async () => {
    try {
      // Fetch patients and doctors in parallel
      const [patientsResponse, doctorsResponse] = await Promise.all([
        fetch('http://localhost:3000/api/patients'),
        fetch('http://localhost:3000/api/doctors')
      ]);

      // Check if both requests were successful
      if (!patientsResponse.ok || !doctorsResponse.ok) {
        throw new Error('Failed to fetch patients or doctors');
      }

      // Parse the data as JSON
      const patientsData = await patientsResponse.json();
      const doctorsData = await doctorsResponse.json();

      // Store the data in the state
      setPatients(patientsData);
      setDoctors(doctorsData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect for fetching patients and doctors from the API
  useEffect(() => {
    fetchPatientsAndDoctors();
  }, []);

  // Helper function to find the doctor by doctor_id
  const findDoctorById = (doctor_id) => {
    return doctors.find(doctor => doctor.id === doctor_id);
  };

  // Display loading, error, or doctor/patient list
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Hospital Patients</h1>
      <ul>
        {patients.map(patient => {
          const doctor = findDoctorById(patient.doctor_id);
          return <Patient key={patient.id} patient={patient} doctor={doctor_id} />;
        })}
      </ul>
    </div>
  );
}

export default HospitalApp;
