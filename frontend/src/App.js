import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddReminder from './components/AddReminder';
import ReminderList from './components/ReminderList';
import UpdateReminder from './components/UpdateReminder';
import HealthDataAdd from "./components/HealthDataAdd";
import HealthDataView from "./components/HealthDataView";
import UpdateHealthData from "./components/UpdateHealthData";
import HealthDataDashboard from "./components/HealthDataDashboard";
import HomePage from "./components/HomePage";
import EmergencyContacts from "./components/EmergencyContacts";
import DoctorAppointments from "./components/DoctorAppointments";
import OrderPrescription from "./components/PrescriptionOrder";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/doctor-appointments" element={<DoctorAppointments />} />
          <Route path="/prescription-order" element={<OrderPrescription />} />
          <Route path="/remainderlist" element={<ReminderList />} />
          <Route path="/add" element={<AddReminder />} />
          <Route path="/update/:id" element={<UpdateReminder />} />

          <Route path="/addhealthdata" element={<HealthDataAdd />} />
          <Route path="/viewhealthdata" element={<HealthDataView />} />
          <Route path="/updatehealthdata/:id" element={<UpdateHealthData />} />
          <Route path="/dashboard" element={<HealthDataDashboard />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
