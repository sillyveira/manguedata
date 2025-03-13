import IAavatar1 from "@/assets/IAavatar1.png";
import BgClima from "@/assets/dashboards/Bg-clima.png";
import abrigosVetor from "@/assets/dashboards/abrigos-vetor.png";
import chuvaVetor from "@/assets/dashboards/chuva-vetor.png";
import setaBaixo from "@/assets/dashboards/setaBaixo.png";
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
					backgroundImage: `url(${BgClima})`,
					backgroundSize: "",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "top",
				}}
			>
				<div className="grid grid-cols-2 gap-4">
					<span className="text-2xl font-bold col-span-2 mb-3">
						Monitoramento Meteorológico de Recife em tempo real
					</span>
					<div className="col-span-1">
						<div className="rounded-4xl bg-[#228B22] text-white h-36 p-5 flex flex-col gap-2 text-center justify-center ">
							<span className=" text-xl">Chuva</span>
							<span className=" text-3xl font-bold">0 mm</span>
							<span className=" text-xl">Média 1h</span>
						</div>
					</div>

					<div className="col-span-1">
						<div className="rounded-4xl bg-[#2B2B2B] text-white h-36 p-5 flex flex-col gap-2 text-center justify-center">
							<span className=" text-xl">Máxima 1h</span>
							<span className=" text-3xl font-bold">0 mm</span>
						</div>
					</div>
					<div className="col-span-2">
						<div className="rounded-4xl bg-[#98CE9D]  h-36 p-5 flex flex-col gap-2 text-center justify-center">
							<span className=" text-xl">Média 24h</span>
							<div className="flex items-center justify-center gap-3">
								<span className=" text-3xl font-bold">10,5 mm</span>
								<img src={chuvaVetor} alt="" className="h-7" />
							</div>
						</div>
					</div>
					<div className="col-span-2">
						<div className="rounded-4xl bg-[#98CE9D]  h-36 p-5 flex flex-col gap-2 text-center justify-center">
							<span className=" text-xl">Máxima 24h</span>
							<span className=" text-3xl font-bold">15,3 mm</span>
							<span className=" text-xl">Guabiraba</span>
						</div>
					</div>
					<div className="col-span-2">
						<div className="rounded-4xl bg-[#228B22] text-white h-36 p-5 flex flex-col gap-2 text-center justify-center">
							<span className=" text-xl">Nível das Marés</span>
							<span className=" text-3xl font-bold">0,7 m</span>
							<div className="flex items-center justify-center gap-3">
								<span className=" text-xl font-bold">10,5 mm</span>
								<img src={setaBaixo} alt="" className="h-2" />
							</div>
						</div>
					</div>
					<div className="col-span-2">
						<div className="rounded-4xl bg-[#228B22] text-white h-36 p-5 flex flex-col gap-2 text-center justify-center">
							<span className=" text-xl">Trânsito na Cidade</span>
							<span className=" text-3xl font-bold">LEVE</span>
							<span className=" text-xl font-bold">14km congestionados</span>
						</div>
					</div>
					<div className="col-span-1">
						<div className="rounded-4xl bg-[#228B22] text-white h-36 p-5 flex flex-col gap-2 text-center justify-center">
							<span className=" text-xl">Abrigos Ativos</span>
							<span className=" text-3xl font-bold">0 mm</span>
							<span className=" text-xl font-bold">Média 1 h</span>
						</div>
					</div>
					<div className="col-span-1">
						<div className="rounded-4xl bg-[#FFD700]  h-36 p-5 flex flex-col gap-2 text-center justify-center">
							<span className=" text-xl">Índice de Calor</span>
							<span className=" text-3xl font-bold">32 °C</span>
							<span className=" text-xl font-bold">Cuidado </span>
						</div>
					</div>
					<div className="col-span-2">
						<div className="rounded-4xl bg-[#228B22] text-white h-36 p-5 flex flex-col gap-3 text-center justify-center">
							<div className="flex items-center justify-center gap-3">
								<span className=" text-xl">Índice UV</span>
								<img src={abrigosVetor} alt="" className="h-6" />
							</div>
							<span className=" text-3xl font-bold">0 de 168</span>
						</div>
					</div>
					<div className="col-span-2">
						<div className="rounded-4xl bg-[#228B22] text-white h-36 p-5 flex flex-col gap-3 text-center justify-center">
							<span className=" text-xl">Velocidade Ventos</span>
							<span className=" text-3xl font-bold">20 km/h</span>
						</div>
					</div>
					<div className="col-span-2 flex flex-col gap-4 text-center mt-8">
						<span className="text-2xl">Estágio Atual</span>
						<span className="text-3xl font-bold text-[#228B22]">Normal</span>
						<span className="text-xl text-justify">
							Não há ocorrências nem probabilidade de mudança meteorológica
							significativa. Situação de baixo risco para a população.
						</span>
					</div>
					<div className="col-span-2 flex flex-col gap-4 text-center mt-8">
						<span className="text-3xl font-bold col-span-2 mb-3">Sobre</span>

						<span className="text-xl text-justify">
							Informações sobre os padrões de chuva, variações de temperatura e
							seus efeitos na rotina da cidade. A região de Nova Descoberta
							registrou o maior volume de chuva nas últimas 24 horas, atingindo
							22,3 mm, enquanto a maioria das outras áreas teve pouca ou nenhuma
							precipitação.
							<br />
							<br />
							As condições do trânsito estão diretamente ligadas aos eventos
							climáticos. Em dias chuvosos, os níveis de congestionamento
							aumentam significativamente, com uma média de 14 km de vias
							impactadas. Além disso, a baixa altitude da cidade e a proximidade
							com corpos de água contribuem para frequentes alagamentos em
							determinadas regiões. O índice de calor atingiu 32°C, indicando um
							alto nível de desconforto e riscos à saúde da população. Enquanto
							isso, os ventos chegaram a 22 km/h, influenciando a sensação
							térmica e as condições climáticas locais.
							<br />
							<br />
							Compreender essas tendências ajuda moradores e gestores públicos a
							prever e minimizar os impactos do clima extremo na mobilidade
							urbana e na qualidade de vida.
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
