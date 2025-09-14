"use client";

import { AnimatedCardStatusList, type Card } from "@/components/ui/card-status-list";

const CardsStatus: Card[] = [
  { id: "1", title: "Import products from your store", status: "completed" },
  { id: "2", title: "Unique selling points", status: "completed" },
  { id: "3", title: "Primary customers", status: "completed" },
  { id: "4", title: "Common words & phrases", status: "updates-found" },
  { id: "5", title: "Company overview and offer details", status: "syncing" },
];

export default function CardStatus() {
  const handleSynchronize = (cardId: string) => {
    console.log("Synchronizing card:", cardId);
  };

  const handleAddCard = () => {
    console.log("Add new card clicked");
  };

  const handleBack = () => {
    console.log("Back button clicked");
  };

  return (
    <div className="w-full flex items-center justify-center bg-neutral-950">
      <AnimatedCardStatusList
        title="Fundamentals Demo"
        cards={CardsStatus}
        onSynchronize={handleSynchronize}
        onAddCard={handleAddCard}
        onBack={handleBack}
        className="max-w-xl"
      />
    </div>
  );
}
