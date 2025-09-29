import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { SERVICES } from "@/lib/constants";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Bericht verzonden!",
        description: "Wij nemen binnen 24 uur contact met u op.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Fout bij verzenden",
        description: error.message || "Er is een fout opgetreden. Probeer het later opnieuw.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Bedankt voor uw bericht!</h3>
            <p className="text-muted-foreground mb-6">
              Wij hebben uw aanvraag ontvangen en nemen binnen 24 uur contact met u op om een afspraak in te plannen.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              data-testid="contact-form-reset"
            >
              Nieuw bericht versturen
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary text-center">
          Gratis Dakinspectie Aanvragen
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Naam *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Uw volledige naam" 
                      {...field} 
                      data-testid="contact-form-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="uw@email.nl" 
                        {...field} 
                        data-testid="contact-form-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefoon</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel" 
                        placeholder="06 12345678" 
                        {...field} 
                        data-testid="contact-form-phone"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Welke dienst heeft u nodig? *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="contact-form-service">
                        <SelectValue placeholder="Selecteer een dienst" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {SERVICES.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Anders</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bericht (optioneel)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Vertel ons meer over uw project..."
                      className="min-h-[120px]"
                      {...field} 
                      data-testid="contact-form-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <span className="text-copper text-lg">ℹ️</span>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold mb-2">Wat kunt u verwachten:</p>
                  <ul className="space-y-1">
                    <li>• Reactie binnen 24 uur</li>
                    <li>• Gratis inspectie op locatie</li>
                    <li>• Transparante offerte zonder verrassingen</li>
                    <li>• 15 jaar garantie op ons vakmanschap</li>
                  </ul>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full orange-gradient text-white py-6 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
              disabled={contactMutation.isPending}
              data-testid="contact-form-submit"
            >
              {contactMutation.isPending ? "Bezig met verzenden..." : "Gratis Inspectie Aanvragen"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Door dit formulier in te vullen gaat u akkoord met ons{" "}
              <a href="#" className="text-copper hover:underline">
                privacybeleid
              </a>
              .
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
