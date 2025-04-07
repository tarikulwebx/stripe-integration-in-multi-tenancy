import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DashboardLayout from '@/layouts/dashboard-layout';
import { BreadcrumbItem, MansionRegistration } from '@/types';
import { Head } from '@inertiajs/react';
import { CheckCircle, EllipsisVertical, Eye, Pencil, Trash2, XCircle } from 'lucide-react';

const MansionRegistrations = ({ mansionRegistrations }: { mansionRegistrations: MansionRegistration[] }) => {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Mansion Registrations',
            href: route('admin.mansion-registrations.index'),
        },
    ];

    return (
        <DashboardLayout breadcrumbs={breadcrumbs}>
            <Head title="Mansion Registrations" />
            <div className="p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Mansion Registrations</CardTitle>
                        <CardDescription>Here you can see all the mansion registrations and manage them.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full grid-cols-1 overflow-auto">
                            <Table className="w-full min-w-full rounded-md border">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Position</TableHead>
                                        <TableHead>Mansion Name</TableHead>
                                        <TableHead>Location Prefecture</TableHead>
                                        <TableHead>Management Method</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Rejected Reason</TableHead>
                                        <TableHead>Approved At</TableHead>
                                        <TableHead>Rejected At</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mansionRegistrations.map((mansionRegistration) => (
                                        <TableRow key={mansionRegistration.id}>
                                            <TableCell>{mansionRegistration.name}</TableCell>
                                            <TableCell>{mansionRegistration.email}</TableCell>
                                            <TableCell>{mansionRegistration.position}</TableCell>
                                            <TableCell>{mansionRegistration.mansion_name}</TableCell>
                                            <TableCell>{mansionRegistration.location_prefecture}</TableCell>
                                            <TableCell>{mansionRegistration.management_method}</TableCell>
                                            <TableCell>{mansionRegistration.status}</TableCell>
                                            <TableCell>{mansionRegistration.rejected_reason}</TableCell>
                                            <TableCell>{mansionRegistration.approved_at}</TableCell>
                                            <TableCell>{mansionRegistration.rejected_at}</TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                                            <EllipsisVertical className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent side="left" align="start">
                                                        <DropdownMenuItem>
                                                            <CheckCircle className="mr-2 h-4 w-4" />
                                                            Accept
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <XCircle className="mr-2 h-4 w-4" />
                                                            Reject
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Eye className="mr-2 h-4 w-4" />
                                                            View
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Pencil className="mr-2 h-4 w-4" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Trash2 className="mr-2 h-4 w-4" />
                                                            Delete
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
export default MansionRegistrations;
