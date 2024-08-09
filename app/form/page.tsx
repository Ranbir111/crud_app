import { getFileSize, submitHandle } from "@/api";
import React from "react";

const Form = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="flex flex-col max-w-[30%] items-center bg-gray-200 px-7 py-10 rounded-lg"
        onSubmit={submitHandle}
        action=""
        method="post"
      >
        <input type="file" name="file" id="file" onChange={getFileSize} accept=".wav,.mp3" />
        {/* <input type="text" name="transcode_kind" id="" required /> */}
        <div>
          <input type="radio" value="MP3" name="transcode_kind" id="" />
          MP3
        </div>
        <div>
          <input type="radio" value="WAV" name="transcode_kind" id="" />
          WAV
        </div>
        <button
          className="px-5 py-2 bg-blue-600 rounded-md text-white font-bold"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Form;
