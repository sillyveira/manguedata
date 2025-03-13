import IAavatar1 from "@/assets/IAavatar1.png";
import iconChat1 from "@/assets/iconChat1.png";
import iconChat2 from "@/assets/iconChat2.png";
import iconChat3 from "@/assets/iconChat3.png";
import iconChat4 from "@/assets/iconChat4.png";
import NavbarChat from "@/components/layout/navbarChat";
import SearchBar from "@/components/ui/searchBar";
import { useLocation } from "react-router-dom";

export default function Chat() {
	const { search } = useLocation();
	// eslint-disable-next-line no-unused-vars
	const message = new URLSearchParams(search).get("message") || "";

	return (
		<main className=" h-screen flex flex-col relative">
			<NavbarChat />
			<div className="flex flex-col h-full pt-48 pb-32 overflow-y-auto">
				<div className="flex-grow"></div>

				<div className="px-7 mb-24 mt-48">
					<div className="flex flex-col space-y-5">
						<div className="flex justify-end">
							<div className="bg-gradient-to-r from-blue-100 to-green-200 text-white rounded-3xl p-3 px-5 max-w-xs md:max-w-md lg:max-w-lg rounded-br-none">
								{/* <span>
									{message ||
										"Quais são os principais indicadores disponíveis na plataforma?"}
								</span> */}
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Mauris vulputate et justo sed feugiat. Duis viverra, risus
									quis pellentesque cursus, metus nisi gravida risus, vel
									egestas quam dui in eros. Fusce in rutrum odio, ut dignissim
									mi.
								</span>
							</div>
						</div>

						<div className="flex justify-start space-x-2">
							<img
								src={IAavatar1}
								alt="Avatar IA"
								className="h-7 rounded-full mt-auto"
							/>
							<div className="bg-blue-950 text-white rounded-3xl p-3 px-5 max-w-xs md:max-w-md lg:max-w-lg rounded-bl-none mb-4">
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Mauris vulputate et justo sed feugiat. Duis viverra, risus
									quis pellentesque cursus, metus nisi gravida risus, vel
									egestas quam dui in eros. Fusce in rutrum odio, ut dignissim
									mi. Pellentesque sagittis ante lobortis metus facilisis
									lobortis. nibh velit, ac iaculis sem molestie ut. Integer
									consectetur pulvinar odio, a hendrerit odio fringilla et.
									Nulla sed erat at mauris imperdiet maximus. L.
								</span>
								<div className="flex border-t-2 mt-5 pt-5 pb-3 space-x-5">
									<img src={iconChat1} className="h-6" />
									<img src={iconChat2} className="h-6" />
									<img src={iconChat3} className="h-6" />
									<img src={iconChat4} className="h-6 ml-auto" />
								</div>
							</div>
						</div>

						<div className="flex justify-end">
							<div className="bg-gradient-to-r from-blue-100 to-green-200 text-white rounded-3xl p-3 px-5 max-w-xs md:max-w-md lg:max-w-lg rounded-br-none">
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Mauris vulputate et justo sed feugiat. Duis viverra, risus
									quis pellentesque cursus, metus nisi gravida risus, vel
									egestas quam dui in eros. Fusce in rutrum odio, ut dignissim
									mi.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="fixed bottom-0 left-0 right-0 w-full px-7 pb-8 pt-4 bg-white z-50">
				<SearchBar placeholder="Pergunte alguma coisa..." />
			</div>
		</main>
	);
}
