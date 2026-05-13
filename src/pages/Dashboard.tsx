import { useEffect, useState } from "react";
import { LogOut, Globe, Mail, Building2, User as UserIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

type Profile = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  company: string | null;
  country: string | null;
  email: string | null;
};

const COUNTRY_LABELS: Record<string, string> = {
  MX: "México",
  BR: "Brasil",
  US: "USA",
};

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        setProfile(data as Profile | null);
        setLoading(false);
      });
  }, [user]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Welcome back{profile?.first_name ? `, ${profile.first_name}` : ""} 👋
              </p>
            </div>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-full text-sm font-medium hover:border-primary/50 transition-colors"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-lg font-bold text-foreground mb-6">Account Details</h2>
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading profile...</p>
            ) : (
              <dl className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Email</dt>
                    <dd className="text-sm text-foreground mt-0.5">{user?.email}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <UserIcon className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Name</dt>
                    <dd className="text-sm text-foreground mt-0.5">
                      {profile?.first_name || profile?.last_name
                        ? `${profile?.first_name ?? ""} ${profile?.last_name ?? ""}`.trim()
                        : "—"}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Company</dt>
                    <dd className="text-sm text-foreground mt-0.5">{profile?.company || "—"}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Country</dt>
                    <dd className="text-sm text-foreground mt-0.5">
                      {profile?.country ? COUNTRY_LABELS[profile.country] ?? profile.country : "—"}
                    </dd>
                  </div>
                </div>
              </dl>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
