"use client";

import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Paginations({
  totalPages = 10,
  currentPage = 1,
  onPageChange,
}) {
  //   const page = currentPage;

  const next = () => {
    if (currentPage >= totalPages) return;
    onPageChange?.(currentPage + 1);
  };

  const prev = () => {
    if (currentPage <= 1) return;
    onPageChange?.(currentPage - 1);
  };

  return (
    <div className="flex items-center gap-5">
      <IconButton
        size="sm"
        className="h-7 w-7 flex items-center justify-center rounded"
        onClick={prev}
        disabled={currentPage <= 1}>
        <FaArrowLeft size={20} />
      </IconButton>

      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{currentPage}</strong> of{" "}
        <strong className="text-gray-900">{totalPages}</strong>
      </Typography>

      <IconButton
        size="sm"
        className="h-7 w-7 flex items-center justify-center rounded"
        onClick={next}
        disabled={currentPage >= totalPages}>
        <FaArrowRight size={20} />
      </IconButton>
    </div>
  );
}
