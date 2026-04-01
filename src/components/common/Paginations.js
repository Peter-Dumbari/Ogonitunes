import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Paginations({ totalPages = 10, currentPage, onPageChange }) {
  const page = currentPage;

  const next = () => {
    if (page >= totalPages) return;
    onPageChange?.(page + 1);
  };

  const prev = () => {
    if (page <= 1) return;
    onPageChange?.(page - 1);
  };

  return (
    <div className="flex items-center gap-5">
      <IconButton
        size="sm"
        className="h-7 w-7 flex items-center justify-center rounded"
        onClick={prev}
        disabled={page <= 1}>
        <FaArrowLeft size={20} />
      </IconButton>

      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{page}</strong> of{" "}
        <strong className="text-gray-900">{totalPages}</strong>
      </Typography>

      <IconButton
        size="sm"
        className="h-7 w-7 flex items-center justify-center rounded"
        onClick={next}
        disabled={page >= totalPages}>
        <FaArrowRight size={20} />
      </IconButton>
    </div>
  );
}
