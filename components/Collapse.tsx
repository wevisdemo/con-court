export default function Collapse() {
  return (
    <>
      <button
        type='button'
        className='hs-collapse-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
        id='hs-basic-collapse'
        data-hs-collapse='#hs-basic-collapse-heading'
      >
        Collapse
      </button>
      <div
        id='hs-basic-collapse-heading'
        className='hs-collapse hidden w-full overflow-hidden transition-[height] duration-300'
        aria-labelledby='hs-basic-collapse'
      >
        <div className='mt-5'>
          <p className='text-gray-500 dark:text-gray-400'>
            This is a collapse body. It is hidden by default, until the collapse
            plugin adds the appropriate classNamees that we use to style each
            element. These classNamees control the overall appearance, as well
            as the showing and hiding via CSS transitions.
          </p>
        </div>
      </div>
    </>
  );
}
