import React from 'react'
import FaqItem from './elements/FaqItem'
import ContactOption from './elements/ContactOption'

const FAQ = () => {
  // Statiska FAQ-frågor med svar
  const staticFaqs = [
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

  return (
    <section id="faq-section">
      <div className="container">
        <div className="faq-grid">
          
          {/* FAQ Headline */}
          <div className="faq-headline">
            <h2>Any questions?</h2>
            <h3>Check out the FAQs</h3>
            
            <p className="faq-description">
              Still have unanswered questions and need to get in touch?
            </p>

            <div className="contact-options">
              <div className="contact-option">
                <div className="contact-icon">
                  <i className="bi bi-telephone" style={{ color: "#6366F1" }}></i>
                </div>
                <div className="contact-title">Still have questions?</div>
                <a href="/contact" className="contact-button">
                  Contact us <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div className="contact-option">
                <div className="contact-icon">
                  <i className="bi bi-chat-dots" style={{ color: "#22C55E" }}></i>
                </div>
                <div className="contact-title">Don't like phone calls?</div>
                <a href="/contact" className="contact-button">
                  Contact us <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* FAQ Items */}
          <div className="faq-items">
            {staticFaqs.map((faq) => (
              <FaqItem 
                key={faq.id} 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={faq.id === 3} // Öppna bara den tredje frågan (Can I schedule future transfers?)
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ