import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const HeroSection = () => {
    return (
        <section id="hero_section" className="py-10">
            <div>
                <Carousel
                    opts={{ loop: true, duration: 50, align: 'start' }}
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <img src="https://placehold.co/600x280" alt="image-1" className="w-full" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src="https://placehold.co/600x280" alt="image-1" className="w-full" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src="https://placehold.co/600x280" alt="image-1" className="w-full" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
};

export default HeroSection;
