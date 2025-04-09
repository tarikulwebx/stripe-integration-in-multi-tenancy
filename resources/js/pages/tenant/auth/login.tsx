import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TenantLayout from '@/layouts/tenant-layout';
import { SharedData } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';

const Login = () => {
    const { app } = usePage<SharedData>().props;

    const { data, setData, post, errors, processing } = useForm({
        email: '',
        password: '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('app.login.form', app.id));
    };

    return (
        <TenantLayout breadcrumbs={[{ title: 'Login', href: route('app.login.form', app.id) }]}>
            <Head title="Login" />
            <div className="p-4">
                <Card className="mx-auto mt-10 w-full max-w-md">
                    <CardHeader className="text-center">
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Login to your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-1 gap-y-5">
                                <div className="grid grid-cols-1 gap-y-2">
                                    <Label>Email</Label>
                                    <Input type="email" placeholder="Email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                    <InputError message={errors.email} />
                                </div>
                                <div className="grid grid-cols-1 gap-y-2">
                                    <Label>Password</Label>
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    <InputError message={errors.password} />
                                </div>
                                <div>
                                    <Button type="submit" className="w-full" disabled={processing}>
                                        {processing ? 'Logging in...' : 'Login'}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </TenantLayout>
    );
};

export default Login;
