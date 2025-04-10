import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { SharedData, type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BadgeInfo, BookOpen, Folder, LayoutGrid, List, Users } from 'lucide-react';
import TenantLogo from './tenant-logo';

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];

export function TenantSidebar() {
    const page = usePage<SharedData>();
    const { app } = page.props;

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: route('app.home', app.id),
            icon: LayoutGrid,
            isActive: route().current('app.home', app.id),
        },
        {
            title: 'Users',
            href: route('app.users.index', app.id),
            icon: Users,
            isActive: route().current('app.users.index', app.id),
        },
        {
            title: 'Account',
            href: route('app.account', app.id),
            icon: BadgeInfo,
            isActive: route().current('app.account', app.id),
        },
        {
            title: 'Features',
            href: route('app.features.index', app.id),
            icon: List,
            isActive: route().current('app.features.index', app.id),
        },
    ];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={route('app.home', app.id)} prefetch>
                                <TenantLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                {/* <NavUser /> */}
            </SidebarFooter>
        </Sidebar>
    );
}
