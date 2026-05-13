import { useState, useCallback } from "react";
import { Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import demoReceipt from "@/assets/demo-receipt.jpg";
import demoInvoice from "@/assets/demo-invoice.jpg";
import demoIne from "@/assets/demo-ine.jpg";
import demoPassport from "@/assets/demo-passport.jpg";
import demoBirth from "@/assets/demo-birth.jpg";
import demoCheck from "@/assets/demo-check.jpg";
import demoBankStatement from "@/assets/demo-bankstatement.jpg";

const tabs = ["Receipt", "Invoice", "INE", "Pasaport", "Birth certificate", "Check", "Bank Statement"];

type LineItem = { description: string; qty?: number; total: number };

type DocData = {
  title: string;
  subtitle?: string;
  logo?: string;
  fields: { label: string; value: string }[];
  lineItems?: LineItem[];
  totals?: { label: string; value: string; emphasis?: boolean }[];
  json: Record<string, unknown>;
};

const documentData: Record<string, DocData> = {
  Receipt: {
    title: "Walgreens",
    subtitle: "191 E 3rd Ave, San Mateo, CA 94401, US · 650-342-2723",
    logo: "https://cdn.veryfi.com/logos/us/126568182.jpeg",
    fields: [
      { label: "Receipt Date", value: "March 28, 2023, 1:10 pm" },
      { label: "Payment", value: "Visa ***1850" },
    ],
    lineItems: [
      { description: "RED BULL ENRGY DRNK CNS 8.4OZ 6PK", qty: 1, total: 8.79 },
      { description: "CA REDMP VAL", qty: 1, total: 0.30 },
      { description: "COCA COLA MINICAN 7.5Z 6PK", qty: 1, total: 4.99 },
      { description: "NAB OREO CKIES C/PK 5.25OZ WHSE", qty: 1, total: 2.69 },
      { description: "DORITOS NACHO", qty: 1, total: 2.00 },
      { description: "F/LAYS REGULAR 2.63OZ", qty: 1, total: 2.00 },
    ],
    totals: [
      { label: "Subtotal", value: "$27.60" },
      { label: "Tax", value: "$1.93" },
      { label: "Total", value: "$29.53", emphasis: true },
    ],
    json: {
      document_type: "receipt",
      vendor: { name: "Walgreens", address: "191 E 3rd Ave, San Mateo, CA 94401, US", phone: "650-342-2723" },
      date: "2023-03-28 13:10:00",
      currency_code: "USD",
      subtotal: 27.60,
      tax: 1.93,
      total: 29.53,
      payment: { card_number: "1850", type: "visa" },
    },
  },
  Invoice: {
    title: "Acme Corporation",
    subtitle: "1234 Market St, San Francisco, CA 94103, US",
    fields: [
      { label: "Invoice #", value: "INV-2024-00187" },
      { label: "Invoice Date", value: "January 15, 2024" },
      { label: "Due Date", value: "February 14, 2024" },
      { label: "Bill To", value: "Globex Inc." },
    ],
    lineItems: [
      { description: "Cloud hosting services - January", qty: 1, total: 1200.00 },
      { description: "Premium support package", qty: 1, total: 350.00 },
      { description: "Additional storage (500GB)", qty: 2, total: 200.00 },
    ],
    totals: [
      { label: "Subtotal", value: "$1,750.00" },
      { label: "Tax (8.5%)", value: "$148.75" },
      { label: "Total Due", value: "$1,898.75", emphasis: true },
    ],
    json: {
      document_type: "invoice",
      vendor: { name: "Acme Corporation", address: "1234 Market St, San Francisco, CA 94103, US" },
      bill_to: "Globex Inc.",
      invoice_number: "INV-2024-00187",
      invoice_date: "2024-01-15",
      due_date: "2024-02-14",
      currency_code: "USD",
      subtotal: 1750.00,
      tax: 148.75,
      total: 1898.75,
    },
  },
  INE: {
    title: "Instituto Nacional Electoral",
    subtitle: "Credencial para Votar (México)",
    fields: [
      { label: "Nombre", value: "García López, Juan Carlos" },
      { label: "Sexo", value: "H" },
      { label: "Fecha de Nacimiento", value: "12/05/1985" },
      { label: "Domicilio", value: "Av. Reforma 123, CDMX, 06600" },
      { label: "CURP", value: "GALJ850512HDFRPN09" },
      { label: "Clave de Elector", value: "GRLPJN85051209H700" },
      { label: "Vigencia", value: "2030" },
    ],
    json: {
      document_type: "ine",
      country: "MX",
      first_name: "Juan Carlos",
      last_name: "García López",
      gender: "M",
      date_of_birth: "1985-05-12",
      address: "Av. Reforma 123, CDMX, 06600",
      curp: "GALJ850512HDFRPN09",
      voter_key: "GRLPJN85051209H700",
      valid_until: "2030",
    },
  },
  Pasaport: {
    title: "United States of America",
    subtitle: "Passport / Pasaporte",
    fields: [
      { label: "Passport No.", value: "X12345678" },
      { label: "Surname", value: "SMITH" },
      { label: "Given Names", value: "JOHN MICHAEL" },
      { label: "Nationality", value: "USA" },
      { label: "Date of Birth", value: "15 MAR 1982" },
      { label: "Sex", value: "M" },
      { label: "Date of Issue", value: "10 JUN 2020" },
      { label: "Date of Expiration", value: "09 JUN 2030" },
      { label: "Authority", value: "U.S. Department of State" },
    ],
    json: {
      document_type: "passport",
      country: "USA",
      passport_number: "X12345678",
      surname: "SMITH",
      given_names: "JOHN MICHAEL",
      nationality: "USA",
      date_of_birth: "1982-03-15",
      sex: "M",
      date_of_issue: "2020-06-10",
      date_of_expiration: "2030-06-09",
      authority: "U.S. Department of State",
    },
  },
  "Birth certificate": {
    title: "Acta de Nacimiento",
    subtitle: "Registro Civil — México",
    fields: [
      { label: "Nombre", value: "María Fernanda Ramírez Soto" },
      { label: "Sexo", value: "F" },
      { label: "Fecha de Nacimiento", value: "08/22/2010" },
      { label: "Lugar de Nacimiento", value: "Guadalajara, Jalisco, México" },
      { label: "Nombre del Padre", value: "Roberto Ramírez Díaz" },
      { label: "Nombre de la Madre", value: "Laura Soto Vega" },
      { label: "CURP", value: "RASM100822MJCMTR04" },
      { label: "Acta No.", value: "00482" },
      { label: "Libro", value: "12" },
    ],
    json: {
      document_type: "birth_certificate",
      country: "MX",
      full_name: "María Fernanda Ramírez Soto",
      gender: "F",
      date_of_birth: "2010-08-22",
      place_of_birth: "Guadalajara, Jalisco, México",
      father_name: "Roberto Ramírez Díaz",
      mother_name: "Laura Soto Vega",
      curp: "RASM100822MJCMTR04",
      certificate_number: "00482",
      book: "12",
    },
  },
  Check: {
    title: "Bank of America",
    subtitle: "Personal Check",
    fields: [
      { label: "Check No.", value: "1042" },
      { label: "Date", value: "April 12, 2024" },
      { label: "Pay to the order of", value: "Jane Doe" },
      { label: "Amount", value: "$2,450.00" },
      { label: "Amount in words", value: "Two thousand four hundred fifty and 00/100" },
      { label: "Memo", value: "Rent — April" },
      { label: "Routing No.", value: "026009593" },
      { label: "Account No.", value: "**** 4821" },
    ],
    json: {
      document_type: "check",
      bank_name: "Bank of America",
      check_number: "1042",
      date: "2024-04-12",
      payee: "Jane Doe",
      amount: 2450.00,
      amount_in_words: "Two thousand four hundred fifty and 00/100",
      memo: "Rent — April",
      routing_number: "026009593",
      account_number: "****4821",
      currency_code: "USD",
    },
  },
  "Bank Statement": {
    title: "Chase Bank",
    subtitle: "Monthly Account Statement",
    fields: [
      { label: "Account Holder", value: "Michael Johnson" },
      { label: "Account No.", value: "**** **** **** 7821" },
      { label: "Statement Period", value: "Mar 1 – Mar 31, 2024" },
      { label: "Opening Balance", value: "$5,420.18" },
      { label: "Closing Balance", value: "$6,184.92" },
    ],
    lineItems: [
      { description: "03/02 — Direct Deposit Payroll", total: 3200.00 },
      { description: "03/05 — Whole Foods Market", total: -142.37 },
      { description: "03/10 — Rent Payment ACH", total: -1800.00 },
      { description: "03/15 — Direct Deposit Payroll", total: 3200.00 },
      { description: "03/22 — Amazon.com", total: -89.45 },
      { description: "03/28 — Electric Company", total: -125.44 },
    ],
    totals: [
      { label: "Total Credits", value: "$6,400.00" },
      { label: "Total Debits", value: "-$2,157.26" },
      { label: "Closing Balance", value: "$6,184.92", emphasis: true },
    ],
    json: {
      document_type: "bank_statement",
      bank_name: "Chase Bank",
      account_holder: "Michael Johnson",
      account_number: "************7821",
      statement_period: { from: "2024-03-01", to: "2024-03-31" },
      opening_balance: 5420.18,
      closing_balance: 6184.92,
      total_credits: 6400.00,
      total_debits: -2157.26,
      currency_code: "USD",
    },
  },
};

const sampleImages: Record<string, string> = {
  Receipt: demoReceipt,
  Invoice: demoInvoice,
  INE: demoIne,
  Pasaport: demoPassport,
  "Birth certificate": demoBirth,
  Check: demoCheck,
  "Bank Statement": demoBankStatement,
};

const Demo = () => {
  const [activeTab, setActiveTab] = useState("Receipt");
  const [viewMode, setViewMode] = useState<"visualized" | "json">("visualized");
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => setIsDragging(false), []);
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const data = documentData[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {tab}
              </button>
            ))}
            <button className="px-5 py-2.5 rounded-full text-sm font-medium bg-card border border-border text-muted-foreground">
              More Docs…
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Document / Upload */}
            <div className="space-y-4">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`bg-card border-2 border-dashed rounded-2xl p-8 text-center transition-colors ${
                  isDragging ? "border-primary bg-primary/5" : "border-border"
                }`}
              >
                <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-foreground font-medium">Drag or upload your document here</p>
                <p className="text-xs text-muted-foreground mt-1">(JPEG, PNG or PDF)</p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 flex items-center justify-center">
                <img
                  src={sampleImages[activeTab] || sampleImages.Receipt}
                  alt={`Sample ${activeTab}`}
                  className="max-h-[400px] rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Extracted data */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="flex border-b border-border">
                <button
                  onClick={() => setViewMode("visualized")}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    viewMode === "visualized" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                  }`}
                >
                  Visualized Data
                </button>
                <button
                  onClick={() => setViewMode("json")}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    viewMode === "json" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                  }`}
                >
                  JSON Data
                </button>
              </div>

              <div className="p-6 max-h-[600px] overflow-y-auto scrollbar-hide">
                {viewMode === "visualized" ? (
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      {data.logo && (
                        <img src={data.logo} alt={data.title} className="w-12 h-12 rounded-lg object-cover" />
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{data.title}</h3>
                        {data.subtitle && (
                          <p className="text-xs text-muted-foreground">{data.subtitle}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {data.fields.map((f) => (
                        <div key={f.label}>
                          <p className="text-xs text-muted-foreground mb-1">{f.label}</p>
                          <p className="text-sm text-foreground break-words">{f.value}</p>
                        </div>
                      ))}
                    </div>

                    {data.lineItems && data.lineItems.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">☷ Line Items</h4>
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 text-muted-foreground font-medium">#</th>
                              <th className="text-left py-2 text-muted-foreground font-medium">Item</th>
                              <th className="text-right py-2 text-muted-foreground font-medium">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.lineItems.map((item, i) => (
                              <tr key={i} className="border-b border-border/50">
                                <td className="py-2 text-muted-foreground">{i + 1}</td>
                                <td className="py-2 text-foreground">{item.description}</td>
                                <td className="py-2 text-right text-foreground">
                                  {item.total < 0 ? `-$${Math.abs(item.total).toFixed(2)}` : `$${item.total.toFixed(2)}`}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {data.totals && data.totals.length > 0 && (
                      <div className="space-y-1 border-t border-border pt-3">
                        {data.totals.map((t) => (
                          <div
                            key={t.label}
                            className={`flex justify-between text-sm ${t.emphasis ? "font-bold" : ""}`}
                          >
                            <span className={t.emphasis ? "text-foreground" : "text-muted-foreground"}>{t.label}</span>
                            <span className={t.emphasis ? "text-primary" : "text-foreground"}>{t.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="text-xs text-primary font-mono whitespace-pre-wrap">
{JSON.stringify(data.json, null, 2)}
                  </pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
