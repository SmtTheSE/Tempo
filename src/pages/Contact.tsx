import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    service_interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        service_interest: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            Ready to start your ocean adventure? Contact us today and let's plan your perfect trip
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900">Message sent successfully!</p>
                  <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-900">Something went wrong. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full_name" className="block text-sm font-semibold text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  required
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="+84 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="service_interest" className="block text-sm font-semibold text-primary mb-2">
                  Interested In
                </label>
                <select
                  id="service_interest"
                  name="service_interest"
                  value={formData.service_interest}
                  onChange={(e) => setFormData({ ...formData, service_interest: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a tour...</option>
                  <option value="Island Hopping Adventure">Island Hopping Adventure</option>
                  <option value="Sunset Cruise Experience">Sunset Cruise Experience</option>
                  <option value="Diving Discovery Tour">Diving Discovery Tour</option>
                  <option value="Beach Relaxation Package">Beach Relaxation Package</option>
                  <option value="Water Sports Adventure">Water Sports Adventure</option>
                  <option value="Fishing Expedition">Fishing Expedition</option>
                  <option value="Custom Tour">Custom Tour</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your ideal ocean adventure..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="apple-btn w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-lg p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Visit Us</h4>
                  <p className="text-accent">123 Coastal Road, Vung Tau, Vietnam</p>
                  <p className="text-sm text-accent mt-1">Open daily: 8:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-lg p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Call Us</h4>
                  <p className="text-accent">+84 123 456 789</p>
                  <p className="text-sm text-accent mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-lg p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email Us</h4>
                  <p className="text-accent">info@marinatravel.vn</p>
                  <p className="text-sm text-accent mt-1">We reply within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-lg p-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Chat With Us</h4>
                  <p className="text-accent">Live chat available</p>
                  <p className="text-sm text-accent mt-1">Online during business hours</p>
                </div>
              </div>
            </div>

            <div className="apple-card p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h4 className="font-bold text-primary text-xl">Operating Hours</h4>
              </div>
              <div className="space-y-2 text-accent">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-semibold">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Public Holidays</span>
                  <span className="font-semibold">7:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="apple-card overflow-hidden rounded-2xl">
              <div className="bg-gray-200 border-b border-border p-4">
                <h4 className="font-bold text-primary text-xl flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Our Location in Vung Tau, Ba Ria - Vung Tau, Vietnam
                </h4>
              </div>
              <div className="h-64 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841455006393!2d107.0656073751158!3d10.028704972593412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175f9a9a1c9a549%3A0x59e43a9bceaea7ce!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBDw7RuZyBOZ2jhu4cgVGjDtG5nIFRpbiAtIMSQ4bqjaSBo4buNYyBRdeG6oW5nIE5nw6R5!5e0!3m2!1sen!2s!4v1701784576893!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Marina Travel Location in Vung Tau, Ba Ria - Vung Tau, Vietnam"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}