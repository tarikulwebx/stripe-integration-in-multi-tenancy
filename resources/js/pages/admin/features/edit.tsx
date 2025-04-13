import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { Textarea } from '@/components/ui/textarea';
import DashboardLayout from '@/layouts/dashboard-layout';
import { Feature } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const plans: Option[] = [
    { value: '1', label: 'Free' },
    { value: '2', label: 'Pro' },
    { value: '3', label: 'Enterprise' },
];

const FeaturesEdit = ({ feature }: { feature: Feature }) => {
    const { data, setData, errors, post, processing } = useForm({
        name: feature.name,
        description: feature.description,
        lookup_key: feature.lookup_key,
        plans: feature.plans?.map((plan) => plan.id) || [],
        _method: 'PUT',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/admin/features/${feature.id}`);
        console.log(data);
    };

    const handlePlansChange = (selectedOptions: Option[]) => {
        setData(
            'plans',
            selectedOptions.map((option) => parseInt(option.value, 10)),
        );
    };

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
                        <form onSubmit={handleSubmit} className="grid max-w-2xl grid-cols-1 gap-4">
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
                            <div className="grid gap-2">
                                <Label>Plans</Label>
                                <MultipleSelector
                                    value={plans.filter((plan) => data.plans.includes(parseInt(plan.value, 10)))}
                                    onChange={handlePlansChange}
                                    defaultOptions={plans}
                                    placeholder="Select plans..."
                                />
                                <InputError message={errors.plans} />
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit" className="btn btn-primary" disabled={processing}>
                                    {processing ? 'Saving...' : 'Save Changes'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};
export default FeaturesEdit;
