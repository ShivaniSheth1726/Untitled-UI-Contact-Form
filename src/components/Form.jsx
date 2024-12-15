import React from "react";

const Form = () => {
  return (
    <div>
      <h1 className="w-96 text-3xl font-semibold">
        Got Ideas We've got the skills. Let's team up.
      </h1>
      <p className="my-5 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>
      <div className="flex w-full flex-col gap-3">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Your name"
          className="w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@company.com"
          className="w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Tell us a little about your project..."
          className="h-24 w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
        />
      </div>
    </div>
  );
};

export default Form;