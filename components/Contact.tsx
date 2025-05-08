import React, { forwardRef, useState } from "react";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
    const [formData, setFormData] = useState<FormData>({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      
      try {
        // Replace these with your actual EmailJS service ID, template ID, and public key
        const serviceId = "service_gkcuqij";
        const templateId = "template_mvqg5xj";
        const publicKey = "aB-QWtFMbZpyRUIrM";
        
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        };
        
        const result = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );
        
        console.log("Email sent successfully:", result.text);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } catch (err) {
        console.error("Error sending email:", err);
        setError("Failed to send email. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    return (
        <div ref={ref} className="pt-[8rem] pb-[3rem] bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
                <div>
                    <h1 className="heading_primary">
                        Contact <span className="text-yellow-400">Me</span> {" "}
                    </h1>
                    <p className="text-[15px] text-white mt-[1rem] opacity-75">
                        {"Have a question or want to work on a project together, don't hesitate to reach out!!"}
                    </p>
                    <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold">
                        +1 (705) 992-3640
                    </h1>
                </div>
                <div>
                    {submitted ? (
                      <div className="bg-green-600 text-white p-4 rounded-md text-center">
                        <p className="font-bold text-lg">Message Sent!</p>
                        <p>{"Thank you for reaching out. I'll get back to you soon."}</p>
                        <button 
                          onClick={() => setSubmitted(false)}
                          className="mt-3 py-2 px-4 bg-green-700 hover:bg-green-800 rounded-md"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
                            <input 
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Name" 
                              required
                              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4" 
                            />
                            <input 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email" 
                              required
                              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4" 
                            />
                        </div>
                        <input 
                          type="text" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject" 
                          required
                          className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4" 
                        />
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Message" 
                          required
                          className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4" 
                          rows={4}
                        ></textarea>
                        
                        {error && (
                          <div className="mb-4 text-red-500">{error}</div>
                        )}
                        
                        <button 
                          type="submit"
                          disabled={loading}
                          className={`py-[0.7rem] mb-[1.5rem] w-full outline-none text-white ${loading ? 'bg-blue-500' : 'bg-blue-700 hover:bg-blue-800'} rounded-md px-4 flex justify-center items-center`}
                        >
                          {loading ? 'Sending...' : 'Submit'}
                        </button>
                      </form>
                    )}
                </div>
            </div>
        </div>
    );
});

Contact.displayName = "Contact";
export default Contact;