import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Paginations({
  totalPages = 10,
  currentPage = 1,
  onPageChange,
}) {
  const [active, setActive] = React.useState(1);
  const page = currentPage || active;

  const next = () => {
    if (page === totalPages) return;

    const newPage = page + 1;

    if (currentPage === undefined) setActive(newPage);
    if (onPageChange) onPageChange(newPage);
  };

  const prev = () => {
    if (page === 1) return;

    const newPage = page - 1;

    if (currentPage === undefined) setActive(newPage);
    if (onPageChange) onPageChange(newPage);
  };

  return (
    <div className="flex items-center gap-5">
      <IconButton
        size="sm"
        // variant="outlined"
        className="h-7 w-7 flex items-center justify-center rounded"
        onClick={prev}
        disabled={page === 1}>
        <FaArrowLeft strokeWidth={2} size={20} />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{page}</strong> of{" "}
        <strong className="text-gray-900">{totalPages}</strong>
      </Typography>
      <IconButton
        size="sm"
        // variant="outlined"
        className="h-7 w-7 flex items-center justify-center rounded"
        onClick={next}
        disabled={page === totalPages}>
        <FaArrowRight strokeWidth={2} size={20} />
      </IconButton>
    </div>
  );
}
