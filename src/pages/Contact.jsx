const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>
        <p className="mb-4 text-gray-700">
          We're thrilled to hear from you! Whether you have questions, feedback,
          or just want to say hello, feel free to get in touch with us.
        </p>
        <p className="mb-8 text-gray-700">
          You can reach out to us at{" "}
          <a
            href="mailto:rishavsah4u@gmail.com"
            className="text-blue-500 hover:underline"
          >
            rishavsah4u@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
