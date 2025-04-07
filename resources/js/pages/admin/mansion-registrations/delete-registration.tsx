import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { MansionRegistration } from '@/types';
import { useForm } from '@inertiajs/react';
import { Loader2, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
const DeleteRegistration = ({ mansionRegistration }: { mansionRegistration: MansionRegistration }) => {
    const { delete: destroy, processing } = useForm({});
    const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        destroy(route('admin.mansion-registrations.destroy', mansionRegistration.id), {
            onSuccess: () => {
                toast.success('Mansion registration deleted successfully');
            },
            onError: () => {
                toast.error('Failed to delete mansion registration');
            },
        });
    };
    return (
        <DropdownMenuItem disabled={mansionRegistration.status === 'approved' && !!mansionRegistration.tenant} onClick={(e) => handleDelete(e)}>
            {processing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />}
            {processing ? 'Deleting...' : 'Delete'}
        </DropdownMenuItem>
    );
};

export default DeleteRegistration;
