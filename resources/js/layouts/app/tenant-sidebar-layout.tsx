import { TenantContent } from '@/components/tenant-content';
import { TenantShell } from '@/components/tenant-shell';
import { TenantSidebar } from '@/components/tenant-sidebar';
import { TenantSidebarHeader } from '@/components/tenant-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function TenantSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <TenantShell variant="sidebar">
            <TenantSidebar />
            <TenantContent variant="sidebar">
                <TenantSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </TenantContent>
        </TenantShell>
    );
}
