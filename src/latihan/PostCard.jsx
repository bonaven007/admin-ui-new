import { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="group min-h-72 p-6 rounded-md border border-gray-05 bg-white shadow-sm flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:border-black hover:bg-special-red-bg">
      <h2 className="text-center text-sm font-bold text-defaultBlack line-clamp-2">
        {title}
      </h2>

      <p className="mt-4 text-center text-sm text-gray-01 leading-relaxed line-clamp-4">
        {body}
      </p>

      <button
        type="button"
        onClick={() => setIsClicked(true)}
        className={`mt-5 w-full rounded-md py-3 text-sm font-semibold text-white transition-all duration-300 ${
          isClicked
            ? "bg-special-red2 group-hover:brightness-125"
            : "bg-gray-02 group-hover:brightness-110"
        }`}
      >
        {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;
