export default function footer() {
  return (
    <>
      <div className="bg-gray-50 text-gray-700 sx:pb-24">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 xs:pb-12 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Join our alpha phase now.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="mx-6 max-w-7xl py-2 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-2 lg:px-8 lg:justify-center  xs:mb-8">
          <a href="/">
            <img src="/logo.svg" alt="Logo Ticketchain" className="h-[4rem]" />
          </a>

          <br />
          <div className="flex text-sm place-content-between py-6 items-center sm:pb-12">
            <div>
              All rights reserved. Copyright © 2022. Created with ❤️ from GT by
              <a
                href="https://twitter.com/alanhurtarte"
                target="_blank"
                className="hover:text-indigo-500"
              >
                {" "}
                @alanhurtarte
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
