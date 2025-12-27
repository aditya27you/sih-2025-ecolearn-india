import React from 'react';

const Lesson: React.FC = () => {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="font-heading">Understanding Climate Change</h1>
      <p className="font-sans">
        Climate change refers to long-term shifts in temperatures and weather patterns.
        These shifts may be natural, but since the 1800s, human activities have been the
        main driver of climate change...
      </p>
      <div className="bg-base-200 p-6 rounded-box my-8">
        <h3 className="font-heading mt-0">Key Takeaway</h3>
        <p className="font-sans mb-0">The Earth's average temperature has risen by about 1.1°C since the late 19th century.</p>
      </div>
    </article>
  );
};

export default Lesson;
