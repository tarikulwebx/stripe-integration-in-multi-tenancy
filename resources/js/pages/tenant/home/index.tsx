import TenantLayout from '@/layouts/tenant-layout';
import { BreadcrumbItem, SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const Home = () => {
    const page = usePage<SharedData>();
    const { app } = page.props;

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Home',
            href: '/',
        },
    ];
    return (
        <TenantLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />
            <div className="p-4">
                <pre>{JSON.stringify(app, null, 2)}</pre>
            </div>
        </TenantLayout>
    );
};

export default Home;
