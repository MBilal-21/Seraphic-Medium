"use client";

import Link from "next/link";
import React from "react";

interface BookingButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function BookingButton({
  href = "https://tidycal.com/ahmadrashid/brand-strategy-consultation",
  className = "",
  children,
  onClick
}: BookingButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      e.preventDefault();
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

