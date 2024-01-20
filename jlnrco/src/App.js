import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, LightTheme } from "baseui";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
const engine = new Styletron();

function App() {
  return (
    <Router>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <AppRoutes />
        </BaseProvider>
      </StyletronProvider>
    </Router>
  );
}

export default App;
