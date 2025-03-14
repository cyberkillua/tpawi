"use client";

import { DialogFooter } from "@/components/ui/dialog";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Copy, Check, Heart, Landmark, DollarSign } from "lucide-react";

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DonationModal({ open, onOpenChange }: DonationModalProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const [donationAmount, setDonationAmount] = useState<string>("50");

  const copyToClipboard = (text: string, field: string) => {
    void navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Heart className="h-6 w-6 text-pink-500" />
            Support Our Mission
          </DialogTitle>
          <DialogDescription>
            Your donation helps us provide health education and resources to
            underserved communities.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="bank" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bank" className="flex items-center gap-1">
              <Landmark className="h-4 w-4" />
              <span className="hidden sm:inline">Bank Transfer</span>
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Mobile Money</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bank" className="mt-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Bank Account Details</h3>
              <div className="space-y-3 rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-xs text-gray-500">Bank Name</Label>
                    <p className="font-medium">GTB</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("GTB", "bank")}
                    className="h-8 px-2"
                  >
                    {copied === "bank" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-xs text-gray-500">
                      Account Name
                    </Label>
                    <p className="font-medium">Surajah Surajudeen-Bakinde</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyToClipboard("Surajah Surajudeen-Bakinde", "name")
                    }
                    className="h-8 px-2"
                  >
                    {copied === "name" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-xs text-gray-500">
                      Account Number
                    </Label>
                    <p className="font-medium">0478881414</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("0478881414", "account")}
                    className="h-8 px-2"
                  >
                    {copied === "account" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-xs text-gray-500">Reference</Label>
                    <p className="font-medium">
                      DONATION-{Math.floor(Math.random() * 10000)}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(
                        `DONATION-${Math.floor(Math.random() * 10000)}`,
                        "reference",
                      )
                    }
                    className="h-8 px-2"
                  >
                    {copied === "reference" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-md bg-pink-50 p-4 text-sm">
              <p>
                Please use your name as reference if not specified above. After
                making your donation, email us at{" "}
                <span className="font-medium">pinkwhiteinitiative@gmail.com</span> for a
                receipt.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Mobile Money Details</h3>
              <div className="space-y-3 rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-xs text-gray-500">Provider</Label>
                    <p className="font-medium">Opay</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("Opay", "provider")}
                    className="h-8 px-2"
                  >
                    {copied === "provider" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-xs text-gray-500">
                      Phone Number
                    </Label>
                    <p className="font-medium">+254 712 345 678</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("+254 712 345 678", "phone")}
                    className="h-8 px-2"
                  >
                    {copied === "phone" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-xs text-gray-500">
                      Account Name
                    </Label>
                    <p className="font-medium">Pink & White Initiative</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyToClipboard("Pink & White Initiative", "mobile-name")
                    }
                    className="h-8 px-2"
                  >
                    {copied === "mobile-name" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-md bg-pink-50 p-4 text-sm">
              <p>
                After making your donation, please send a confirmation
                screenshot to{" "}
                <span className="font-medium">pinkwhiteinitiative@gmail.com</span> with
                your name and contact information.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
