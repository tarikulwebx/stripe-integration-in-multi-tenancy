import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const PasswordToggler = ({ password }: { password: string }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Button variant="ghost" size="sm" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            {showPassword ? password : '••••••••'}
        </Button>
    );
};

export default PasswordToggler;
