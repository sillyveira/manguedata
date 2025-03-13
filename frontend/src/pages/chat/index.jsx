import enviarIcon from "@/assets/enviarIcon.png";
import IAavatar1 from "@/assets/IAavatar1.png";
import iconChat1 from "@/assets/iconChat1.png";
import iconChat2 from "@/assets/iconChat2.png";
import iconChat3 from "@/assets/iconChat3.png";
import iconChat4 from "@/assets/iconChat4.png";
import NavbarChat from "@/components/layout/navbarChat";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ placeholder, value, onChange, onSubmit }) => {
	return (
		<div className="flex items-center gap-3 rounded-full p-3 px-5 border-blue-950 border bg-white">
			<input
				placeholder={placeholder}
				className="w-full focus:outline-none"
				value={value}
				onChange={onChange}
			/>
			<button onClick={onSubmit} type="submit">
				<img src={enviarIcon} alt="Seta" className="h-5 ml-auto" />
			</button>
		</div>
	);
};

export default function Chat() {
	const { search } = useLocation();
	const initialMessage = new URLSearchParams(search).get("message") || "";

	const [messages, setMessages] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const messagesEndRef = useRef(null);
	const messagesContainerRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const iaResponses = {
		"Olá, gostaria de saber qual é a melhor ciclovia perto do meu bairro, Madalena.":
			'Olá! De acordo com os dados do nosso Hub de Dados, a ciclovia mais indicada para moradores da Madalena é a "Ciclovia Madalena-Boa Viagem", que conecta seu bairro a regiões de lazer e transporte.',
		"Interessante! Qual é a extensão dessa rota e que pontos ela conecta?":
			"Ela tem cerca de 4 km de extensão e liga Madalena à região de Boa Viagem, passando por áreas urbanas com boa infraestrutura e acesso fácil a pontos de interesse, como centros comerciais e estações de ônibus.",
		"Essa ciclovia oferece algum diferencial em termos de segurança?":
			"Sim, ela conta com iluminação LED e sinalização clara, garantindo maior segurança para os ciclistas, principalmente em horários de menor visibilidade.",
		"Perfeito! Vou acessar o mapa interativo do hub para planejar melhor meus trajetos.":
			"Ótima ideia! No mapa interativo você encontrará informações detalhadas sobre todas as ciclovias, incluindo elevações, pontos de descanso e estações de reparo para bicicletas. Bom passeio!",
	};

	const defaultResponse =
		"Desculpe, não tenho informações específicas sobre isso. Posso ajudar com dúvidas sobre ciclovias, rotas e infraestrutura cicloviária da cidade.";

	const handleSendMessage = (e) => {
		if (e) e.preventDefault();
		if (!inputValue.trim()) return;

		const newUserMessage = {
			text: inputValue,
			isUser: true,
		};

		setMessages((prev) => [...prev, newUserMessage]);
		setInputValue("");
		setIsLoading(true);

		setTimeout(() => {
			const response = iaResponses[inputValue] || defaultResponse;

			const newIAMessage = {
				text: response,
				isUser: false,
			};

			setMessages((prev) => [...prev, newIAMessage]);
			setIsLoading(false);
		}, 1000); // 1 second delay
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages, isLoading]);

	useEffect(() => {
		if (initialMessage) {
			setMessages([
				{
					text: initialMessage,
					isUser: true,
				},
			]);

			setTimeout(() => {
				const response = iaResponses[initialMessage] || defaultResponse;
				setMessages((prev) => [
					...prev,
					{
						text: response,
						isUser: false,
					},
				]);
			}, 1000);
		}
	}, [initialMessage]);

	return (
		<main className="h-screen flex flex-col relative">
			<NavbarChat />
			<div
				ref={messagesContainerRef}
				className="flex flex-col h-full pt-48 pb-32 overflow-y-auto"
			>
				<div className="flex-grow"></div>

				<div className="px-7 mb-24 mt-48">
					<div className="flex flex-col space-y-5">
						{messages.map((message, index) =>
							message.isUser ? (
								<div key={index} className="flex justify-end">
									<div className="bg-gradient-to-r from-blue-100 to-green-200 text-white rounded-3xl p-3 px-5 max-w-xs md:max-w-md lg:max-w-lg rounded-br-none">
										<span>{message.text}</span>
									</div>
								</div>
							) : (
								<div key={index} className="flex justify-start space-x-2">
									<img
										src={IAavatar1}
										alt="Avatar IA"
										className="h-7 rounded-full mt-auto"
									/>
									<div className="bg-blue-950 text-white rounded-3xl p-3 px-5 max-w-xs md:max-w-md lg:max-w-lg rounded-bl-none mb-4">
										<span>{message.text}</span>
										<div className="flex border-t-2 mt-5 pt-5 pb-3 space-x-5">
											<img src={iconChat1} className="h-6" alt="Icon 1" />
											<img src={iconChat2} className="h-6" alt="Icon 2" />
											<img src={iconChat3} className="h-6" alt="Icon 3" />
											<img
												src={iconChat4}
												className="h-6 ml-auto"
												alt="Icon 4"
											/>
										</div>
									</div>
								</div>
							)
						)}

						{isLoading && (
							<div className="flex justify-start space-x-2">
								<img
									src={IAavatar1}
									alt="Avatar IA"
									className="h-7 rounded-full mt-auto"
								/>
								<div className="bg-blue-950 text-white rounded-3xl p-3 px-5 max-w-xs md:max-w-md lg:max-w-lg rounded-bl-none mb-4">
									<span>...</span>
								</div>
							</div>
						)}

						<div ref={messagesEndRef} />
					</div>
				</div>
			</div>

			<div className="fixed bottom-0 left-0 right-0 w-full px-7 pb-8 pt-4 bg-white z-50">
				<form onSubmit={handleSendMessage}>
					<SearchBar
						placeholder="Pergunte alguma coisa..."
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onSubmit={handleSendMessage}
					/>
				</form>
			</div>
		</main>
	);
}
