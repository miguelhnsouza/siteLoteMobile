import { useEffect } from 'react';

export function useSEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website'
} = {}) {
  useEffect(() => {
    if (title) {
      document.title = title;
      updateMetaTag('property', 'og:title', title);
      updateMetaTag('name', 'twitter:title', title);
    }

    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('name', 'twitter:description', description);
    }

    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    if (image) {
      updateMetaTag('property', 'og:image', image);
      updateMetaTag('name', 'twitter:image', image);
    }

    if (url) {
      updateMetaTag('property', 'og:url', url);
      updateMetaTag('name', 'twitter:url', url);
    }

    if (type) {
      updateMetaTag('property', 'og:type', type);
    }

  }, [title, description, keywords, image, url, type]);
}

function updateMetaTag(attribute, name, content) {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);

  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.setAttribute('content', content);
    document.getElementsByTagName('head')[0].appendChild(element);
  }
}

export function useLazyLoading() {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, []);
}

export function usePerformance() {
  useEffect(() => {
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log(`Página carregada em ${loadTime}ms`);

      if (window.gtag) {
        window.gtag('event', 'page_load_time', {
          value: Math.round(loadTime)
        });
      }
    });
  }, []);
}