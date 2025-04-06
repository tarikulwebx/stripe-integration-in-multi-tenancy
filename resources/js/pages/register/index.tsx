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
    email: string;
    position: string;
    mansion_name: string;
    location_prefecture: string;
    management_method: string;
    why_want_to_use_hss: string;
};

const MansionRegistration = ({ success }: { success: string }) => {
    const { data, setData, post, processing, errors } = useForm<Required<MansionForm>>({
        name: '',
        email: '',
        position: '',
        mansion_name: '',
        location_prefecture: '',
        management_method: '',
        why_want_to_use_hss: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('mansion-register.store'));
    };

    return (
        <AppLayout>
            <Head title="Mansion Registration" />
            <div className="py-10">
                <div className="mx-auto max-w-2xl">
                    <h1 className="mb-8 text-center text-3xl font-bold">Mansion Registration</h1>

                    {success && (
                        <div className="mb-4 rounded-md border border-green-500 p-4 text-green-500 dark:border-green-600 dark:text-green-600">
                            {success}
                        </div>
                    )}

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
                                    <Label htmlFor="email">Your Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <InputError message={errors.email} />
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
                                    <Label htmlFor="mansion_name">Name of the Mansion</Label>
                                    <Input
                                        id="mansion_name"
                                        type="text"
                                        value={data.mansion_name}
                                        onChange={(e) => setData('mansion_name', e.target.value)}
                                        placeholder="Enter mansion name"
                                        required
                                    />
                                    <InputError message={errors.mansion_name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="location_prefecture">Location Prefecture</Label>
                                    <Input
                                        id="location_prefecture"
                                        type="text"
                                        value={data.location_prefecture}
                                        onChange={(e) => setData('location_prefecture', e.target.value)}
                                        placeholder="Enter prefecture"
                                        required
                                    />
                                    <InputError message={errors.location_prefecture} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="management_method">Mansion Management Method</Label>
                                    <Select value={data.management_method} onValueChange={(value) => setData('management_method', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select management method" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="SelfManagement">Self Management</SelectItem>
                                            <SelectItem value="MKG">MKG</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.management_method} />
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold">Additional Information</h2>

                                <div className="grid gap-2">
                                    <Label htmlFor="why_want_to_use_hss">Why do you want to use HSS?</Label>
                                    <Textarea
                                        id="why_want_to_use_hss"
                                        value={data.why_want_to_use_hss}
                                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setData('why_want_to_use_hss', e.target.value)}
                                        placeholder="Please explain why you want to use HSS"
                                        required
                                        rows={4}
                                    />
                                    <InputError message={errors.why_want_to_use_hss} />
                                </div>
                            </div>

                            <Button type="submit" className="w-full cursor-pointer" disabled={processing || !!success}>
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
