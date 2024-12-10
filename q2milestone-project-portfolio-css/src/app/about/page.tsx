'use client';

export default function MusicSchoolContactUs() {
  
  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: '6rem',
        paddingBottom: '7rem',// equivalent to bg-gray-100
        color: '#111827', // equivalent to dark mode's bg-gray-900
      }}
    >
      <div
        style={{
          maxWidth: '64rem', // equivalent to max-w-4xl
          margin: '0 auto',
          padding: '1rem', // equivalent to px-4
          position: 'relative',
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: '2.25rem', // equivalent to text-4xl
            lineHeight: '2.5rem',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            marginBottom: '2rem', // equivalent to mb-8
            color: 'white',
          }}
        >
          About Us
        </h1>
        <p
          style={{
            color: '#9ca3af', // equivalent to text-neutral-400
            margin: '0 auto',
            marginTop: '1rem',
            marginBottom: '1rem', // equivalent to my-2
            fontSize: '0.875rem', // equivalent to text-sm
            textAlign: 'center',
            lineHeight: '1.25rem', // similar to space-y-4
          }}
        >
          Welcome! I’m a passionate Frontend Developer skilled in HTML, CSS,
          JavaScript, TypeScript, and Next.js. My portfolio is designed to give
          you a clear view of my technical skills, project experiences, and
          creative process. I’ve crafted each section here to showcase my
          ability to create intuitive and visually appealing web interfaces,
          from concept to code.
        </p>
        <p
          style={{
            color: '#9ca3af',
            margin: '0 auto',
            marginTop: '1rem',
            marginBottom: '1rem',
            fontSize: '0.875rem',
            textAlign: 'center',
            lineHeight: '1.25rem',
          }}
        >
          In addition to web development, I’m proficient in Adobe Illustrator
          and have a working knowledge of Figma, which I use to enhance my
          design and prototyping skills. Tools like Microsoft Excel and Word
          help me stay organized and efficient, ensuring my projects are
          well-managed and my time is optimized.
        </p>
        <p
          style={{
            color: '#9ca3af',
            margin: '0 auto',
            fontSize: '0.875rem',
            textAlign: 'center',
            lineHeight: '1.25rem',
          }}
        >
          I’m excited to connect with you and explore opportunities to work on
          exciting projects. Let’s collaborate and bring your ideas to life!
        </p>
        <p
          style={{
            color: '#9ca3af',
            margin: '0 auto',
            marginTop: '1.5rem', // equivalent to mt-6
            fontSize: '0.875rem',
            textAlign: 'center',
            lineHeight: '1.25rem',
          }}
        >
          This portfolio highlights not only my skills and projects but also my
          approach to problem-solving and design thinking. Explore, and let’s
          connect to discuss how we can work together to bring ideas to life!
        </p>
      </div>
    </div>
  );

}

