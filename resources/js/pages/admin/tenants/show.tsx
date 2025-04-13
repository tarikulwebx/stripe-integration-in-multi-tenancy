import DashboardLayout from '@/layouts/dashboard-layout';
import { Tenant } from '@/types';
import { Head } from '@inertiajs/react';
const TenantShow = ({ tenant }: { tenant: Tenant }) => {
    return (
        <DashboardLayout breadcrumbs={[{ title: 'Tenants', href: route('admin.tenants.index') }]}>
            <Head title={`${tenant.name} | Tenant`} />
            <div className="p-4">
                <pre>{JSON.stringify(tenant, null, 2)}</pre>
            </div>
        </DashboardLayout>
    );
};

export default TenantShow;
