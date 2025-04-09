import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TenantLayout from '@/layouts/tenant-layout';
import { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { CreditCard } from 'lucide-react';

const AccountIndex = ({ planName }: { planName: string }) => {
    const page = usePage<SharedData>();
    const { app } = page.props;

    return (
        <TenantLayout breadcrumbs={[{ title: 'Account', href: route('app.account', app.id) }]}>
            <Head title="Account" />
            <div className="p-4">
                <div className="space-y-8">
                    {/* Current Plan Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Information</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center space-x-4">
                            <div className="bg-primary/10 rounded-full p-2">
                                <CreditCard className="text-primary h-5 w-5" />
                            </div>
                            <div>
                                <div className="mb-2.5 flex items-center space-x-2">
                                    <h3 className="font-semibold">Current Subscription</h3>
                                </div>
                                {/* <p className="text-muted-foreground text-sm">Basic features included</p> */}
                                <div className="flex items-center space-x-2">
                                    <Badge variant="secondary" className="text-sm">
                                        {planName}
                                    </Badge>
                                    <Button variant="outline" size="sm" asChild>
                                        <a href={route('app.billing-portal', app.id)}>Manage Subscription</a>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Available Plans Section */}
                    <div>
                        <h3 className="mb-4 text-lg font-medium">Available Plans</h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Free Plan */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Free</CardTitle>
                                    <CardDescription>Basic features included</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <span className="text-3xl font-bold">$0</span>
                                        <span className="text-muted-foreground">/year</span>
                                    </div>
                                    <Button
                                        className={`w-full ${planName === 'Free' ? 'border-green-500 bg-green-500/10 text-green-500 dark:border-green-500 dark:bg-green-500/10 dark:text-green-500' : ''}`}
                                        variant={planName === 'Free' ? 'outline' : 'default'}
                                        asChild
                                    >
                                        <a href={route('app.billing-portal', app.id)}>{planName === 'Free' ? 'Current Plan' : 'Upgrade to Free'}</a>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Pro Plan */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Pro</CardTitle>
                                    <CardDescription>Advanced features for growing businesses</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <span className="text-3xl font-bold">$29</span>
                                        <span className="text-muted-foreground">/year</span>
                                    </div>
                                    <Button
                                        className={`w-full ${planName === 'Pro' ? 'border-green-500 bg-green-500/10 text-green-500 dark:border-green-500 dark:bg-green-500/10 dark:text-green-500' : ''}`}
                                        variant={planName === 'Pro' ? 'outline' : 'default'}
                                        asChild
                                    >
                                        <a href={route('app.billing-portal', app.id)}>{planName === 'Pro' ? 'Current Plan' : 'Upgrade to Pro'}</a>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Enterprise Plan */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Enterprise</CardTitle>
                                    <CardDescription>Advanced features and dedicated support</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <span className="text-3xl font-bold">$99</span>
                                        <span className="text-muted-foreground">/year</span>
                                    </div>
                                    <Button
                                        className={`w-full ${planName === 'Enterprise' ? 'border-green-500 bg-green-500/10 text-green-500 dark:border-green-500 dark:bg-green-500/10 dark:text-green-500' : ''}`}
                                        variant={planName === 'Enterprise' ? 'outline' : 'default'}
                                        asChild
                                    >
                                        <a href={route('app.billing-portal', app.id)}>
                                            {planName === 'Enterprise' ? 'Current Plan' : 'Upgrade to Enterprise'}
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </TenantLayout>
    );
};

export default AccountIndex;
