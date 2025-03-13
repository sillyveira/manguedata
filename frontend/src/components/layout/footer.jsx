import logoHubDeDados from "@/assets/logos/logoHubDeDados.png";
import logoPrefeituraRec from "@/assets/logos/logoPrefeituraRec.png";

export default function Footer() {
	return (
		<div className="flex flex-col gap-7 pt-10 pb-12 px-7 bg-blue-950">
			<span className="font-bold text-xl text-white">
				Não achou o que procurava?
			</span>
			<button className="bg-gradient-to-r from-blue-100 to-green-200 text-white rounded-full p-3 px-5 w-full text-center">
				Abrir Central de Dados Abertos
			</button>
			<div className="flex items-center justify-center gap-5 mt-5">
				<img src={logoHubDeDados} alt="Logo Senac" className="h-12" />
				<div className="h-12 border-white border"></div>
				<img src={logoPrefeituraRec} alt="Logo Senac" className="h-12" />
			</div>
		</div>
	);
}
