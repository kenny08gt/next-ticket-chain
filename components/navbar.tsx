import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { Session } from "next-auth";
import { getSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

export default function navbar(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState<Session | null>(null);
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();

  useEffect(() => {
    getUserFromSession();
  }, []);

  async function getUserFromSession() {
    const session = await getSession();

    // redirect if not authenticated
    if (!session) {
      setLoggedIn(null);
    }

    console.log(session);

    setLoggedIn(session);
  }

  async function logout() {
    await signOut();
    setLoggedIn(null);
  }

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
    });

    // console.log(signature);
    await getUserFromSession();
  };

  const toggleMobileMenu = function () {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <Head>
        <title>TicketChain.live</title>
      </Head>
      <div>
        <div className="fixed inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC"></stop>
                <stop offset="1" stopColor="#FF80B5"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="px-6 pt-6 lg:px-8">
          <div>
            <nav
              className="flex h-9 items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Ticketchain</span>

                  <img className="h-[4rem]" src="/logo.svg" alt="" />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Heroicon name: outline/bars-3 --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  Product
                </a>

                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  Features
                </a>

                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  Marketplace
                </a>

                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  Company
                </a>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                {loggedIn === null ? (
                  <>
                    <a
                      href="#"
                      onClick={handleAuth}
                      className="inline-block mr-4 rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      Log in
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href="#"
                      className="max-w-[7rem] text-ellipsis overflow-hidden inline-block mr-4 rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      {loggedIn?.user?.address}
                    </a>
                  </>
                )}

                <a
                  href="/dapp"
                  className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Dapp
                </a>
              </div>
            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            {showMobileMenu ? (
              <>
                <div role="dialog" aria-modal="true">
                  <div className="mobileMeu fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6">
                    <div className="flex h-9 items-center justify-between">
                      <div className="flex">
                        <a href="#" className="-m-1.5 lg:p-1.5">
                          <span className="sr-only">Your Company</span>
                          <img
                            className="lg:h-[16rem] h-[4rem]"
                            src="~assets/logo.svg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="flex">
                        <button
                          type="button"
                          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                          onClick={toggleMobileMenu}
                        >
                          <span className="sr-only">Close menu</span>
                          {/* <!-- Heroicon name: outline/x-mark --> */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                          <a
                            href="#"
                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                          >
                            Product
                          </a>

                          <a
                            href="#"
                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                          >
                            Features
                          </a>

                          <a
                            href="#"
                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                          >
                            Marketplace
                          </a>

                          <a
                            href="#"
                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                          >
                            Company
                          </a>
                        </div>
                        <div className="py-6">
                          {loggedIn === null ? (
                            <>
                              <a
                                href="#"
                                onClick={handleAuth}
                                className="inline-block mr-4 rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                              >
                                Log in
                              </a>
                            </>
                          ) : (
                            <>
                              <a
                                href="#"
                                className="max-w-xs text-ellipsis overflow-hidden  -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                              >
                                {loggedIn?.user?.address}
                              </a>
                            </>
                          )}
                          <br />
                          <a
                            href="#"
                            onClick={logout}
                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                          >
                            Log out
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
