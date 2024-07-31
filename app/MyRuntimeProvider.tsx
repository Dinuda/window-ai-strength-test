"use client";

import {
  AssistantRuntimeProvider,
  useLocalRuntime,
  type ChatModelAdapter,
} from "@assistant-ui/react";
import { useEffect, useState } from "react";

const MyModelAdapter: ChatModelAdapter = {
  async run({ messages, abortSignal }) {
    // This function will be implemented in the runtime
    throw new Error("Not implemented");
  },
};

const checkAI = async () => {
  if ("ai" in window) {
    const ai = window.ai as any;
    if ((await ai.canCreateTextSession()) === "readily") {
      return true;
    }
  }
  return false;
};

export function MyRuntimeProvider({ children }: { children: React.ReactNode }) {
  const [isAI, setIsAI] = useState<boolean | null>(null);
  const [aiModel, setAiModel] = useState<any>(null);

  useEffect(() => {
    const updateIsAI = async () => {
      const checkAIStatus = await checkAI();
      setIsAI(checkAIStatus);

      if (checkAIStatus) {
        const thisModel = await (window as any).ai.createTextSession();
        setAiModel(thisModel);
      }
    };

    updateIsAI();
  }, []);

  const runtime = useLocalRuntime({
    ...MyModelAdapter,
    run: async ({ messages, abortSignal }) => {
      if (!aiModel) {
        throw new Error("AI model not initialized");
      }
      const lastMessage = messages[messages.length - 1]?.content as any;

      if (!lastMessage) {
        throw new Error("No messages found");
      }
      console.log(lastMessage);

      const promptText = lastMessage[0]?.text;

      if (!promptText) {
        throw new Error("No text found in the last message");
      }

      const result = await aiModel.prompt(promptText);

      return {
        content: [
          {
            type: "text",
            text: result,
          },
        ],
      };
    },
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
