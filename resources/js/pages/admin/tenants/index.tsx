import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DashboardLayout from '@/layouts/dashboard-layout';
import { BreadcrumbItem, Tenant } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { format } from 'date-fns';
import { EllipsisVertical, Eye, List, Pencil } from 'lucide-react';
import DeleteOption from './delete-option';
import PasswordToggler from './password-toggler';
const Tenants = ({ tenants }: { tenants: Tenant[] }) => {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Tenants',
            href: route('admin.tenants.index'),
        },
    ];
    return (
        <DashboardLayout breadcrumbs={breadcrumbs}>
            <Head title="Tenants" />
            <div className="p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Tenants</CardTitle>
                        <CardDescription>Here you can see all the tenants and manage them.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full grid-cols-1 overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>ID</TableHead>
                                        <TableHead>Mansion Name</TableHead>
                                        <TableHead>Plan</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Password (Temp)</TableHead>
                                        <TableHead>Created At</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {tenants.map((tenant) => (
                                        <TableRow key={tenant.id}>
                                            <TableCell>
                                                <Link href={route('app.home', { tenant: tenant.id })}>{tenant.id}</Link>
                                            </TableCell>
                                            <TableCell>
                                                <Link className="text-sm font-medium" href={route('app.home', { tenant: tenant.id })}>
                                                    {tenant.mansion_name}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant="outline"
                                                    className={`${tenant.current_plan.name === 'Free' ? 'bg-gray-500' : tenant.current_plan.name === 'Pro' ? 'bg-blue-500' : 'bg-red-500'}`}
                                                >
                                                    {tenant.current_plan.name}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{tenant.name}</TableCell>
                                            <TableCell>{tenant.email}</TableCell>
                                            <TableCell>
                                                <PasswordToggler password={tenant.password} />
                                            </TableCell>
                                            <TableCell>{format(tenant.created_at, 'yyyy-MM-dd HH:mm')}</TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                                            <EllipsisVertical className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent side="left" align="start">
                                                        <DropdownMenuItem asChild>
                                                            <Link href={route('admin.tenants.show', tenant.id)}>
                                                                <Eye className="mr-2 h-4 w-4" />
                                                                View
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Pencil className="mr-2 h-4 w-4" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DeleteOption tenantId={tenant.id} />
                                                        <DropdownMenuItem asChild>
                                                            <Link href={route('admin.tenants.features', tenant.id)}>
                                                                <List className="mr-2 h-4 w-4" />
                                                                Features
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};
export default Tenants;
