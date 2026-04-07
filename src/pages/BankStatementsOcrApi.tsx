import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, ArrowRight, Building, TrendingUp, Shield } from "lucide-react";

const fields = [
  "Account Holder Name", "Account Number", "Bank Name", "Statement Period",
  "Opening Balance", "Closing Balance", "Total Deposits", "Total Withdrawals",
  "Individual Transactions", "Transaction Date", "Transaction Description",
  "Transaction Amount", "Running Balance", "Check Numbers", "Interest Earned", "Fees Charged",
];

const BankStatementsOcrApi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Financial Documents</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Bank Statements OCR API</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Extract transactions, balances, and account details from bank statements across hundreds of financial institutions.
              </p>
              <div className="flex gap-4">
                <Link to="/demo" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                  Try Free
                </Link>
                <Link to="/contact" className="border border-border text-foreground px-6 py-3 rounded-full font-medium hover:border-primary/50 transition-colors">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Extracted Fields</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {fields.map((f) => (
                <div key={f} className="flex items-center gap-2 bg-card border border-border rounded-lg p-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Sample API Response</h2>
            <div className="bg-card border border-border rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-muted-foreground">{JSON.stringify({
                bank_name: "Chase Bank",
                account_holder: "Acme Corp",
                account_number: "****4567",
                statement_period: { start: "2025-01-01", end: "2025-01-31" },
                opening_balance: 25430.50,
                closing_balance: 31205.75,
                total_deposits: 12500.00,
                total_withdrawals: 6724.75,
                transactions: [
                  { date: "2025-01-03", description: "Direct Deposit - Payroll", amount: 5000.00, type: "credit" },
                  { date: "2025-01-05", description: "AWS Services", amount: -1250.00, type: "debit" },
                ],
              }, null, 2)}</pre>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Building, title: "500+ Banks Supported", desc: "Pre-trained on statements from major banks worldwide." },
              { icon: TrendingUp, title: "Transaction Categorization", desc: "Auto-categorize transactions by type, merchant, and category." },
              { icon: Shield, title: "Financial-Grade Security", desc: "Bank-level encryption and SOC 2 Type II compliance." },
            ].map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-xl p-6 text-center">
                <f.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Start Processing Bank Statements</h2>
            <Link to="/demo" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Try Free Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BankStatementsOcrApi;
