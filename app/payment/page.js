'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PaymentPage() {
  const router = useRouter();
  const [isComplete, setIsComplete] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsComplete(true);
  }

  return (
    <main className="payment-shell">
      <section className="payment-card" aria-labelledby="payment-title">
        <button className="back-button" type="button" onClick={() => router.back()}>
          ← Back to product
        </button>

        {isComplete ? (
          <section className="success-state" aria-live="polite">
            <span className="success-icon" aria-hidden="true">✓</span>
            <p className="eyebrow">Payment successful</p>
            <h1 id="payment-title">Your Airforce is on its way.</h1>
            <p>Thanks for your order. A confirmation will be sent shortly.</p>
            <button className="buy-button success-button" type="button" onClick={() => router.push('/')}>
              Continue shopping <span className="arrow-icon" aria-hidden="true">↗</span>
            </button>
          </section>
        ) : (
          <>
            <header className="payment-header">
              <p className="eyebrow">Secure checkout</p>
              <h1 id="payment-title">Complete your order</h1>
              <p>Nike Airforce1 Premium</p>
            </header>

            <aside className="order-summary" aria-label="Order summary">
              <img
                src="https://files.sunoresearch.com.br/n/uploads/2022/07/cropped-nike-g78b194ca0_1920.jpg"
                alt="Nike Airforce1 Premium"
              />
              <div>
                <strong>Nike Airforce1 Premium</strong>
                <span>Classic white / black</span>
              </div>
              <b>$111</b>
            </aside>

            <form className="payment-form" onSubmit={handleSubmit}>
              <label htmlFor="cardholder">Cardholder name</label>
              <input id="cardholder" name="cardholder" type="text" placeholder="Alex Morgan" required />

              <label htmlFor="card-number">Card number</label>
              <input id="card-number" name="card-number" type="text" inputMode="numeric" placeholder="1234 5678 9012 3456" required />

              <div className="form-row">
                <div>
                  <label htmlFor="expiry">Expiry date</label>
                  <input id="expiry" name="expiry" type="text" placeholder="MM / YY" required />
                </div>
                <div>
                  <label htmlFor="cvc">CVC</label>
                  <input id="cvc" name="cvc" type="text" inputMode="numeric" placeholder="123" required />
                </div>
              </div>

              <button className="pay-button" type="submit">
                Pay $111 <span className="arrow-icon" aria-hidden="true">↗</span>
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}
