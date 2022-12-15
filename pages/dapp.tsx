import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { getUserFromSession } from "../utils/auth";

export default function Dapp() {
  const [loggedIn, setloggedIn] = useState(null);
  useEffect(() => {
    getUserFromSession().then((session) => {
      setloggedIn(session);
      console.log("dapp page ", loggedIn);
    });
  }, []);
  return (
    <>
      <div className="isolate bg-white">
        <Navbar />
        <main>
          <div className="relative px-6 lg:px-8 text-gray-900">
            {loggedIn === null ? (
              <>
                {" "}
                <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                  <h2>First, lets connect your wallet</h2>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                  <h2>Welcome back {loggedIn?.user?.address}!</h2>

                  {/* <pre>{JSON.stringify(loggedIn?.user, null, 2)}</pre> */}
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-2 text-base font-medium text-white hover:bg-indigo-700"
                    >
                      New event
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
