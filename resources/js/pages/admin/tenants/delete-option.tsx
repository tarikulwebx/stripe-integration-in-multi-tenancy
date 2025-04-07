import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useForm } from '@inertiajs/react';
import { Loader2, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const DeleteOption = ({ tenantId }: { tenantId: string }) => {
    const { delete: destroy, processing } = useForm({});

    const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        destroy(route('admin.tenants.destroy', tenantId), {
            onSuccess: () => {
                toast.success('Tenant deleted successfully');
            },
            onError: () => {
                toast.error('Failed to delete tenant');
            },
        });
    };
    return (
        <DropdownMenuItem onClick={(e) => handleDelete(e)} disabled={processing}>
            {processing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />}
            {processing ? 'Deleting...' : 'Delete'}
        </DropdownMenuItem>
    );
};

export default DeleteOption;
