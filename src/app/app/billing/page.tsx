'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function BillingPage() {
  const [addingPayment, setAddingPayment] = useState(false);

  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>Billing</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionH2}>Current plan</h2>
        <div className={styles.planCard}>
          <div className={styles.planInfo}>
            <p className={styles.planName}>No active plan</p>
            <p className={styles.planDesc}>Register your first .al domain to start a plan.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionH2}>Payment method</h2>
        <div className={styles.paymentCard}>
          {addingPayment ? (
            <div className={styles.addPaymentForm}>
              <p className={styles.comingSoon}>Payment method management launches with full account access.</p>
              <button className="btn-secondary" onClick={() => setAddingPayment(false)} type="button">Cancel</button>
            </div>
          ) : (
            <>
              <p className={styles.noPayment}>No payment method on file.</p>
              <button className="btn-secondary" onClick={() => setAddingPayment(true)} type="button">Add payment method</button>
            </>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionH2}>Order history</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr><th>Date</th><th>Item</th><th>Amount</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td colSpan={4} className={styles.emptyRow}>No orders yet.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
