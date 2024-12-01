import React from "react";

export default function layout({
  children,
  sms,
}: {
  children: React.ReactNode;
  sms: React.ReactNode;
}) {
  return (
    <div className="bg-gray-700 flex align-center justify-center">
      <div className="">
        {children}
        {sms}
      </div>
    </div>
  );
}
