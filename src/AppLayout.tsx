import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./shared/components/Navbar";

export default function AppLayout() {
	return (
		<>
			<Navbar />
			<Container className="p-4" fluid>
				<ToastContainer />
				<Outlet />
			</Container>
		</>
	);
}
