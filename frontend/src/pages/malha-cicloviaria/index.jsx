import IAavatar1 from "@/assets/IAavatar1.png";
import bike01 from "@/assets/dashboards/01bike.png";
import bike02 from "@/assets/dashboards/02bike.png";
import bike03 from "@/assets/dashboards/03bike.png";
import bike04 from "@/assets/dashboards/04bike.png";
import bike05 from "@/assets/dashboards/05bike.png";
import bike06 from "@/assets/dashboards/06bike.png";
import BgBike from "@/assets/dashboards/Bg-ciclo-faixas.png";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { useNavigate } from "react-router-dom";

export default function MonitoramentoMeteorologico() {
	const navigate = useNavigate();
	return (
		<main className="h-screen relative">
			<Navbar />
			<div
				className="mt-24 p-7 py-10 "
				style={{
					backgroundImage: `url(${BgBike})`,
					backgroundSize: "",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "top",
				}}
			>
				<div className="grid grid-cols-2 gap-4">
					<span className="text-2xl font-bold col-span-2 mb-3">
						Malha Cicloviária
					</span>
					<div className="col-span-2">
						<div className=" h-28 flex flex-col gap-2 text-center justify-center ">
							<span className=" text-xl">Extensão de ciclo faixa em Km</span>
							<span className=" text-3xl font-bold">210</span>
						</div>
					</div>
					<div className="col-span-2">
						<div className=" h-28 flex flex-col gap-2 text-center justify-center ">
							<span className=" text-xl">
								Estações de bicicleta distribuídas em Recife
							</span>
							<span className=" text-3xl font-bold">79</span>
						</div>
					</div>
					<div className="col-span-2">
						<div className=" h-28 flex flex-col gap-2 text-center justify-center ">
							<span className=" text-xl">
								Quantidade de ciclovias Inauguradas
							</span>
							<span className=" text-3xl font-bold">84</span>
						</div>
					</div>
					<div className="col-span-2 my-4">
						<button
							className="bg-gradient-to-r from-blue-100 to-green-200 text-white rounded-full p-3 px-5 w-full text-center"
							onClick={() => navigate("/chat")}
						>
							Consultar assistente virtual sobre Malha Cicloviária
						</button>
					</div>
					<div className="col-span-2 flex flex-col gap-4 text-center mt-8">
						<span className="text-3xl font-bold col-span-2 mb-3">Sobre</span>

						<span className="text-xl text-justify">
							Nos últimos anos, o uso da bicicleta como meio de transporte
							principal tem crescido significativamente nas cidades. Além de ser
							uma alternativa ecologicamente sustentável, a bicicleta promove a
							saúde e melhora a qualidade de vida dos ciclistas. Para acompanhar
							essa tendência, as cidades têm investido cada vez mais na
							ampliação da malha cicloviária. Em 20 anos, essa rede cresceu em
							210 km, com 84 ciclovias inauguradas — um reflexo do compromisso
							com a mobilidade urbana e a segurança dos ciclistas.
						</span>
					</div>

					<div className="col-span-2 flex flex-col gap-4 text-center mt-8">
						<span className="text-3xl font-bold col-span-2 mb-3">
							Estações de Aluguel
						</span>

						<span className="text-xl text-justify">
							O incentivo ao uso de bicicletas cresce com iniciativas privadas,
							como o aluguel de bikes do Itaú. Com estações estrategicamente
							distribuídas, mais pessoas adotam a bike como transporte diário. A
							expansão para novos bairros e áreas de grande fluxo facilita a
							integração entre modais, tornando os deslocamentos mais ágeis e
							sustentáveis.
						</span>
					</div>

					<div className="col-span-2 text-center ">
						<span className=" text-lg ">Mapa de estações</span>
						<div className="rounded-3xl mt-4">
							<img src={bike01} alt="" className="rounded-3xl w-full h-full" />
						</div>
					</div>
					<div className="col-span-2 text-center ">
						<span className=" text-lg ">
							Distribuição de estações por região
						</span>
						<div className="rounded-3xl mt-4 border-blue-950 border-2">
							<img src={bike03} alt="" className="rounded-3xl w-full h-full" />
						</div>
					</div>
					<div className="col-span-2 text-center ">
						<span className=" text-lg ">
							Distribuição de estações por bairro
						</span>
						<div className="rounded-3xl mt-4 border-blue-950 border-2 p-2">
							<img src={bike02} alt="" className="rounded-3xl w-full h-full" />
						</div>
					</div>

					<div className="col-span-2 flex flex-col gap-4 text-center mt-8">
						<span className="text-3xl font-bold col-span-2 mb-3">
							Roteiros e Percursos
						</span>

						<span className="text-xl text-justify">
							A malha cicloviária conecta bairros e zonas da cidade, permitindo
							deslocamentos práticos para trabalho, lazer e esporte. Com rotas
							arborizadas, vias beira-rio e trajetos culturais, pedalar se torna
							uma experiência agradável. A expansão contínua reforça uma cidade
							mais segura, inclusiva e conectada.
						</span>
					</div>

					<div className="col-span-2 text-center ">
						<span className=" text-lg ">Mapa de ciclovias</span>
						<div className="rounded-3xl mt-4">
							<img src={bike05} alt="" className="rounded-3xl w-full h-full" />
						</div>
					</div>
					<div className="col-span-2 text-center ">
						<span className=" text-lg ">
							Distribuição de ciclovias por região
						</span>
						<div className="rounded-3xl mt-4 border-blue-950 border-2 p-2">
							<img src={bike04} alt="" className="rounded-3xl w-full h-full" />
						</div>
					</div>

					<div className="col-span-2 flex flex-col gap-4 text-center mt-8">
						<span className="text-3xl font-bold col-span-2 mb-3">
							Tipologias de Ciclovias
						</span>

						<span className="text-xl text-justify">
							A malha cicloviária inclui ciclofaixas, ciclovias e ciclorrotas,
							atendendo diferentes necessidades. Ciclofaixas são demarcações na
							via para trechos curtos e lentos, ciclovias são pistas exclusivas
							para maior segurança, e ciclorrotas são caminhos compartilhados
							com sinalização. Essa diversidade facilita o acesso para todos os
							ciclistas.
						</span>
					</div>

					<div className="col-span-2 text-center ">
						<span className=" text-lg ">
							Distribuição de estações por bairro
						</span>
						<div className="rounded-3xl mt-4 border-blue-950 border-2 p-2">
							<img src={bike06} alt="" className="rounded-3xl w-full h-full" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<div
				className="fixed bottom-4 right-4 z-50 cursor-pointer rounded-full p-1"
				onClick={() => navigate("/chat")}
				style={{
					animation: "pulse 2s infinite",
					background: "rgba(255, 255, 255, 0.7)",
				}}
			>
				<img src={IAavatar1} alt="Avatar IA" className="h-16 rounded-full" />
			</div>

			<style>{`
				@keyframes pulse {
					0% {
						box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
						transform: scale(1);
					}
					70% {
						box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
						transform: scale(1.05);
					}
					100% {
						box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
						transform: scale(1);
					}
				}
			`}</style>
		</main>
	);
}
