"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { apiPost } from "@/lib/api";
import { Button } from "@ui/components/shadcn/button";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await apiPost("/auth/logout");
      router.refresh();
    } catch (e) {
      console.error("Logout error", e);
    }
  };

  return (
    <div className="text-right">
      <Button className="w-fit bg-background-secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
