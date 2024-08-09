import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { reduxStore } from "./reduxToolkit/store";

const root = document.getElementById("root");

if (root) {
	ReactDOM.createRoot(root).render(
		<Provider store={reduxStore}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
}
