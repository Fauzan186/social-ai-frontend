import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import jsPDF from 'jspdf';

import SampleQueries from '../components/chatbot/SampleQueries';
import ControlsBar from '../components/chatbot/ControlsBar';
import ChatMessages from '../components/chatbot/ChatMessages';
import ChatInput from '../components/chatbot/ChatInput';
import Layout from '../components/Layout';

type Message = { type: 'user' | 'bot'; text: string };

const sampleQueries = [
  'How can I schedule a post?',
  'What is engagement rate?',
  'Suggest hashtags for tech content',
];

const ChatbotPage: React.FC = () => {
  // Explicitly type the messages state
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [muted, setMuted] = useState(true);
  const [voice, setVoice] = useState<'male' | 'female'>('female');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

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

  const getBotReply = (query: string): string => {
    if (query.toLowerCase().includes('schedule')) {
      return 'To schedule a post, go to the content calendar and click on the "+" icon.';
    } else if (query.toLowerCase().includes('engagement')) {
      return 'Engagement rate measures the interaction on your posts based on likes, comments, and shares.';
    } else if (query.toLowerCase().includes('hashtag')) {
      return 'Try these hashtags: #AIContent #TechTrends #AutomationTools';
    }
    return 'Let me think... Please wait while I fetch the best response.';
  };

  const speakText = (text: string) => {
    if (!text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = voicesRef.current;
    utterance.voice =
      voices.find((v) =>
        voice === 'female'
          ? v.name.toLowerCase().includes('female')
          : v.name.toLowerCase().includes('male')
      ) || voices[0];

    window.speechSynthesis.speak(utterance);
  };

  // Explicitly type the parameter here as string
  const handleSend = (text: string): void => {
    if (!text.trim()) return;
    const userMessage: Message = { type: 'user', text };
    setMessages((prev: Message[]) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const botText = getBotReply(text);
      const botMessage: Message = { type: 'bot', text: botText };
      setMessages((prev: Message[]) => [...prev, botMessage]);
      setLoading(false);
      if (!muted) speakText(botText);
    }, 1000);
  };

  const handleMicInput = (): void => {
    const recognition =
      (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!recognition) {
      alert('Speech recognition not supported');
      return;
    }
    const recog = new recognition();
    recog.lang = 'en-US';
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    recog.start();
    recog.onresult = (event: any) => {
      const spokenText: string = event.results[0][0].transcript;
      handleSend(spokenText);
    };
    recog.onerror = () => alert('Mic error or permission denied.');
  };

  const exportPDF = (): void => {
    const doc = new jsPDF();
    messages.forEach((msg, idx) => {
      doc.text(`${msg.type === 'user' ? 'You' : 'ZetaAI'}: ${msg.text}`, 10, 10 + idx * 10);
    });
    doc.save('chat_history.pdf');
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  return (
    <Layout>
      <Box sx={{ p: { xs: 3, md: 6 }, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          🤖 Chat with ZetaAI
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
            gap: 2,
          }}
        >
          <SampleQueries queries={sampleQueries} onSelect={handleSend} />
          <ControlsBar
            voice={voice}
            setVoice={setVoice}
            onReset={() => setMessages([])}
            onExport={exportPDF}
          />
        </Box>

        <Paper elevation={3} sx={{ p: 2, borderRadius: 3, height: 580, backgroundColor: '#fff' }}>
          <Box sx={{ overflowY: 'auto', height: 460, pr: 1 }}>
            <ChatMessages messages={messages} loading={loading} ref={chatEndRef} />
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
