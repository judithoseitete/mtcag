"use client";

import { useState } from "react";
import Footer from "@/components/layout/Footer";

export default function GivePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const bankAccountNumber = "[Account Number]";
  const mobileMoneyNumber = "0205090951";

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section with Scripture */}
        <section className="bg-brand-blue-primary py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <p className="text-lg md:text-xl text-white/70">
              2 Corinthians 9:7
            </p>
          </div>
        </section>

        {/* Ways to Give */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-primary text-center mb-12">
              Ways to give
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bank Transfer */}
              <div className="bg-brand-neutral rounded-lg p-8 border-2 border-brand-blue-primary/10">
                <div className="flex items-center justify-center w-16 h-16 bg-brand-blue-primary rounded-lg mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-blue-primary mb-4">
                  Bank Transfer
                </h3>
                <div className="space-y-3 text-brand-blue-primary/80">
                  <div>
                    <p className="text-sm font-semibold text-brand-blue-primary">Bank Name</p>
                    <p className="text-lg">[Bank Name]</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-blue-primary">Account Name</p>
                    <p className="text-lg">More Than Conquerors AG</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-blue-primary">Account Number</p>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-mono">{bankAccountNumber}</p>
                      <button
                        onClick={() => copyToClipboard(bankAccountNumber, "bankAccount")}
                        className="p-2 hover:bg-brand-blue-primary/10 rounded-lg transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedField === "bankAccount" ? (
                          <svg
                            className="w-5 h-5 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-brand-blue-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Money */}
              <div className="bg-brand-neutral rounded-lg p-8 border-2 border-brand-blue-primary/10">
                <div className="flex items-center justify-center w-16 h-16 bg-brand-blue-primary rounded-lg mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-blue-primary mb-4">
                  Mobile Money
                </h3>
                <div className="space-y-3 text-brand-blue-primary/80">
                  <div>
                    <p className="text-sm font-semibold text-brand-blue-primary">Network</p>
                    <p className="text-lg">Telecel (Vodafone)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-blue-primary">Name</p>
                    <p className="text-lg">More Than Conquerors AG</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-blue-primary">Number</p>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-mono">{mobileMoneyNumber}</p>
                      <button
                        onClick={() => copyToClipboard(mobileMoneyNumber, "mobileMoneyNumber")}
                        className="p-2 hover:bg-brand-blue-primary/10 rounded-lg transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedField === "mobileMoneyNumber" ? (
                          <svg
                            className="w-5 h-5 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-brand-blue-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer bgColor="white" cardVariant="dark" />
    </>
  );
}

