import React from "react";

const ProductDetials = async ({ params }) => {
  console.log(`================${params}`);
  const res = await fetch(`https://dummyjson.com/products/${params.id}`, {
    next: {
      revalidate: 60,
    },
  });
  const breadcrumb = await res.json();
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a
                  href={breadcrumb.id}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {breadcrumb.title}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                href={breadcrumb.id}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {breadcrumb.title}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={breadcrumb.images[0]}
              alt={breadcrumb.images[0]}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={breadcrumb.images[1]}
                alt={breadcrumb.images[1]}
                className=" object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={breadcrumb.images[2]}
                alt={breadcrumb.images[2]}
                className=" object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={breadcrumb.images[3]}
              alt={breadcrumb.images[3]}
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* breadcrumb info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {breadcrumb.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">breadcrumb information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${breadcrumb.price}
            </p>

            {/* Reviews */}

            <form className="mt-10">
              {/* Colors */}

              {/* Sizes */}

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {breadcrumb.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Category</h3>

              <div className="mt-4">
               <p className="text-sm text-gray-600">
                  {breadcrumb.category}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Brand</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {breadcrumb.brand}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {breadcrumb.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetials;
