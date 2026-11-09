# Hisaab, Please

A bill-splitting app with browser-based OCR. Bill photos are processed on the user's device;
there is no AI API key, account, or per-scan API charge. Splits and history stay in that
browser's local storage and do not sync across devices.

## Run locally

1. Install Node.js 20 or newer.
2. Open a terminal in `backend/` and run `npm install`.
3. Run `npm start`, then open [http://localhost:3000](http://localhost:3000).

The small Node server only serves the app and its health endpoint. Scanning works in the
browser and does not send bill photos to the server. An internet connection is needed to
download the OCR library and language data the first time.

## Deploy online

The repository includes a Render Blueprint in `render.yaml`:

1. Push the repository to GitHub.
2. In Render, create a **Blueprint** from the repository and deploy it.
3. Open the Render URL and use the app from a phone or computer.

No API key or paid AI service is required. Render's free service may sleep when idle, so the
first visit can take a while. Free-hosting limits and availability can change; confirm the
provider's current terms before relying on them.

You can also host the static `frontend/` directory on Cloudflare Pages or GitHub Pages. The
included Render setup serves the same files through the lightweight Node server.

## Scanning limitations

- Tesseract.js recognizes English text locally in the browser; it does not understand receipt
  layout as well as a vision model. The parser is heuristic, so check the highlighted item
  names, quantities and prices before splitting.
- Photos are not uploaded. The browser does download the OCR code and language data from public
  CDNs; an internet connection is needed for those assets.
- PDFs are rasterized and only the first page is scanned.
- For blurry, multilingual, or unusual receipts, correct the entries manually or paste the
  receipt text and use **Read items from text**.

The app also supports uneven splits, tax/tip/other charges, payer and UPI details, WhatsApp
sharing, and local history. Review each extracted amount before requesting payment.
