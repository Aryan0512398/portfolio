import React from "react";
import PageWrapper from "./PageWrapper";

function Resume() {
  return (
    <PageWrapper>
      <div className="max-w-xl mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">My Blueprint</h1>
        <p className="text-gray-300 mb-6">
          Download my resume to get the blueprint of my operations, skills, and
          achievements.
        </p>
       <a
  href="https://drive.google.com/uc?export=download&id=1mznCX-oF7wAe_hO7LhYLDxxV6QCjpu8f"
  target="_blank"
  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-red-500/50 transition duration-300"
  download
>
  📄 Download Resume
</a>

      </div>
    </PageWrapper>
  );
}

export default Resume;
