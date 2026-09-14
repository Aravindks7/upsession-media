"use client";

import { useSecretCode } from "@/hooks/use-secret-code";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Lock } from "lucide-react";

export function InvisibleLogin() {
  // Secret code is "admin"
  const { isTriggered, setIsTriggered } = useSecretCode("admin");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending magic link
    setTimeout(() => {
      setIsSubmitting(false);
      setIsTriggered(false);
      setEmail("");
      alert("If this email is whitelisted, a magic link has been sent.");
    }, 1500);
  };

  return (
    <Dialog open={isTriggered} onOpenChange={setIsTriggered}>
      <DialogContent className="sm:max-w-106.25 bg-background/80 backdrop-blur-xl border-white/10 text-white shadow-2xl">
        <DialogHeader className="flex flex-col items-center justify-center pt-6 pb-2">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Lock className="w-5 h-5 text-neon-cyan" />
          </div>
          <DialogTitle className="text-2xl font-heading tracking-tight">Studio Access</DialogTitle>
          <DialogDescription className="text-muted-foreground text-center pt-2">
            Enter your authorized email to receive a secure login link.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 h-12 focus-visible:ring-neon-cyan focus-visible:border-neon-cyan"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full h-12 bg-neon-purple hover:bg-neon-purple/90 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Magic Link"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
