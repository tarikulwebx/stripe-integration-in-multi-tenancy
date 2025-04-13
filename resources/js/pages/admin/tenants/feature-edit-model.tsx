import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { Feature, Tenant } from '@/types';
import { useForm } from '@inertiajs/react';
import { Pencil } from 'lucide-react';

const FeatureEditModal = ({ tenant, all_features, direct_features }: { tenant: Tenant; all_features: Feature[]; direct_features: Feature[] }) => {
    const { data, setData, errors, post, processing } = useForm({
        features: direct_features.map((feature) => feature.id) || [],
        _method: 'PUT',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/admin/tenants/${tenant.id}/features`);
    };

    const handleFeaturesChange = (selectedOptions: Option[]) => {
        setData(
            'features',
            selectedOptions.map((option) => parseInt(option.value, 10)),
        );
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-[600px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Edit Features</DialogTitle>
                        <DialogDescription>Make changes to your features here. Click save when you're done.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <MultipleSelector
                            value={all_features
                                .filter((feature) => data.features.includes(feature.id))
                                .map((feature) => ({ value: feature.id.toString(), label: feature.name }))}
                            onChange={handleFeaturesChange}
                            defaultOptions={all_features.map((feature) => ({ value: feature.id.toString(), label: feature.name }))}
                            placeholder="Select features..."
                        />
                        <InputError message={errors.features} />
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Save changes'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default FeatureEditModal;
