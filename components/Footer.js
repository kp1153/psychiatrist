const Footer = () => {
  return (
    <footer className="text-center p-4 text-gray-600 border-t">
      {/* केंद्र का नाम */}
      <p className="mb-2 text-xl font-bold text-green-700">
        NAVCHETNA Neuro-Psychiatry Centre
      </p>

      {/* पता */}
      <p className="mb-2 text-base font-semibold text-gray-800">
        पता: बी-29, भुवननगर नगर (उत्सव वाटिका के पास) अर्दली बाजार, वाराणसी
      </p>

      <p className="mb-1">
        © {new Date().getFullYear()} मानसिक स्वास्थ्य केंद्र। सर्वाधिकार
        सुरक्षित।
      </p>
      <p className="text-sm">
        वेब डेवलपर —{" "}
        <a
          href="https://www.web-developer-kp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 font-medium"
        >
          क्रिएटिव सॉल्यूशंस
        </a>
      </p>
    </footer>
  );
};

export default Footer;
