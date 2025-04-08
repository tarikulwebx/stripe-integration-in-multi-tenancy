import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TenantLayout from '@/layouts/tenant-layout';
import { SharedData, User } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { format } from 'date-fns';
const UsersIndex = ({ users }: { users: User[] }) => {
    const { app } = usePage<SharedData>().props;
    return (
        <TenantLayout breadcrumbs={[{ title: 'Users', href: route('app.users.index', app.id) }]}>
            <Head title="Users" />
            <div className="p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Users</CardTitle>
                        <CardDescription>Manage your users</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Joined at</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{format(user.created_at, 'MMM d, yyyy HH:mm')}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </TenantLayout>
    );
};

export default UsersIndex;
