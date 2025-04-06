import DashboardLayout from '@/layouts/dashboard-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const MansionRegistrations = () => {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Mansion Registrations',
            href: route('admin.mansion-registrations.index'),
        },
    ];

    return (
        <DashboardLayout breadcrumbs={breadcrumbs}>
            <Head title="Mansion Registrations" />
            <div className="p-4">Mansion Registration</div>
        </DashboardLayout>
    );
};
export default MansionRegistrations;
