import categorias_recentes_1 from "@/assets/categorias_recentes/1.png";
import categorias_recentes_2 from "@/assets/categorias_recentes/2.png";
import categorias_recentes_3 from "@/assets/categorias_recentes/3.png";
import categorias_recentes_4 from "@/assets/categorias_recentes/4.png";
import categorias_recentes_5 from "@/assets/categorias_recentes/5.png";
import categorias_recentes_6 from "@/assets/categorias_recentes/6.png";
import IAavatar1 from "@/assets/IAavatar1.png";
import talvez_queira_saber_1 from "@/assets/talvez_queira_saber/1.png";
import talvez_queira_saber_2 from "@/assets/talvez_queira_saber/2.png";
import talvez_queira_saber_3 from "@/assets/talvez_queira_saber/3.png";
import talvez_queira_saber_4 from "@/assets/talvez_queira_saber/4.png";
import talvez_queira_saber_5 from "@/assets/talvez_queira_saber/5.png";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Button from "@/components/ui/button";
import ImageCard from "@/components/ui/imageCard";
import SearchBar from "@/components/ui/searchBar";
import { useNavigate } from "react-router-dom";

export default function Chat() {
	const navigate = useNavigate();
	return (
		<main className="h-screen ">
			<Navbar />

			<div className="flex items-center gap-7 mt-24 p-7 py-10">
				<img src={IAavatar1} alt="Logo Senac" className="h-28" />
				<span className="font-bold text-sm">
					Olá! Sou sua guia pelo universo de informações de Recife. Como posso
					lhe ajudar?
				</span>
			</div>

			<div className="flex overflow-x-auto gap-4 no-scrollbar ">
				<div className="ml-3"></div>
				<Button text="Vai chover onde eu moro?" onClick={() => {}} />
				<Button
					text="Qual bairro tem mais acidentes de trânsito"
					onClick={() => {}}
				/>
				<Button
					text="Quantas creches tem perto do meu bairro"
					onClick={() => {}}
				/>
				<Button
					text="Quais são as ruas mais movimentadas do centro?"
					onClick={() => {}}
				/>
				<div className="mr-3"></div>
			</div>

			<div className="px-7 mt-10">
				<SearchBar placeholder="Pergunte alguma coisa..." />
			</div>

			<div className="flex flex-col gap-7 mt-12 pt-10 pb-14 bg-gradient-to-t from-blue-900 to-blue-200 text-white">
				<span className="font-bold text-xl mx-7">
					Talvez você queira saber sobre...
				</span>
				<div className="flex overflow-x-auto gap-4 no-scrollbar">
					<div className="ml-3"></div>
					<div onClick={() => navigate("/monitoramento-meteorologico")}>
						<ImageCard
							title="Monitoramento Meteorológico"
							image={talvez_queira_saber_1}
							transparent
						/>
					</div>
					<div onClick={() => navigate("/malha-cicloviaria")}>
						<ImageCard
							title="Malha cicloviária de Recife"
							image={talvez_queira_saber_2}
							transparent
						/>
					</div>
					<div onClick={() => navigate("/indisponivel")}>
						<ImageCard
							title="Academias da cidade"
							image={talvez_queira_saber_3}
							transparent
						/>
					</div>
					<div onClick={() => navigate("/indisponivel")}>
						<ImageCard
							title="Sinistros de trânsito"
							image={talvez_queira_saber_4}
							transparent
						/>
					</div>
					<div onClick={() => navigate("/indisponivel")}>
						<ImageCard title="IPTU" image={talvez_queira_saber_5} transparent />
					</div>
					<div onClick={() => navigate("/indisponivel")}>
						<ImageCard
							title="Escolas e creches da rede pública"
							image={talvez_queira_saber_3}
							transparent
						/>
					</div>
					<div className="ml-3"></div>
				</div>
			</div>
			<div className="flex flex-col gap-7 pt-10 pb-14">
				<span className="font-bold text-xl mx-7">
					Categorias recorrentes...
				</span>
				<div className="flex overflow-x-auto gap-4 no-scrollbar">
					<div className="ml-3"></div>
					<div onClick={() => navigate("/indisponivel")}>
						<ImageCard
							title="Mobilidade Urbana"
							image={categorias_recentes_1}
						/>
					</div>
					<div onClick={() => navigate("/indisponivel")}>
						<ImageCard
							title="Infraestrutura e Monitoramento"
							image={categorias_recentes_2}
						/>
					</div>
					<div onClick={() => navigate("/indisponivel")}>
						<ImageCard title="Esportes e lazer" image={categorias_recentes_3} />
					</div>
					<div onClick={() => navigate("/indisponivel")}>
						<ImageCard
							title="Economia e Finanças"
							image={categorias_recentes_4}
						/>
					</div>
					<div onClick={() => navigate("/indisponivel")}>
						<ImageCard title="Saúde" image={categorias_recentes_5} />
					</div>
					<div onClick={() => navigate("/indisponivel")}>
						<ImageCard title="Educação" image={categorias_recentes_6} />
					</div>
					<div className="ml-3"></div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
