import Link from "next/link";
import React from "react";

const SubNavbar = () => {
  return (
    <div className="w-full flex items-center justify-center bg-rafaishop-primary p-2">
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <p className="text-white font-bold">Rafaishop SUPER SALE!</p>
        <Link className="flex items-center justify-center py-1 px-2 rounded-lg border border-white hover:bg-white/20 hover:text-rafaishop-primary hover:text-bold" href={"/products"}>
          <p className="text-white font-bold text-sm">Serbu Sekarang!</p>
        </Link>
      </div>
    </div>
  );
};

export default SubNavbar;
