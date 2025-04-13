import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DashboardLayout from '@/layouts/dashboard-layout';
import { BreadcrumbItem, Feature, Tenant } from '@/types';
import { Head } from '@inertiajs/react';
import FeatureEditModal from './feature-edit-model';

const TenantFeatures = ({
    tenant,
    all_features,
    features,
    direct_features,
}: {
    tenant: Tenant;
    all_features: Feature[];
    features: Feature[];
    direct_features: Feature[];
}) => {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Tenants',
            href: route('admin.tenants.index'),
        },
        {
            title: tenant.mansion_name + ' Features',
            href: route('admin.tenants.features', tenant.id),
        },
    ];

    return (
        <DashboardLayout breadcrumbs={breadcrumbs}>
            <Head title={`${tenant.mansion_name} Features`} />
            <div className="p-4">
                <div className="grid grid-cols-1 gap-8 p-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Plan Features</CardTitle>
                            <CardDescription>These are the features that are available to this tenant from their plan.</CardDescription>
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
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div className="flex flex-col gap-2">
                                <CardTitle>Direct Features</CardTitle>
                                <CardDescription>These are the features that are directly assigned to this tenant.</CardDescription>
                            </div>
                            <div>
                                <FeatureEditModal tenant={tenant} all_features={all_features} direct_features={direct_features} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border">
                                {direct_features.length === 0 ? (
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
                                            {direct_features.map((feature) => (
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
            </div>
        </DashboardLayout>
    );
};

export default TenantFeatures;
