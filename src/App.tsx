import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Pricing from "./pages/Pricing.tsx";
import Demo from "./pages/Demo.tsx";
import About from "./pages/About.tsx";
import Security from "./pages/Security.tsx";
import Contact from "./pages/Contact.tsx";
import ReceiptOcrApi from "./pages/ReceiptOcrApi.tsx";
import InvoiceOcrApi from "./pages/InvoiceOcrApi.tsx";
import BankCheckOcrApi from "./pages/BankCheckOcrApi.tsx";
import DataExtraction from "./pages/DataExtraction.tsx";
import DocumentCapture from "./pages/DocumentCapture.tsx";
import FraudDetection from "./pages/FraudDetection.tsx";
import Customers from "./pages/Customers.tsx";
import Blog from "./pages/Blog.tsx";
import Careers from "./pages/Careers.tsx";
import WhyDocslyzer from "./pages/WhyDocslyzer.tsx";
import Embedded from "./pages/Embedded.tsx";
import Workflows from "./pages/Workflows.tsx";
import WhatsappChatbot from "./pages/WhatsappChatbot.tsx";
import W2OcrApi from "./pages/W2OcrApi.tsx";
import W9OcrApi from "./pages/W9OcrApi.tsx";
import BankStatementsOcrApi from "./pages/BankStatementsOcrApi.tsx";
import Developers from "./pages/Developers.tsx";
import Legal from "./pages/solutions/Legal.tsx";
import Constructors from "./pages/solutions/Constructors.tsx";
import Notaries from "./pages/solutions/Notaries.tsx";
import RealEstate from "./pages/solutions/RealEstate.tsx";
import Fintech from "./pages/solutions/Fintech.tsx";
import Education from "./pages/solutions/Education.tsx";
import Register from "./pages/Register.tsx";

import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/about" element={<About />} />
          <Route path="/security" element={<Security />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/receipt-ocr-api" element={<ReceiptOcrApi />} />
          <Route path="/invoice-ocr-api" element={<InvoiceOcrApi />} />
          <Route path="/bank-check-ocr-api" element={<BankCheckOcrApi />} />
          <Route path="/data-extraction" element={<DataExtraction />} />
          <Route path="/document-capture" element={<DocumentCapture />} />
          <Route path="/fraud-detection" element={<FraudDetection />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/why-docslyzer" element={<WhyDocslyzer />} />
          <Route path="/embedded" element={<Embedded />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/whatsapp-chatbot" element={<WhatsappChatbot />} />
          <Route path="/w2-ocr-api" element={<W2OcrApi />} />
          <Route path="/w9-ocr-api" element={<W9OcrApi />} />
          <Route path="/bank-statements-ocr-api" element={<BankStatementsOcrApi />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/solutions/legal" element={<Legal />} />
          <Route path="/solutions/constructors" element={<Constructors />} />
          <Route path="/solutions/notaries" element={<Notaries />} />
          <Route path="/solutions/real-estate" element={<RealEstate />} />
          <Route path="/solutions/fintech" element={<Fintech />} />
          <Route path="/solutions/education" element={<Education />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
