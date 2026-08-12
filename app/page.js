'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const productImages = [
  'https://files.sunoresearch.com.br/n/uploads/2022/07/cropped-nike-g78b194ca0_1920.jpg',
  'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=90',
];

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const router = useRouter();

  return (
    <main className="page-shell">
      <article className="product-card" aria-label="Nike Air Force 1 Premium product">
        <section className="image-slider" aria-label="Product image gallery">
          <span className="best-seller">Best Seller</span>
          <span className="brand-mark">
            <img
              src="https://www.pngkit.com/png/detail/939-9396033_nike-logo-clipart-original-circle.png"
              alt=""
            />
          </span>

          <img
            className="product-image"
            src={productImages[activeImage]}
            alt={`Nike Air Force 1 Premium, view ${activeImage + 1}`}
          />

          <div className="slider-controls" aria-label="Choose product image">
            {productImages.map((_, index) => (
              <button
                className={`slider-dot ${activeImage === index ? 'is-active' : ''}`}
                type="button"
                key={index}
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={activeImage === index}
              />
            ))}
          </div>
        </section>

        <section className="product-details">
          <h1>Nike Airforce1 Premium</h1>
          <p className="subtitle">Own the Airforce</p>
          <p className="description">Step back into classic hoops style with a durable leather.</p>
        </section>

        <footer className="product-footer">
          <span className="price">$111</span>
          <button className="buy-button" type="button" onClick={() => router.push('/payment')}>
            Buy Now
            <span className="arrow-icon" aria-hidden="true">↗</span>
          </button>
        </footer>
      </article>
    </main>
  );
}
