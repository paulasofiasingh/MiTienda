"use client";
import React, { useState, useRef, useEffect } from 'react';
import ImageAtom from '../atoms/image';
import Button from '../atoms/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from 'gsap';

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef(null);
  const intervalRef = useRef(null); // Para almacenar el intervalo

  useEffect(() => {
    const card = cardRef.current;

    // Comprobar si product.images está definido y tiene imágenes
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      const changeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
      };

      const handleMouseEnter = () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power1.out' });

        // Iniciar el intervalo para cambiar las imágenes cada menos de 1 segundo
        intervalRef.current = setInterval(changeImage, 900);
      };

      const handleMouseLeave = () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power1.out' });

        // Limpiar el intervalo al salir
        clearInterval(intervalRef.current);

        // Volver a la primera imagen cuando se saque el mouse
        setCurrentImageIndex(0);
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Limpiar los event listeners si el componente se desmonta
      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);

        // Limpiar el intervalo si el componente se desmonta
        clearInterval(intervalRef.current);
      };
    }
  }, [product.images]); // Solo se vuelve a ejecutar si las imágenes cambian

  return (
    <div
      ref={cardRef}
      className="card"
      style={{ width: '18rem', overflow: 'hidden' }}
    >
      {/* Solo renderiza la imagen si el arreglo de imágenes está presente */}
      {product.images && Array.isArray(product.images) && product.images.length > 0 && (
        <ImageAtom
          src={product.images[currentImageIndex]} // Dynamically change the image
          alt={product.name}
          className="card-img-top"
          style={{ transition: 'opacity 0.3s ease-in-out' }}
        />
      )}
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <Button text="Añadir al carrito" className="btn btn-success w-100" />
      </div>
    </div>
  );
};

export default ProductCard;
