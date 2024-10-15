import { getCldImageUrl } from 'next-cloudinary/helpers';

export async function GET() {
  const dateToday = new Date();
  const dateChristmas = new Date(`12/24/${dateToday.getFullYear()}, 11:59:59 PM`);
  const timeLeft = dateChristmas.getTime() - dateToday.getTime();

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  const url = getCldImageUrl({
    src: 'my-email-timer/your_image_name', // Substitua 'your_image_name' pelo nome da sua imagem
    width: 1200,
    format: 'jpg',
    overlays: [
      {
        text: {
          color: 'rgb:BFFBFF',
          text: 'Santa is coming in'.toUpperCase(),
          fontFamily: 'Oswald',
          fontSize: 70
        },
        position: {
          y: -60
        }
      },
      {
        text: {
          color: 'white',
          text: `${days} Days ${hours} Hours`,
          fontFamily: 'Berkshire Swash',
          fontSize: 120
        },
        position: {
          y: 40
        }
      },
    ]
  });

  const image = await fetch(url);

  return new Response(image.body, {
    status: 200,
    headers: {
      'Content-Type': String(image.headers.get('Content-Type')),
      'Content-Length': String(image.headers.get('Content-Length')),
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0' // Para evitar cache
    }
  });
}
