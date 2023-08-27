
import React from "react";
import Image from "next/image";
export default function Home(props) {
  return (
    <div >

      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Best Store For Electronics in Egypt
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Shop Best offers in electronics online : home appliances, mobiles, tablets, laptops, tvs, accessories, games, cameras, watches & toys | free delivery
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://i.dummyjson.com/data/products/9/thumbnail.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WCVNVPWU79geGLiSc_aV-3XZpj8NkMvsSg&usqp=CAU"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WJxtSzyGJumiEdqr1xlz_Q_vUeqKahZJlA&usqp=CAU"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6cBTMcIhbU3kKbSSWp_oiccdgF7IajI_XBw&usqp=CAU"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="/products"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}