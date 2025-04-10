import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DashboardLayout from '@/layouts/dashboard-layout';
import { Feature } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Pencil, Plus, Trash } from 'lucide-react';

const FeaturesIndex = ({ features }: { features: Feature[] }) => {
    return (
        <DashboardLayout breadcrumbs={[{ title: 'Features', href: '/admin/features' }]}>
            <Head title="Features" />
            <div className="grid grid-cols-1 gap-8 p-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <CardTitle>Features</CardTitle>
                            <CardDescription>Manage the features that are available to the tenants.</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4" />
                            Add Feature
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Lookup Key</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Plans</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {features.map((feature) => (
                                    <TableRow key={feature.id}>
                                        <TableCell>{feature.id}</TableCell>
                                        <TableCell>{feature.name}</TableCell>
                                        <TableCell>{feature.lookup_key}</TableCell>
                                        <TableCell>{feature.description}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap gap-2">
                                                {feature.plans?.map((plan) => (
                                                    <Badge
                                                        key={plan.id}
                                                        variant="outline"
                                                        className={`${plan.name === 'Free' ? 'bg-gray-500' : plan.name === 'Pro' ? 'bg-blue-500' : 'bg-red-500'}`}
                                                    >
                                                        {plan.name}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                                asChild
                                            >
                                                <Link href={route('admin.features.edit', feature.id)}>
                                                    <Pencil className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                                            >
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default FeaturesIndex;
