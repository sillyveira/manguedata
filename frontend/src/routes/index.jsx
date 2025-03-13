import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";

import Chat from "@/pages/chat";
import Index from "@/pages/index";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/chat/:message?" element={<Chat />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
