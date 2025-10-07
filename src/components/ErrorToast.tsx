import { Snackbar, Alert } from '@mui/material';

interface ErrorToastProps {
  error: string | null;
  onClose: () => void;
}

export const ErrorToast = ({ error, onClose }: ErrorToastProps) => (
  <Snackbar 
    open={!!error} 
    autoHideDuration={6000} 
    onClose={onClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  >
    <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
      {error}
    </Alert>
  </Snackbar>
);
