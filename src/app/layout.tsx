import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MyPlanProvider } from "@/context/MyPlanContext";
import { SavedWorkoutProvider } from "@/context/SavedWorkoutContext";
import { Flip, ToastContainer } from "react-toastify";

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Fitlog Workouts",
	description:
		"Fitlog Workouts is a web app that helps you track your workouts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${oswald.variable} ${inter.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<MyPlanProvider>
					<SavedWorkoutProvider>
						<Navbar />
						{children}
						<Footer />

						<ToastContainer
							position="top-right"
							autoClose={2500}
							limit={4}
							hideProgressBar={false}
							newestOnTop
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover={false}
							theme="dark"
							transition={Flip}
						/>
					</SavedWorkoutProvider>
				</MyPlanProvider>
			</body>
		</html>
	);
}
