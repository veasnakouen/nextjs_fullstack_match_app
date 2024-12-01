import React from "react";



export default async function MessagesPage() {
  async function delay(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  await delay(1000);
    return <div>

        <h2>
        MessagesPage
        </h2>
    </div>;
}
