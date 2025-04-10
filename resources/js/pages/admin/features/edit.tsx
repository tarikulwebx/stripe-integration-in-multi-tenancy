import InputError from '@/components/input-error';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import DashboardLayout from '@/layouts/dashboard-layout';
import { Feature } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const FeaturesEdit = ({ feature }: { feature: Feature }) => {
    const { data, setData, errors, post } = useForm({
        name: feature.name,
        description: feature.description,
        lookup_key: feature.lookup_key,
        plans: feature.plans?.map((plan) => plan.id) || [],
    });

    return (
        <DashboardLayout
            breadcrumbs={[
                { title: 'Features', href: '/admin/features' },
                { title: 'Edit', href: '/admin/features/edit' },
            ]}
        >
            <Head title={`Edit ${feature.name}`} />
            <div className="grid grid-cols-1 gap-8 p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Feature</CardTitle>
                        <CardDescription>Edit the feature details.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="grid max-w-2xl grid-cols-1 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                <InputError message={errors.name} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="lookup_key">Lookup Key</Label>
                                <Input
                                    id="lookup_key"
                                    name="lookup_key"
                                    value={data.lookup_key}
                                    onChange={(e) => setData('lookup_key', e.target.value)}
                                />
                                <InputError message={errors.lookup_key} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />
                                <InputError message={errors.description} />
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};
export default FeaturesEdit;
