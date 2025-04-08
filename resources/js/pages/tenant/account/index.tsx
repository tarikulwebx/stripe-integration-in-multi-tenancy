import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TenantLayout from '@/layouts/tenant-layout';
import { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { CreditCard } from 'lucide-react';

const AccountIndex = () => {
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
                            <CardTitle>Current Plan</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center space-x-4">
                            <div className="bg-primary/10 rounded-full p-2">
                                <CreditCard className="text-primary h-5 w-5" />
                            </div>
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h3 className="font-semibold">Free Plan</h3>
                                    <Badge variant="secondary">Current</Badge>
                                </div>
                                <p className="text-muted-foreground text-sm">Basic features included</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Available Plans Section */}
                    <div>
                        <h3 className="mb-4 text-lg font-medium">Available Plans</h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Pro Plan */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Pro</CardTitle>
                                    <CardDescription>Advanced features for growing businesses</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <span className="text-3xl font-bold">$29</span>
                                        <span className="text-muted-foreground">/month</span>
                                    </div>
                                    <Button className="w-full" variant="default">
                                        Upgrade to Pro
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
                                        <span className="text-muted-foreground">/month</span>
                                    </div>
                                    <Button className="w-full" variant="default">
                                        Upgrade to Enterprise
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
