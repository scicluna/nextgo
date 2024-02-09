"use client"
import Board from "@/components/Board";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [boardId, setBoardId] = useState<Id<"board">>();
  const createUser = useMutation(api.user.createUser)
  const createBoard = useMutation(api.initgame.createBoard)
  
  async function handleCreateGame(){
    try {
      const whiteUserId = await createUser({ name: "White Player" });
      const blackUserId = await createUser({ name: "Black Player" });
      const newBoardId = await createBoard({ whiteId: whiteUserId, blackId: blackUserId, size: 19, handicap: 0, time: 30 });
      setBoardId(newBoardId);
    } catch (error) {
      console.error("Failed to create game:", error);
    }
  }

  useEffect(()=>{
    handleCreateGame();
  }, [])

  return (
    <main>
        {boardId ? <Board boardId={boardId}/> : <h1>Loading...</h1>}
    </main>
  );
}
