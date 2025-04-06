import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import HeroSection from './hero';

const Home = () => {
    return (
        <AppLayout>
            <Head title="Home" />
            <HeroSection />

            <div className="text-muted-foreground mb-10 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat modi impedit perspiciatis, nulla voluptate iusto minus quidem
                eos veritatis laboriosam dolorum reprehenderit, officiis exercitationem omnis vitae ab. Repellat natus porro facilis hic? Id sint
                similique natus ipsum itaque, assumenda ducimus, eos veniam, rem eveniet libero dignissimos repellat laudantium ea sunt minima tenetur
                dolore! Officiis ducimus aperiam vitae, fugit qui soluta ipsum eius incidunt! Cum fugiat ea, nesciunt, atque cupiditate voluptatem quo
                ab ratione at tenetur accusantium quae natus odit totam. Cum error nam nemo dolores laudantium asperiores est maiores quos ratione
                itaque animi temporibus quas autem veniam odit dolorum ab explicabo.
            </div>
        </AppLayout>
    );
};

export default Home;
