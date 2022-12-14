import styles from "../styles/Home.module.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <div className="isolate bg-white">
        <Navbar />
        <main>
          <div className="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
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
          <section id="header" className={styles.header}>
            <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                <div>
                  <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      <span className="text-gray-600">
                        We are currently in the alpha testing phase
                        <a href="#" className="font-semibold text-indigo-600">
                          {" "}
                          Join <span aria-hidden="true">&rarr;</span>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-gray-700">
                      Ticketchain.
                      <span className={styles.rainbowText}>live</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                      Are you looking for a way to combat the resale of event
                      tickets and ensure that only genuine, authorized tickets
                      are sold for your events? <br />
                      <br />
                      Look no further than
                      <strong> TicketChain</strong>, the leading provider of
                      blockchain-based ticketing solutions.
                    </p>
                    <div className="mt-8 flex gap-x-4 sm:justify-center">
                      <a
                        href="#more1"
                        className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                      >
                        Get started
                        <span className="text-indigo-200" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                      <a
                        href="/dapp"
                        className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                      >
                        Live demo
                        <span className="text-gray-400" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="more1" className={styles.more1}>
            <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-4xl pt-10 pb-24 sm:pt-18 sm:pb-24">
                <div
                  className={
                    styles.boxFacts + " bg-white py-12 sm:py-32 lg:py-20"
                  }
                >
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="sm:text-center">
                      <h2 className="text-lg font-semibold leading-8 text-indigo-600">
                        What do we mean?
                      </h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        A better, safer, and transparent way to handle tickets
                      </p>
                      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        Our cutting-edge technology uses the power of the
                        blockchain to create unique, tamper-proof tickets for
                        your events. This means that tickets cannot be copied or
                        counterfeited, ensuring that only genuine tickets are
                        sold and reducing the risk of fraud.
                      </p>
                    </div>

                    <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="{1.5}"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                              />
                            </svg>
                          </div>
                          <div className="sm:min-w-0 sm:flex-1">
                            <p className="text-lg font-semibold leading-8 text-gray-900">
                              Easy and secure ticket transfer
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                              Our platform allows for easy and secure ticket
                              transfers, so that fans can safely and easily sell
                              or give away their tickets if they are unable to
                              attend an event
                            </p>
                          </div>
                        </div>

                        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                              />
                            </svg>
                          </div>
                          <div className="sm:min-w-0 sm:flex-1">
                            <p className="text-lg font-semibold leading-8 text-gray-900">
                              All resale gets back to the Organizer
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                              A percetage of the resale gets back to the
                              organizer. This not only benefits the original
                              ticket purchaser, but also helps to reduce the
                              amount of tickets being sold on the secondary
                              market, where they are often sold at inflated
                              prices.
                            </p>
                          </div>
                        </div>

                        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                              />
                            </svg>
                          </div>
                          <div className="sm:min-w-0 sm:flex-1">
                            <p className="text-lg font-semibold leading-8 text-gray-900">
                              Peace of mind
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                              You can have peace of mind knowing that your event
                              tickets are secure and that only authorized
                              tickets will be sold
                            </p>
                          </div>
                        </div>

                        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          </div>
                          <div className="sm:min-w-0 sm:flex-1">
                            <p className="text-lg font-semibold leading-8 text-gray-900">
                              Protect your event and attendees
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                              This not only protects your event and its
                              attendees, but also helps to preserve the
                              integrity of the ticketing industry.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center"></p>
                </div>
              </div>
            </div>
          </section>
          <section id="why" className={styles.why}>
            <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-4xl pt-10 pb-24 sm:pt-18 sm:pb-24">
                <div
                  className={
                    styles.boxFacts + " bg-white py-12 sm:py-32 lg:py-20"
                  }
                >
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="sm:text-center">
                      <h2 className="text-lg font-semibold leading-8 text-indigo-600">
                        Why?
                      </h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        A blockchain company selling tickets for events is a
                        good idea for a few reasons
                      </p>
                      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        Overall, a blockchain company selling tickets for events
                        can provide a number of benefits, including increased
                        security, improved efficiency, and better transparency
                        and accountability.
                      </p>
                    </div>

                    <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                      <div className="grid grid-cols-1 gap-y-16 md:gap-x-12 md:gap-y-16">
                        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                              />
                            </svg>
                          </div>
                          <div className="sm:min-w-0 sm:flex-1">
                            <p className="text-lg font-semibold leading-8 text-gray-900">
                              First
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                              Using blockchain technology can help to make
                              tickets more secure and difficult to counterfeit.
                              This can help to prevent fraud and ensure that
                              only genuine, authorized tickets are sold for
                              events
                            </p>
                          </div>
                        </div>

                        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                              />
                            </svg>
                          </div>
                          <div className="sm:min-w-0 sm:flex-1">
                            <p className="text-lg font-semibold leading-8 text-gray-900">
                              Second
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                              A blockchain-based ticketing system can provide a
                              secure and efficient way for ticket transfers to
                              take place. This can help to reduce the amount of
                              tickets being sold on the secondary market, where
                              they are often sold at inflated prices. This
                              benefits the original ticket purchaser, as well as
                              the event organizer and attendees.
                            </p>
                          </div>
                        </div>

                        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                              />
                            </svg>
                          </div>
                          <div className="sm:min-w-0 sm:flex-1">
                            <p className="text-lg font-semibold leading-8 text-gray-900">
                              Third
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                              Using blockchain technology can provide a
                              transparent and auditable record of ticket sales
                              and transfers. This can help event organizers to
                              better track and manage their ticketing
                              operations, as well as to identify and prevent
                              fraudulent activity.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center"></p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
