let RestrauCategory = (prop) => {
  let { data } = prop;
  let { title, itemCards } = data;

  return (
    <div className="p-6 my-6 first:my-0 bg-white cursor-pointer rounded-md">
      <div className="flex justify-between">
        <h1 className="text-[16px] font-bold text-slate-800">
          {`${title} (${itemCards.length})`}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-[18px] font-bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default RestrauCategory;
