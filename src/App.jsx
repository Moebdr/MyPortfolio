import { useEffect } from "react";
import LandingPage from "./pages/landingPage";





function App() {

  useEffect(() => {

    document.title = " Moebdr Portfolio";
  }, []);

  return (
<>
    <LandingPage/>
 </>
  );
}

export default App;
