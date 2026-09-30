import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables (.env)
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Parsing Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve built frontend static assets from 'dist'
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath, {
  maxAge: '1d',
  setHeaders: (res, filePath) => {
    // Cache static immutable assets aggressively for speed
    if (filePath.includes(path.join('assets'))) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// ==========================================
// 1. HEALTH CHECK & SYSTEM TELEMETRY
// ==========================================
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ONLINE',
    service: 'ZETACODING Portal Backend',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  });
});

// ==========================================
// 2. PAYMENT GATEWAYS API (Razorpay / Stripe / Custom)
// ==========================================
/**
 * Create Payment Order (e.g. Razorpay / Stripe / Cashfree / Telr)
 * Call this endpoint from frontend checkout / digital business card purchase
 */
app.post('/api/payments/create-order', async (req, res) => {
  try {
    const { planId, amount, currency = 'INR', customerEmail, customerPhone } = req.body;

    // TODO: Initialize your preferred gateway SDK here:
    // Example with Razorpay:
    // const order = await razorpay.orders.create({ amount: amount * 100, currency, receipt: `rcpt_${Date.now()}` });

    console.log(`[PAYMENT LOG] New order request for Plan: ${planId}, Amount: ${amount} ${currency}`);

    return res.status(200).json({
      success: true,
      message: 'Payment order initialized successfully',
      data: {
        orderId: `order_sample_${Date.now()}`,
        amount,
        currency,
        planId,
        customerEmail,
        customerPhone
      }
    });
  } catch (error) {
    console.error('[PAYMENT ERROR]', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create payment order',
      error: error.message
    });
  }
});

/**
 * Verify Payment Signature / Webhook
 */
app.post('/api/payments/verify', async (req, res) => {
  try {
    const { orderId, paymentId, signature } = req.body;

    // TODO: Validate signature with crypto HMAC SHA256:
    // const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    // hmac.update(`${orderId}|${paymentId}`);
    // const generatedSignature = hmac.digest('hex');

    console.log(`[PAYMENT VERIFY] Verifying Payment: ${paymentId} for Order: ${orderId}`);

    return res.status(200).json({
      success: true,
      verified: true,
      message: 'Payment verified successfully'
    });
  } catch (error) {
    console.error('[VERIFY ERROR]', error);
    return res.status(400).json({
      success: false,
      message: 'Payment verification failed',
      error: error.message
    });
  }
});

// ==========================================
// 3. CONTACT & INQUIRY SUBMISSION API
// ==========================================
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, phone, branch, serviceInterest, message } = req.body;
    
    console.log(`[INQUIRY LOG] From: ${fullName} (${email}, ${phone}), Branch: ${branch}, Service: ${serviceInterest}`);

    // TODO: Send email via Nodemailer or sync with CRM / WhatsApp
    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully. Our team will contact you shortly.'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to process inquiry',
      error: error.message
    });
  }
});

// ==========================================
// 4. SPA FALLBACK ROUTING (Supports React Router HTML5 History)
// ==========================================
// Any non-API request serves the React app's index.html
app.get('{*path}', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start Server (only when not running inside Vercel serverless functions)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`==============================================`);
    console.log(`🚀 ZETACODING Server running on Port: ${PORT}`);
    console.log(`🌐 Local URL: http://localhost:${PORT}`);
    console.log(`📦 Serving static files from: ${distPath}`);
    console.log(`==============================================`);
  });
}

export default app;
