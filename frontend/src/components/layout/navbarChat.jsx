import hamburguer from "@/assets/hamburger.png";
import IAavatar1 from "@/assets/IAavatar1.png";
import logoHubDeDados from "@/assets/logos/logoHubDeDados.png";
import setaVoltar from "@/assets/setaVoltar.png";
import { useNavigate } from "react-router-dom";

export default function NavbarChat() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="bg-blue-950 fixed top-0 w-full flex items-center p-6 z-50">
				<img src={hamburguer} alt="Menu" className="h-8" />
				<img
					src={logoHubDeDados}
					alt="Logo Hub de Dados"
					className="h-12 ml-auto"
				/>
			</div>

			<div className="bg-[#CDE2F5]/50 backdrop-blur-md fixed top-0 w-full flex items-center p-6 py-4 mt-24 space-x-4 z-40">
				<div onClick={() => navigate("/")}>
					<img src={setaVoltar} alt="Seta" className="h-4" />
				</div>

				<img
					src={IAavatar1}
					alt="Avatar IA"
					className="h-16 rounded-full border-white border-2"
				/>
				<span className="font-bold ">
					Assistente Virtual
					<br />
					Hub de Dados Abertos
				</span>
			</div>
		</div>
	);
}
