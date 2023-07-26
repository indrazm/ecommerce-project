"use client";

export const Register = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="max-w-sm m-auto space-y-8">
        <div className="text-center">
          <h1>Join</h1>
          <p>Fill in with your details</p>
        </div>
        <div className="space-y-4">
          <input name="name" placeholder="Fullname" />
          <input name="username" placeholder="username" />
          <input name="email" placeholder="email@something.com" />
          <input name="password" type="password" placeholder="password" />
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};
