import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
    adminOnly?: boolean;
    auth?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    app: Tenant;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface MansionRegistration {
    id: number;
    name: string;
    email: string;
    position: string;
    mansion_name: string;
    location_prefecture: string;
    management_method: string;
    why_want_to_use_hss: string;
    status: string;
    rejected_reason: string;
    approved_at: string;
    rejected_at: string;
    created_at: string;
    updated_at: string;
    tenant?: Tenant | null;
}

export interface Tenant {
    id: string;
    name: string;
    email: string;
    password: string;
    mansion_name: string;
    mansion_registration_id: number;
    created_at: string;
    updated_at: string;
}

export interface Feature {
    id: number;
    name: string;
    lookup_key: string;
    description: string;
    created_at: string;
    updated_at: string;
}
