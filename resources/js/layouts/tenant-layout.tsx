import { Toaster } from '@/components/ui/sonner';
import TenantSidebarLayout from '@/layouts/app/tenant-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <TenantSidebarLayout breadcrumbs={breadcrumbs} {...props}>
        {children}
        <Toaster position="top-right" richColors />
    </TenantSidebarLayout>
);
