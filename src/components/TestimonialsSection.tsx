import { Play } from "lucide-react";
import { useState, useRef } from "react";

type Testimonial = 
    | { type: "local"; src: string; name: string; description: string }
    | { type: "youtube"; id: string; name: string; description: string };

const testimonials: Testimonial[] = [
    {
        type: "local",
        src: "/depoimento-local.mp4",
        name: "Depoimento Exclusivo",
        description: "Veja o resultado real de quem confia na DOHA.",
    },
    {
        type: "youtube",
        id: "46K6ry5QLXI",
        name: "Depoimento de Sucesso",
        description: "Veja como transformamos o crescimento deste negócio."
    },
    {
        type: "youtube",
        id: "kcYvRPxD_yI",
        name: "Resultado Real",
        description: "Estratégias que geram retorno previsível."
    }
];

const LocalVideoCard = ({ testimonial }: { testimonial: Extract<Testimonial, { type: "local" }> }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) { videoRef.current.play(); setIsPlaying(true); }
    };

    return (
        <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black border border-white/10 glow-sm group cursor-pointer flex items-center justify-center">
            <video ref={videoRef} src={testimonial.src} className="w-full h-full object-cover" playsInline controls={isPlaying} onPause={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)} onEnded={() => setIsPlaying(false)} />
            {!isPlaying && (
                <div className="absolute inset-0 flex flex-col justify-end" onClick={handlePlay}>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/20">
                        <div className="bg-primary text-primary-foreground p-4 rounded-full scale-100 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-primary/20">
                            <Play className="w-8 h-8 fill-current" />
                        </div>
                    </div>
                    <div className="relative p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white font-bold text-lg leading-tight">{testimonial.name}</h3>
                        <p className="text-white/80 text-xs mt-1">{testimonial.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const YouTubeVideoCard = ({ testimonial, isPlaying, onPlay }: { testimonial: Extract<Testimonial, { type: "youtube" }>; isPlaying: boolean; onPlay: () => void }) => {
    return (
        <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black border border-white/10 glow-sm group cursor-pointer flex items-center justify-center">
            {isPlaying ? (
                <iframe src={`https://www.youtube.com/embed/${testimonial.id}?autoplay=1&rel=0&modestbranding=1`} title={testimonial.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            ) : (
                <div className="relative w-full h-full" onClick={onPlay}>
                    <img src={`https://img.youtube.com/vi/${testimonial.id}/maxresdefault.jpg`} alt={testimonial.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${testimonial.id}/hqdefault.jpg`; }} />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/20">
                        <div className="bg-primary text-primary-foreground p-4 rounded-full scale-100 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-primary/20">
                            <Play className="w-8 h-8 fill-current" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white font-bold text-lg leading-tight">{testimonial.name}</h3>
                        <p className="text-white/80 text-xs mt-1">{testimonial.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const TestimonialsSection = () => {
    const [playingYoutubeId, setPlayingYoutubeId] = useState<string | null>(null);

    return (
        <section id="depoimentos" className="py-20 md:py-28 bg-white text-black">
            <div className="container">
                <div className="text-center mb-4">
                    <span className="inline-block text-sm font-heading font-bold tracking-[0.2em] uppercase mb-4 text-primary">
                        👤 DEPOIMENTOS
                    </span>
                </div>
                <div className="text-center mb-12">
                    <h2 className="fade-up text-3xl md:text-5xl font-heading font-bold mb-4 uppercase text-black">
                        RESULTADOS REAIS EM CERCA DE <span className="text-primary">90 DIAS.</span><br/> ISSO É DOHA.
                    </h2>
                </div>

                {/* Desktop: side by side / Mobile: stacked */}
                <div className="fade-up fade-up-delay-2 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.type === "youtube" ? testimonial.id : `local-${index}`}>
                            {testimonial.type === "local" ? (
                                <LocalVideoCard testimonial={testimonial} />
                            ) : (
                                <YouTubeVideoCard 
                                    testimonial={testimonial}
                                    isPlaying={playingYoutubeId === testimonial.id}
                                    onPlay={() => setPlayingYoutubeId(testimonial.id)}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="fade-up fade-up-delay-3 text-center mt-20">
                    <p className="text-black/70 font-medium mb-6">Pronto para ser nosso próximo caso de sucesso?</p>
                    <button
                        onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
                        className="bg-primary text-primary-foreground font-heading font-semibold px-10 py-5 rounded-2xl hover:brightness-110 transition-all duration-300 glow hover:glow-lg"
                    >
                        SEJA MAIS UM CASE DE SUCESSO
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
