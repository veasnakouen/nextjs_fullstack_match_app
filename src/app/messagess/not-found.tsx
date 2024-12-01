"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import { GiKeyLock } from "react-icons/gi";

export default function NotFound() {
  return (
    <div className="container">
      <Card className="w-3/5 mx-auto" >
        <CardHeader>
          <GiKeyLock size={40} color="secondary" />
        </CardHeader>
        <CardBody></CardBody>
      </Card>
    </div>
  );
}
