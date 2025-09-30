import EmailDashboard from "./EmailDashboard";
import DiviceVerification from "./deviceVerification";
import Cards from "./Cards";

const Index = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Email Dashboard</h1>
      <DiviceVerification />
      <Cards />
      <EmailDashboard />
    </div>
  );
};

export default Index;
