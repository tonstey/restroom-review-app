import { useTimer } from "react-timer-hook";

import {
  PiWarningCircle,
  PiClockLight,
  PiArrowsClockwise,
} from "react-icons/pi";
import { CiMail } from "react-icons/ci";

export default function EmailFailedPage() {
  const { minutes, seconds, isRunning, restart } = useTimer({
    expiryTimestamp: new Date(),
    autoStart: false,
  });
  const restartTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
    return time;
  };
  return (
    <>
      <div className="mx-auto mt-8 w-156 rounded-xl border border-gray-200 px-8 py-4 shadow-xl">
        <div className="mb-4 flex flex-col items-center">
          <div className="rounded-full bg-red-100 p-2">
            <PiWarningCircle className="text-5xl font-semibold text-red-600" />
          </div>
          <h1 className="text-2xl font-bold">Verification Failed</h1>
          <p className="text-center text-sm font-semibold text-gray-500">
            We couldn't verify your email address. This usually happens for one
            of the following reasons.
          </p>
        </div>
        <hr className="h-px border-none bg-gray-300" />
        <div className="my-4 flex flex-col gap-2">
          <h1 className="flex items-center gap-2 text-sm font-semibold text-gray-500">
            <PiClockLight className="text-xl text-[#1fb1f9]" />
            The verification link has expired (link lasts XXX hours).
          </h1>
          <h1 className="flex items-center gap-2 text-sm font-semibold text-gray-500">
            <PiArrowsClockwise className="text-xl text-[#1fb1f9]" />
            The link has already been used to verify your account.
          </h1>
          <h1 className="flex items-center gap-2 text-sm font-semibold text-gray-500">
            <CiMail className="text-xl text-[#1fb1f9]" />
            The link was corrupted or clipped by your email provider.
          </h1>
        </div>
        <hr className="h-px border-none bg-gray-300" />
        {isRunning ? (
          <div className="mx-auto my-4 flex items-center justify-center gap-2 rounded-lg bg-gray-300 px-8 py-2 font-semibold">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        ) : (
          <button
            onClick={() => restart(restartTimer())}
            className="mx-auto my-4 flex items-center gap-2 rounded-lg bg-[#1fb1f9] px-8 py-2 font-semibold hover:cursor-pointer hover:bg-[#069de8]"
          >
            <CiMail className="text-2xl" />
            Resend verification email
          </button>
        )}

        <hr className="h-px border-none bg-gray-300" />
        <div></div>
      </div>
    </>
  );
}
