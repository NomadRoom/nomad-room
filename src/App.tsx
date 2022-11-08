import { AuthProvider } from "./contexts/AuthContext";
import { RoutesMain } from "./routes/routes";


import { StyledGlobal } from "./styles/global";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
      <StyledGlobal />
    </>
  );
};

export default App;
