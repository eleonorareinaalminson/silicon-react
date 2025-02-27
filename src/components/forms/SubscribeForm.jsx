import React, { useState } from 'react'

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    
    // Enkel validering
    if (!email || !email.includes('@')) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://kyhn24.azurewebsites.net/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Thanks for subscribing!' });
        setEmail('');
      } else {
        const errorData = await response.json().catch(() => ({}));
        setMessage({ 
          type: 'error', 
          text: errorData.message || 'Subscription failed. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage({ 
        type: 'error', 
        text: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="subscribe-form-container">
      <form id="subscribe-form" noValidate onSubmit={handleSubmit}>
        <div className="subscribe-email">
          <i className="bi bi-envelope"></i>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <button 
          type="submit" 
          className="btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {message && (
        <div className={`form-message ${message.type}`}>
          {message.text}
        </div>
      )}
    </div>
  )
}

export default SubscribeForm