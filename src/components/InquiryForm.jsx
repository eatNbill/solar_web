import { useState } from 'react'
import { SITE } from '../data/siteData'

const SERVICES_LIST = ['Residential Solar','Commercial Solar','Industrial Solar','Solar Water Pump','Battery Storage','AMC / Maintenance','Subsidy Assistance']
const SIZES_LIST = ['Not sure yet','1–3 kW (Small Home)','3–5 kW (Medium Home)','5–10 kW (Large Home)','10–50 kW (Commercial)','50 kW+ (Industrial)']

export default function InquiryForm({ dark = true }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', size: '', city: '', msg: '' })
  const [sent, setSent] = useState(false)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const sendWA = () => {
    if (!form.name || !form.phone || !form.city) return alert('Please fill Name, Phone and City.')
    const text = `Hello ${SITE.name}! ☀️\n\n*New Inquiry from Website*\n━━━━━━━━━━━━━━━━\n*Name:* ${form.name}\n*Phone:* ${form.phone}${form.email ? `\n*Email:* ${form.email}` : ''}\n*Service:* ${form.service || 'Not specified'}\n*Size:* ${form.size || 'Not sure'}\n*City:* ${form.city}${form.msg ? `\n*Message:* ${form.msg}` : ''}\n━━━━━━━━━━━━━━━━\nPlease share a quote. Thank you!`
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const cls = dark ? '' : 'form-card-light'

  return (
    <div className={`form-card ${cls}`}>
      <p className="form-title">Send Us an Inquiry</p>
      <p className="form-sub">Your message goes directly to our WhatsApp 💬</p>

      <div className="fg-row">
        <div className="fg">
          <label>Your Name *</label>
          <input value={form.name} onChange={set('name')} placeholder="Rajesh Sharma" />
        </div>
        <div className="fg">
          <label>Phone *</label>
          <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 98765 43210" />
        </div>
      </div>

      <div className="fg">
        <label>Email</label>
        <input type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" />
      </div>

      <div className="fg-row">
        <div className="fg">
          <label>Service Needed</label>
          <select value={form.service} onChange={set('service')}>
            <option value="">Select a service</option>
            {SERVICES_LIST.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="fg">
          <label>System Size</label>
          <select value={form.size} onChange={set('size')}>
            {SIZES_LIST.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="fg">
        <label>Your City *</label>
        <input value={form.city} onChange={set('city')} placeholder="Surat, Gujarat" />
      </div>

      <div className="fg">
        <label>Message / Query</label>
        <textarea value={form.msg} onChange={set('msg')} placeholder="Tell us your requirement, monthly electricity bill, etc." />
      </div>

      <div className="form-actions">
        <button className="btn-wa-form" onClick={sendWA}>
          {sent ? '✅ Sent! We\'ll reply soon' : '💬 Send via WhatsApp'}
        </button>
        <button className="btn-call-form" onClick={() => window.location.href = `tel:${SITE.phone}`}>
          📞 Call
        </button>
      </div>
    </div>
  )
}
