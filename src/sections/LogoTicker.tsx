import acemeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import echoLogo from '@/assets/logo-echo.png';
import qnatumLogo from '@/assets/logo-quantum.png';
import Image from 'next/image';

const images = [
  { src: acemeLogo, alt: 'acme logo' },
  { src: qnatumLogo, alt: 'quantum logo' },
  { src: echoLogo, alt: 'echo logo' },
  { src: celestialLogo, alt: 'celestial logo' },
  { src: pulseLogo, alt: 'pulse logo' },
  { src: apexLogo, alt: 'apex logo' }
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px]">
      <div className="container text-center">
      <h2 className="text-center text-xl pt-5 text-white/70">
  Trusted by the world&#39;s most innovative teams
</h2>

        <div className="overflow-hidden mt-9">
          <div className="flex gap-16 justify-center">
            {images.map(({ src, alt }, index) => (
              <Image
                key={index}
                src={src}
                alt={alt}
                width={100}
                height={100}
                className="flex-none h-5 w-20"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
