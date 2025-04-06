import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { ChangeEvent, FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

type MansionForm = {
    name: string;
    position: string;
    mansionName: string;
    locationPrefecture: string;
    managementMethod: string;
    whyWantToUseHSS: string;
};

const MansionRegistration = () => {
    const { data, setData, post, processing, errors } = useForm<Required<MansionForm>>({
        name: '',
        position: '',
        mansionName: '',
        locationPrefecture: '',
        managementMethod: '',
        whyWantToUseHSS: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('mansion.register'));
    };

    return (
        <AppLayout>
            <Head title="Mansion Registration" />
            <div className="py-10">
                <div className="mx-auto max-w-2xl">
                    <h1 className="mb-8 text-center text-3xl font-bold">Mansion Registration</h1>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-6">
                            {/* Personal Information */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold">Personal Information</h2>

                                <div className="grid gap-2">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                    <InputError message={errors.name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="position">Your Position</Label>
                                    <Select value={data.position} onValueChange={(value) => setData('position', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your position" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="HOAP">HOAP</SelectItem>
                                            <SelectItem value="HOAE">HOAE</SelectItem>
                                            <SelectItem value="IHO">IHO</SelectItem>
                                            <SelectItem value="OC">OC</SelectItem>
                                            <SelectItem value="Others">Others</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.position} />
                                </div>
                            </div>

                            {/* Mansion Information */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold">Mansion Information</h2>

                                <div className="grid gap-2">
                                    <Label htmlFor="mansionName">Name of the Mansion</Label>
                                    <Input
                                        id="mansionName"
                                        type="text"
                                        value={data.mansionName}
                                        onChange={(e) => setData('mansionName', e.target.value)}
                                        placeholder="Enter mansion name"
                                        required
                                    />
                                    <InputError message={errors.mansionName} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="locationPrefecture">Location Prefecture</Label>
                                    <Input
                                        id="locationPrefecture"
                                        type="text"
                                        value={data.locationPrefecture}
                                        onChange={(e) => setData('locationPrefecture', e.target.value)}
                                        placeholder="Enter prefecture"
                                        required
                                    />
                                    <InputError message={errors.locationPrefecture} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="managementMethod">Mansion Management Method</Label>
                                    <Select value={data.managementMethod} onValueChange={(value) => setData('managementMethod', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select management method" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="SelfManagement">Self Management</SelectItem>
                                            <SelectItem value="MKG">MKG</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.managementMethod} />
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold">Additional Information</h2>

                                <div className="grid gap-2">
                                    <Label htmlFor="whyWantToUseHSS">Why do you want to use HSS?</Label>
                                    <Textarea
                                        id="whyWantToUseHSS"
                                        value={data.whyWantToUseHSS}
                                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setData('whyWantToUseHSS', e.target.value)}
                                        placeholder="Please explain why you want to use HSS"
                                        required
                                        rows={4}
                                    />
                                    <InputError message={errors.whyWantToUseHSS} />
                                </div>
                            </div>

                            <Button type="submit" className="w-full" disabled={processing}>
                                {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                Submit Registration
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
};

export default MansionRegistration;
