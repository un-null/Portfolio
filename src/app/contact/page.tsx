"use client";

import { useForm } from "react-hook-form";

type Form = {
  name: string;
  email: string;
  message: string;
};

export default function () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Form>();

  return (
    <div className="mt-10 flex w-full flex-col items-center space-y-4 sm:max-w-screen-sm">
      <h1 className="text-xl text-graydarka-12">Contact Form</h1>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="mx-auto mt-10 flex flex-col space-y-4"
      >
        <label htmlFor="name">
          <span className="text-graya-dim text-sm font-thin">name</span>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-ui mt-1 w-full rounded p-1 accent-graydarka-12 outline-none focus:bg-gray-ui"
          />
        </label>
        <label htmlFor="email">
          <span className="text-graya-dim text-sm font-thin">mail</span>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-ui mt-1 w-full rounded p-1 accent-graydarka-12 outline-none"
          />
        </label>
        <label htmlFor="content">
          <span className="text-graya-dim text-sm font-thin">content</span>
          <textarea
            name="content"
            id="content"
            className="bg-gray-ui max-h-[4lh] w-full rounded p-1 outline-none"
          />
        </label>

        <button
          type="submit"
          className="mx-auto block w-fit rounded bg-red-10 px-8 py-2"
        >
          Send
        </button>
      </form>
    </div>
  );
}
