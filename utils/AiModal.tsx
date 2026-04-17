import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;

export const chatSession = {
    sendMessage: async (prompt: string) => {
        if (!apiKey) {
            throw new Error("NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY is not defined.");
        }

        // Using exactly what was in the user's curl command
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent`;
        
        const headers: any = {
            'Content-Type': 'application/json',
            'X-goog-api-key': apiKey
        };

        try {
            const response = await axios.post(url, {
                contents: [{
                    parts: [{ text: prompt }]
                }],
                generationConfig: {
                    temperature: 1,
                    topP: 0.95,
                    topK: 64,
                    maxOutputTokens: 8192,
                    responseMimeType: "text/plain",
                }
            }, { headers });

            if (response.data.candidates && response.data.candidates.length > 0) {
                return {
                    response: {
                        text: () => response.data.candidates[0].content.parts[0].text
                    }
                };
            } else {
                throw new Error("No candidates returned from AI.");
            }
        } catch (error: any) {
            console.error("AI REST Error Details:", error.response?.data || error.message);
            throw error;
        }
    }
};