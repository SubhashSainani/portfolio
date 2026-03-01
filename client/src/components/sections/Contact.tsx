import { FadeIn } from "@/components/ui/fade-in";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { api } from "@shared/routes";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Mail, MapPin } from "lucide-react";
import type { Profile } from "@shared/schema";

export function Contact({ profile }: { profile: Profile }) {
  const { toast } = useToast();
  const contactMutation = useSubmitContact();
  
  const form = useForm<z.infer<typeof api.contact.create.input>>({
    resolver: zodResolver(api.contact.create.input),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: z.infer<typeof api.contact.create.input>) => {
    contactMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a question or want to work together? Leave a message and I'll get back to you as soon as possible.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 bg-card rounded-3xl shadow-xl shadow-black/5 overflow-hidden border border-border/50">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-gradient-to-br from-primary to-blue-600 p-10 text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              <p className="text-primary-foreground/80 mb-10 leading-relaxed">
                Fill up the form and I will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/10 rounded-full mr-4 backdrop-blur-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-primary-foreground/70 mb-1">Email</span>
                    <a href={`mailto:${profile.email}`} className="font-medium hover:underline">
                      {profile.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-white/10 rounded-full mr-4 backdrop-blur-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-primary-foreground/70 mb-1">Location</span>
                    <span className="font-medium">Remote / Global</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-10 lg:p-12">
            <FadeIn delay={0.3}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="min-h-[150px] resize-y bg-background" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto h-12 px-8 rounded-full shadow-lg shadow-primary/25 group"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Form>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}
