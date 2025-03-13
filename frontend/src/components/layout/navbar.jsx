import hamburguer from "@/assets/hamburger.png";
import logoHubDeDados from "@/assets/logos/logoHubDeDados.png";

export default function Navbar() {
	return (
		<div className="bg-blue-950 fixed top-0 w-full flex items-center p-6 z-50">
			<img src={hamburguer} alt="Logo Senac" className="h-8" />
			<img src={logoHubDeDados} alt="Logo Senac" className="h-12 ml-auto" />
		</div>
	);
}
