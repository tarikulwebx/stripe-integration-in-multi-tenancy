import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { Check } from 'lucide-react';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';

const Pricing = () => {
    const tiers = [
        {
            name: 'Free',
            price: '$0',
            description: 'Perfect for getting started',
            features: ['Up to 5 projects', 'Basic analytics', 'Community support', '1GB storage'],
            buttonText: 'Register Now',
            buttonHref: route('mansion-register'),
            buttonVariant: 'outline' as ButtonVariant,
        },
        {
            name: 'Pro',
            price: '$29',
            description: 'For growing businesses',
            features: ['Unlimited projects', 'Advanced analytics', 'Priority support', '10GB storage', 'Custom domains', 'API access'],
            buttonText: 'Register Now',
            buttonHref: route('mansion-register'),
            buttonVariant: 'default' as ButtonVariant,
            popular: true,
        },
        {
            name: 'Enterprise',
            price: '$99',
            description: 'For large organizations',
            features: ['Everything in Pro', 'Custom integrations', 'Dedicated support', 'Unlimited storage', 'SLA guarantee', 'Custom branding'],
            buttonText: 'Register Now',
            buttonHref: route('mansion-register'),
            buttonVariant: 'outline' as ButtonVariant,
        },
    ];

    return (
        <AppLayout>
            <Head title="Pricing" />
            <div className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight">Simple, transparent pricing</h1>
                    <p className="text-muted-foreground text-lg">Choose the plan that's right for you. All plans include a 14-day free trial.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {tiers.map((tier) => (
                        <Card key={tier.name} className={tier.popular ? 'border-primary shadow-lg' : ''}>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                                <div className="mt-2 flex items-baseline">
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                    {tier.price !== 'Custom' && <span className="text-muted-foreground ml-2">/year</span>}
                                </div>
                                <CardDescription>{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <Check className="text-primary mr-2 h-4 w-4" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant={tier.buttonVariant} className="w-full cursor-pointer" size="lg" asChild>
                                    <Link href={tier.buttonHref}>{tier.buttonText}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Pricing;
