"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500 font-bold mt-5 uppercase">
        Hello Next application !.
      </h1>
      <Button
        // declare button as link
        as={Link}
        href="/members"
        className="font-bold"
        color="primary"
        variant="bordered"
        startContent={<FaRegSmile size={20} />}
      >
        click me!.
      </Button>
    </div>
  );
}
