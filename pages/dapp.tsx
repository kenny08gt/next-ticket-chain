import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Dapp() {
  return (
    <>
      <div className="isolate bg-white">
        <Navbar />
        <main>
          <div className="relative px-6 lg:px-8 text-gray-900">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <h2>First, lets connect your wallet</h2>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
