import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TenantLayout from '@/layouts/tenant-layout';
import { Feature } from '@/types';
import { Head } from '@inertiajs/react';

const Features = ({ features, planFeatures, directFeatures }: { features: Feature[]; planFeatures: Feature[]; directFeatures: Feature[] }) => {
    return (
        <TenantLayout breadcrumbs={[{ title: 'Features', href: '/features' }]}>
            <Head title="Features" />
            <div className="grid grid-cols-1 gap-8 p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>All Features</CardTitle>
                        <CardDescription>These are all the features that are available to this tenant.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-md border">
                            {features.length === 0 ? (
                                <div className="text-muted-foreground p-4 text-center">No features available</div>
                            ) : (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>ID</TableHead>
                                            <TableHead>Feature Name</TableHead>
                                            <TableHead>Lookup Key</TableHead>
                                            <TableHead>Description</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {features.map((feature) => (
                                            <TableRow key={feature.id}>
                                                <TableCell className="font-medium">{feature.id}</TableCell>
                                                <TableCell>{feature.name}</TableCell>
                                                <TableCell>{feature.lookup_key}</TableCell>
                                                <TableCell>{feature.description}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Plan Features</CardTitle>
                        <CardDescription>These are the features that are included in this tenant's plan.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-md border">
                            {planFeatures.length === 0 ? (
                                <div className="text-muted-foreground p-4 text-center">No plan features available</div>
                            ) : (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>ID</TableHead>
                                            <TableHead>Feature Name</TableHead>
                                            <TableHead>Lookup Key</TableHead>
                                            <TableHead>Description</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {planFeatures.map((feature) => (
                                            <TableRow key={feature.id}>
                                                <TableCell>{feature.id}</TableCell>
                                                <TableCell>{feature.name}</TableCell>
                                                <TableCell>{feature.lookup_key}</TableCell>
                                                <TableCell>{feature.description}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Direct Features</CardTitle>
                        <CardDescription>These are the features that are directly assigned to this tenant.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-md border">
                            {directFeatures.length === 0 ? (
                                <div className="text-muted-foreground p-4 text-center">No direct features available</div>
                            ) : (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>ID</TableHead>
                                            <TableHead>Feature Name</TableHead>
                                            <TableHead>Lookup Key</TableHead>
                                            <TableHead>Description</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {directFeatures.map((feature) => (
                                            <TableRow key={feature.id}>
                                                <TableCell>{feature.id}</TableCell>
                                                <TableCell>{feature.name}</TableCell>
                                                <TableCell>{feature.lookup_key}</TableCell>
                                                <TableCell>{feature.description}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </TenantLayout>
    );
};

export default Features;
