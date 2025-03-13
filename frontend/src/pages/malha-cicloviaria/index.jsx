import IAavatar1 from "@/assets/IAavatar1.png";
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
					<div className="col-span-2 my-6">
						<button className="bg-gradient-to-r from-blue-100 to-green-200 text-white rounded-full p-3 px-5 w-full text-center">
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
