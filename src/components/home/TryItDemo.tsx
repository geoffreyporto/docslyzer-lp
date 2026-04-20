import { useState } from "react";
import demoReceipt from "@/assets/demo-receipt.jpg";
import demoInvoice from "@/assets/demo-invoice.jpg";

const tabs = ["Receipt", "Invoice", "INE", "Pasaport", "Birth certificate", "Check", "Bank Statement"];

const sampleImages: Record<string, string> = {
  Receipt: demoReceipt,
  Invoice: demoInvoice,
};

const receiptData = {
  vendor: { name: "Walgreens", address: "191 E 3rd Ave, San Mateo, CA 94401, US", phone: "650-342-2723" },
  date: "March 28, 2023, 1:10 pm",
  payment: { type: "Visa", last4: "1850" },
  lineItems: [
    { sku: "61126943157", item: "RED BULL ENRGY DRNK CNS 8.4OZ 6PK", qty: 1, price: 9.99, total: 8.79 },
    { sku: "00000007211", item: "CA REDMP VAL", qty: 1, price: 0, total: 0.30 },
    { sku: "04900006101", item: "COCA COLA MINICAN 7.5Z 6PK", qty: 1, price: 0, total: 4.99 },
    { sku: "04400000749", item: "NAB OREO CKIES C/PK 5.25OZ WHSE", qty: 1, price: 0, total: 2.69 },
    { sku: "02840032505", item: "DORITOS NACHO", qty: 1, price: 2, total: 2.00 },
    { sku: "02840032382", item: "F/LAYS REGULAR 2.63OZ", qty: 1, price: 2, total: 2.00 },
  ],
  subtotal: 27.60,
  tax: 1.93,
  total: 29.53,
};

const TryItDemo = () => {
  const [activeTab, setActiveTab] = useState("Receipt");
  const [viewMode, setViewMode] = useState<"visualized" | "json">("visualized");

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-muted-foreground text-lg mb-2">Unleash the power of your data in 3 simple steps.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Try It</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border text-muted-foreground hover:text-foreground">
            More Docs...
          </button>
        </div>

        {/* Demo content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Left: Document preview */}
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center min-h-[400px]">
            {sampleImages[activeTab] ? (
              <img
                src={sampleImages[activeTab]}
                alt={`Sample ${activeTab.toLowerCase()}`}
                className="max-h-[350px] rounded-lg shadow-lg"
                loading="lazy"
              />
            ) : (
              <div className="text-center text-muted-foreground text-sm">
                <p className="font-medium text-foreground mb-2">{activeTab} sample</p>
                <p>Coming soon</p>
              </div>
            )}
          </div>

          {/* Right: Extracted data */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {/* View mode tabs */}
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

            <div className="p-6 max-h-[400px] overflow-y-auto scrollbar-hide">
              {viewMode === "visualized" ? (
                <div className="space-y-6">
                  {/* Vendor info */}
                  <div className="flex items-start gap-4">
                    <img src="https://cdn.veryfi.com/logos/us/126568182.jpeg" alt="Walgreens" className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{receiptData.vendor.name}</h3>
                      <p className="text-xs text-muted-foreground">{receiptData.vendor.address}</p>
                      <p className="text-xs text-muted-foreground">{receiptData.vendor.phone}</p>
                    </div>
                  </div>

                  {/* Date & Payment */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Receipt Date</p>
                      <p className="text-sm text-foreground">{receiptData.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Payment</p>
                      <p className="text-sm text-foreground">{receiptData.payment.type} ***{receiptData.payment.last4}</p>
                    </div>
                  </div>

                  {/* Line Items */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">☷ Line Items</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 text-muted-foreground font-medium">#</th>
                            <th className="text-left py-2 text-muted-foreground font-medium">Item</th>
                            <th className="text-right py-2 text-muted-foreground font-medium">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {receiptData.lineItems.map((item, i) => (
                            <tr key={i} className="border-b border-border/50">
                              <td className="py-2 text-muted-foreground">{i + 1}</td>
                              <td className="py-2 text-foreground">{item.item}</td>
                              <td className="py-2 text-right text-foreground">${item.total.toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-3 space-y-1 border-t border-border pt-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="text-foreground">${receiptData.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax</span>
                        <span className="text-foreground">${receiptData.tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-foreground">Total</span>
                        <span className="text-primary">${receiptData.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <pre className="text-xs text-primary font-mono whitespace-pre-wrap">
{JSON.stringify({
  vendor: receiptData.vendor,
  date: "2023-03-28 13:10:00",
  currency_code: "USD",
  subtotal: receiptData.subtotal,
  tax: receiptData.tax,
  total: receiptData.total,
  payment: { card_number: receiptData.payment.last4, type: "visa" },
  line_items: receiptData.lineItems.map((item, i) => ({
    order: i, description: item.item, sku: item.sku, quantity: item.qty, total: item.total
  }))
}, null, 2)}
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryItDemo;
