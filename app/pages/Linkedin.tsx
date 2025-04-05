import React, { useState } from "react";
import { ArrowLeft, UserPlus, Check, ExternalLink } from "lucide-react";

interface LinkedInProps {
  onBack: () => void;
}

function LinkedIn({ onBack }: LinkedInProps) {
  const [connections, setConnections] = useState([
    {
      id: 1,
      name: "Kuldeep Debnath",
      role: "Computer Science & Engineering, Mathematics",
      connected: false,
      link: "https://www.linkedin.com/in/kuldeep-debnath/",
    },
    {
      id: 2,
      name: "Rohan Reddy",
      role: "Computer Science & Engineering",
      connected: false,
      link: "https://www.linkedin.com/in/rohan-reddy-80391425b/",
    },
    {
      id: 3,
      name: "Vikranth Vegesina",
      role: "Computer Science & Engineering",
      connected: false,
      link: "https://www.linkedin.com/in/vikranth-vegesina-64878426b/",
    },
  ]);

  const handleConnect = (id: number, linkedIn: string) => {
    setConnections(
      connections.map((conn) => {
        if (conn.id === id) {
          window.open(linkedIn, "_blank");
          return { ...conn, connected: true };
        }
        return conn;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#e9eae0] text-[#0d4714]">
      <main className="container mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="body-font flex items-center gap-2 hover:opacity-80 transition-opacity mb-8"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <h1 className="header-font text-6xl mb-8">connect.</h1>
        <p className="body-font text-lg mb-12">
          Connect with researchers in the field
        </p>

        <div className="grid gap-6">
          {connections.map((connection) => (
            <div
              key={connection.id}
              className="bg-white/50 rounded-lg p-6 flex items-center justify-between"
            >
              <div>
                <h3 className="header-font text-2xl">{connection.name}</h3>
                <p className="body-font text-sm">{connection.role}</p>
              </div>
              <button
                onClick={() => handleConnect(connection.id, connection.link)}
                disabled={connection.connected}
                className={`body-font px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                  connection.connected
                    ? "bg-[#0d4714]/20 text-[#0d4714]"
                    : "bg-[#0d4714] text-[#e9eae0] hover:bg-opacity-90"
                }`}
              >
                {connection.connected ? (
                  <>
                    <Check size={18} />
                    Connected
                  </>
                ) : (
                  <>
                    <UserPlus size={18} />
                    Connect
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default LinkedIn;
