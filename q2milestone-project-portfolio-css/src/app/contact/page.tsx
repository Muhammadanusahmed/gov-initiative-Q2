function MusicSchoolContactUs() {
  return (
    <div
      style={{
        border: '2px solid #0d9488',
        borderLeft: '0',
        borderRight: '0',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '42rem',
          margin: '0 auto',
          padding: '1rem',
          position: 'relative',
          zIndex: 0,
        }}
      >
        <h1
          style={{
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: 'white',
          }}
        >
          Contact Us
        </h1>
        <p
          style={{
            color: '#6b7280',
            maxWidth: '32rem',
            margin: '0 auto',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            textAlign: 'center',
          }}
        >
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form style={{ marginTop: '1rem' }}>
          <input
            type="email"
            placeholder="Your email address"
            style={{
              borderRadius: '0.5rem',
              backgroundColor: '#111827',
              border: '1px solid #1f2937',             
              padding: '1rem',
              width: '100%',
              fontSize: '1rem',
            }}
            required
          />
          <textarea
            placeholder="Your message"
            rows={5}
            style={{
              borderRadius: '0.5rem',
              border: '1px solid #1f2937',
              backgroundColor: '#111827',
              color: 'white',
              padding: '1rem',
              width: '100%',
              fontSize: '1rem',
              marginTop: '1rem',
            }}
            required
          ></textarea>
          <button
            type="submit"
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#14b8a6',
              color: 'white',
              fontWeight: '500',
              cursor: 'pointer',
              marginTop: '1rem',
              transition: 'background-color 0.3s ease',
              marginBottom : '3rem',
            }}
            
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
