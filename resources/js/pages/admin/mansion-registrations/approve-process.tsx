import { CheckCircle, Loader2 } from 'lucide-react';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { MansionRegistration } from '@/types';
import { router, useForm } from '@inertiajs/react';
import { toast } from 'sonner';

const ApproveProcess = ({ mansionRegistration }: { mansionRegistration: MansionRegistration }) => {
    const { post, processing } = useForm({});
    const handleApprove = (e: Event) => {
        e.preventDefault();
        post(route('admin.mansion-registrations.approve', mansionRegistration.id), {
            onSuccess: () => {
                toast.success('Mansion registration approved successfully');
                router.reload();
            },
            onError: () => {
                toast.error('Mansion registration approval failed');
            },
        });
    };

    return (
        <DropdownMenuItem
            onSelect={(e) => handleApprove(e)}
            disabled={(!!mansionRegistration.tenant && mansionRegistration.status === 'approved') || mansionRegistration.status === 'rejected'}
        >
            {processing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CheckCircle className="mr-2 h-4 w-4" />}
            {processing ? 'Approving...' : 'Approve'}
        </DropdownMenuItem>
    );
};

export default ApproveProcess;
