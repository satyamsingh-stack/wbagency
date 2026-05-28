# EmailJS Setup Guide

## Overview
EmailJS has been integrated into your contact form. When users submit the form, their messages will be sent directly to **Satyam0478@gmail.com**.

## Setup Instructions

### Step 1: Create an EmailJS Account
1. Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create an Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **"Create New Service"**
3. Choose **Gmail** as the service provider
4. Connect your Gmail account (use Satyam0478@gmail.com)
5. Complete the authorization
6. Copy the **Service ID** (format: `service_xxxxx`)

### Step 3: Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click **"Create New Template"**
3. Set the template name (e.g., "Contact Form")
4. Use the following template variables in your email template:
   - `{{from_name}}` - Visitor's name
   - `{{from_email}}` - Visitor's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (Satyam0478@gmail.com)

**Example Email Template:**
```
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

5. Copy the **Template ID** (format: `template_xxxxx`)

### Step 4: Get Your Public Key
1. Go to the **Account** section in EmailJS dashboard
2. Under "API Keys", copy your **Public Key** (format: `xxxxxxxxxxxxxxxxxxxxxxxx`)

### Step 5: Update the Contact Form
Open `src/sections/Contact.jsx` and replace the placeholders:

```javascript
// Line ~19: Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY_HERE')  // Replace with your Public Key

// Line ~42: Update the sendEmail function
const response = await emailjs.send(
  'YOUR_SERVICE_ID_HERE',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID_HERE',     // Replace with your Template ID
  {
    // These variables will be available in your email template
    to_email: 'Satyam0478@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
)
```

### Example Replacement:
```javascript
emailjs.init('3a1c5d8f9e2b4k7m9p0w1s')

const response = await emailjs.send(
  'service_a1b2c3d4e5f6g7h8',
  'template_x1y2z3a4b5c6d7e8f',
  {
    to_email: 'Satyam0478@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
)
```

## Testing

1. Save your changes
2. Navigate to the contact form on your website
3. Fill in a test message
4. Click "Send Message"
5. You should see a success message
6. Check your email (Satyam0478@gmail.com) for the message

## Features Implemented

✅ EmailJS integration
✅ Form validation
✅ Loading state during submission
✅ Success message display
✅ Error handling with user-friendly messages
✅ Auto-clear form after successful submission
✅ Responsive design

## Troubleshooting

**"Failed to send message" error:**
- Verify your Service ID, Template ID, and Public Key are correct
- Check that the Gmail account is still connected in EmailJS
- Ensure your email template has the correct variable names

**Not receiving emails:**
- Check your spam/junk folder
- Verify the recipient email (Satyam0478@gmail.com) is correct in the template
- Check EmailJS dashboard for any service errors

**CORS errors:**
- This is normal with EmailJS browser integration
- Make sure your domain is whitelisted in EmailJS (if needed)

## Free Tier Limits

- **200 emails/month** on the free plan
- If you need more, upgrade to a paid plan on EmailJS

## Security Note

Your Public Key is safe to expose in frontend code. Keep your **Service ID** and **Template ID** private but they can be in frontend code as well since they don't provide sensitive access.

---

For more help, visit: [EmailJS Documentation](https://www.emailjs.com/docs/)
