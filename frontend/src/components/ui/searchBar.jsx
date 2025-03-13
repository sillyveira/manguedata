/* eslint-disable react/prop-types */
import enviarIcon from "@/assets/enviarIcon.png";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ placeholder }) {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/chat?message=" + e.target[0].value);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center gap-3 rounded-full p-3 px-5 border-blue-950 border bg-white"
		>
			<input placeholder={placeholder} className="w-full focus:outline-none" />

			<button type="submit">
				<img src={enviarIcon} alt="Seta" className="h-5 ml-auto" />
			</button>
		</form>
	);
}
