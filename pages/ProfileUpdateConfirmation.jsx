import React from 'react';
import { useRouter } from 'next/router';

const ProfileUpdateConfirmation = ({ isVisible, onClose }) => {
  const router = useRouter();

  const handleUpdate = () => {
    router.push('/payment-methods');
  };

  const handleNo = () => {
    if (onClose) onClose();
    router.back();
  };

  const styles = {
    dialogOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dialogContent: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '0.5rem',
      maxWidth: '28rem',
      width: '90%',
    },
    dialogHeader: {
      marginBottom: '1rem',
    },
    dialogTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    dialogDescription: {
      color: '#666',
    },
    dialogFooter: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '0.5rem',
      marginTop: '1.5rem',
    },
    btn: {
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    btnPrimary: {
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
    },
    btnOutline: {
      backgroundColor: 'white',
      color: '#2563eb',
      border: '1px solid #2563eb',
    },
  };

  if (!isVisible) return null;

  return (
    <div style={styles.dialogOverlay}>
      <div style={styles.dialogContent}>
        <div style={styles.dialogHeader}>
          <h2 style={styles.dialogTitle}>Update Payment Details</h2>
          <p style={styles.dialogDescription}>
            Your payment details are missing. Would you like to update your Payment Details?
          </p>
        </div>
        <div style={styles.dialogFooter}>
          <button 
            onClick={handleNo} 
            style={{...styles.btn, ...styles.btnOutline}}
          >
            No
          </button>
          <button 
            onClick={handleUpdate} 
            style={{...styles.btn, ...styles.btnPrimary}}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateConfirmation;