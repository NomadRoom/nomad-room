import { AuthProvider } from "./contexts/AuthContext";
import { RoutesMain } from "./routes/routes";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
};

export default App;
