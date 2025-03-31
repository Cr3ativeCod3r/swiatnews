"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrbpaevj");

  if (state.succeeded) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-md">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 text-center space-y-4">
          <CheckCircle className="mx-auto text-green-500" size={64} />
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Dziękuję!
          </h2>
          <p className="text-slate-700 dark:text-slate-300">
            Odpowiem jak najszybciej 😊
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-800 lg:rounded-xl sm: rounded-none shadow-lg py-24 px-8 space-y-6 lg:w-full sm: w-full"
      >
              <div className=" justify-center flex flex-col lg:w-[50vw] sm: w-full mx-auto">
        <div className="text-center">
          <Send 
            className="mx-auto mb-4 text-slate-600 dark:text-white" 
            size={48} 
          />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Napisz do nas
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Odpowiemy tak szybko jal to możliwe.
          </p>
        </div>

        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium mb-2 mt-8 text-slate-700 dark:text-slate-300"
          >
            Adres e-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl 
            bg-slate-50 dark:bg-slate-700 
            text-slate-900 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label 
            htmlFor="message" 
            className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
          >
            Wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl 
            bg-slate-50 dark:bg-slate-700 
            text-slate-900 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 bg-slate-900 dark:bg-white 
          text-white dark:text-slate-900 
          font-semibold rounded-xl 
          hover:bg-slate-700 dark:hover:bg-slate-200 
          transition-colors disabled:opacity-50"
        >
          {state.submitting ? "Wysyłanie..." : "Wyślij wiadomość"}
        </button>
        </div>
      </form>
    </div>
  );
}