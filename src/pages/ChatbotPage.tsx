import React, { useState, useEffect, useRef } from "react";
import { Box, Paper } from "@mui/material";
import jsPDF from "jspdf";

import ControlsBar from "../components/chatbot/ControlsBar";
import ChatMessages from "../components/chatbot/ChatMessages";
import ChatInput from "../components/chatbot/ChatInput";
import Layout from "../components/Layout";
import ChatbotLanding from "../components/chatbot/ChatbotLanding";

type Message = { type: "user" | "bot"; text: string };

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [muted, setMuted] = useState(true);
  const [voice, setVoice] = useState<"male" | "female">("female");
  const [loading, setLoading] = useState(false);

  // Ref to the scrollable container, not the end div
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Store voices so we don't query repeatedly
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const loadVoices = () => {
      voicesRef.current = synth.getVoices();
    };

    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }
  }, []);

  // Scroll container to bottom whenever messages or loading changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  

  const speakText = (text: string) => {
    if (!text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = voicesRef.current;
    utterance.voice =
      voices.find((v) =>
        voice === "female"
          ? v.name.toLowerCase().includes("female")
          : v.name.toLowerCase().includes("male")
      ) || voices[0];

    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async (text: string): Promise<void> => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    // Add user message
    const userMessage: Message = { type: "user", text: trimmedText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: "1", 
          query: trimmedText,
        }),
      });

      if (!response.ok) throw new Error(`Error ${response.status}`);
      const data = await response.json();
      const botText = data.data?.answer ?? "Sorry, I didn't understand that.";
      const botMessage: Message = { type: "bot", text: botText };
      setMessages((prev) => [...prev, botMessage]);

      if (!muted) speakText(botText);
    } catch (error) {
      console.error("Chat API error:", error);
      const botMessage: Message = {
        type: "bot",
        text: "Something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleMicInput = (): void => {
    const recognition =
      (window as any).webkitSpeechRecognition ||
      (window as any).SpeechRecognition;
    if (!recognition) {
      alert("Speech recognition not supported");
      return;
    }
    const recog = new recognition();
    recog.lang = "en-US";
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    recog.start();
    recog.onresult = (event: any) => {
      const spokenText: string = event.results[0][0].transcript;
      handleSend(spokenText);
    };
    recog.onerror = () => alert("Mic error or permission denied.");
  };

  const exportPDF = (): void => {
    const doc = new jsPDF();
    messages.forEach((msg, idx) => {
      doc.text(
        `${msg.type === "user" ? "You" : "ZetaAI"}: ${msg.text}`,
        10,
        10 + idx * 10
      );
    });
    doc.save("chat_history.pdf");
  };

  return (
    <Layout>
      <Box
        sx={{
          p: { xs: 3, md: 6 },
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            gap: 2,
          }}
        >
          <ControlsBar
            voice={voice}
            setVoice={setVoice}
            onReset={() => setMessages([])}
            onExport={exportPDF}
          />
        </Box>

        <Paper
          elevation={3}
          sx={{ p: 2, borderRadius: 3, height: 580, backgroundColor: "#fff" }}
        >
          <Box
            sx={{ overflowY: "auto", height: 460, pr: 1 }}
            ref={scrollContainerRef}
          >
            <ChatMessages messages={messages} loading={loading} />
            {messages.length === 0 && !loading && (
              <ChatbotLanding onQuerySelect={handleSend} />
            )}
          </Box>
          <ChatInput
            input={input}
            setInput={setInput}
            onSend={handleSend}
            onMicClick={handleMicInput}
            muted={muted}
            toggleMute={() => setMuted((m) => !m)}
          />
        </Paper>
      </Box>
    </Layout>
  );
};

export default ChatbotPage;
