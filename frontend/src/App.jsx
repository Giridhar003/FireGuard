import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import EmergencyReport from './pages/EmergencyReport';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Trading from './pages/Trading';
import HomeSafetyGuide from './pages/resources/HomeSafetyGuide';
import WorkplaceSafety from './pages/resources/WorkplaceSafety';
import FireEvacuation from './pages/resources/FireEvacuation';
import FireExtinguisherGuide from './pages/resources/FireExtinguisherGuide';
import FirstAidBasics from './pages/resources/FirstAidBasics';
import EmergencyGuidelines from './pages/resources/EmergencyGuidelines';
import TrainingMaterials from './pages/resources/TrainingMaterials';
import EquipmentManual from './pages/resources/EquipmentManual';
import SafetyProtocols from './pages/resources/SafetyProtocols';
import ContactDirectory from './pages/resources/ContactDirectory';
import IncidentReports from './pages/resources/IncidentReports';
import AdminDashboard from './pages/AdminDashboard';
import FirefighterDashboard from './pages/FirefighterDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function AppContent() {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/emergency-report" element={<EmergencyReport />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/firefighter/dashboard" 
            element={
              <ProtectedRoute allowedRoles={['firefighter']}>
                <FirefighterDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute allowedRoles={['admin', 'firefighter']}>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminPanel />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/resources/home-safety" 
            element={<HomeSafetyGuide />} 
          />
          <Route 
            path="/resources/workplace-safety" 
            element={<WorkplaceSafety />} 
          />
          <Route 
            path="/resources/fire-evacuation" 
            element={<FireEvacuation />} 
          />
          <Route 
            path="/resources/fire-extinguisher" 
            element={<FireExtinguisherGuide />} 
          />
          <Route 
            path="/resources/first-aid" 
            element={<FirstAidBasics />} 
          />
          <Route 
            path="/resources/emergency-guidelines" 
            element={<EmergencyGuidelines />} 
          />
          <Route 
            path="/resources/training-materials" 
            element={<TrainingMaterials />} 
          />
          <Route 
            path="/resources/equipment-manual" 
            element={<EquipmentManual />} 
          />
          <Route 
            path="/resources/safety-protocols" 
            element={<SafetyProtocols />} 
          />
          <Route 
            path="/resources/contact-directory" 
            element={<ContactDirectory />} 
          />
          <Route 
            path="/resources/incident-reports" 
            element={<IncidentReports />} 
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;