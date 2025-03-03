import React, { useContext } from 'react'
import { FaqContext } from '../contexts/FaqContext'
import FaqItem from './elements/FaqItem'
import ContactOption from './elements/ContactOption'

const FAQ = () => {
  const { faqs, loading, error } = useContext(FaqContext);

  const fallbackFaqs = [
    {
      id: 1,
      question: "Is any of my personal information stored in the App?",
      answer: "No, we only store the minimum amount of information needed to provide our services. Your privacy is our priority."
    },
    {
      id: 2,
      question: "What formats can I download my transaction history in?",
      answer: "You can download your transaction history in PDF, CSV, and Excel formats for your convenience."
    },
    {
      id: 3,
      question: "Can I schedule future transfers?",
      answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
      isOpen: true
    },
    {
      id: 4,
      question: "When can I use Banking App services?",
      answer: "You can use our Banking App services 24/7, including weekends and holidays."
    },
    {
      id: 5,
      question: "Can I create my own password that is easy for me to remember?",
      answer: "Yes, you can create your own password, but we recommend using a strong password with a mix of letters, numbers, and special characters for security."
    },
    {
      id: 6,
      question: "What happens if I forget or lose my password?",
      answer: "If you forget your password, you can easily reset it through the 'Forgot Password' option on the login screen."
    }
  ];
  
  
  const contactOptions = [
    {
      id: 1,
      title: "Still have questions?",
      icon: "bi bi-telephone",
      buttonText: "Contact us",
      buttonLink: "/contact",
      iconColor: "#6366F1"
    },
    {
      id: 2,
      title: "Don't like phone calls?",
      icon: "bi bi-chat-dots",
      buttonText: "Contact us",
      buttonLink: "/contact", 
      iconColor: "#22C55E"
    }
  ];

  const mappedFaqs = faqs.map(faq => ({
    id: faq.id,
    question: faq.title,     
    answer: faq.content      
  }));

  const displayFaqs = (mappedFaqs && mappedFaqs.length > 0) ? mappedFaqs : fallbackFaqs;

  return (
    <section id="faq-section">
      <div className="container">
        <div className="faq-grid">
          
          <div className="faq-headline">
            <h2>Any questions?</h2>
            <h3>Check out the FAQs</h3>
            
            <p className="faq-description">
              Still have unanswered questions and need to get in touch?
            </p>

            <div className="contact-options">
              {contactOptions.map(option => (
                <ContactOption 
                  key={option.id}
                  title={option.title}
                  icon={option.icon} 
                  buttonText={option.buttonText}
                  buttonLink={option.buttonLink}
                  iconColor={option.iconColor}
                />
              ))}
            </div>
          </div>
          
          <div className="faq-items">
            {loading ? (
              <div className="loading">Loading FAQs...</div>
            ) : error ? (
              <div className="error">
                <p>Could not load FAQs. Using default questions instead.</p>
                {fallbackFaqs.map((faq, index) => (
                  <FaqItem 
                    key={`fallback-${index}`}
                    question={faq.question} 
                    answer={faq.answer} 
                    isOpen={index === 2}
                  />
                ))}
              </div>
            ) : (
              displayFaqs.map((faq, index) => (
                <FaqItem 
                  key={faq.id || `faq-${index}`}
                  question={faq.question} 
                  answer={faq.answer} 
                  isOpen={index === 2}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ