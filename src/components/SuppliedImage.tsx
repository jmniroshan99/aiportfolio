import { media, type PortfolioImage } from '../data/media';

export function SuppliedImage({ image, className = '', priority = false }: { image: PortfolioImage; className?: string; priority?: boolean }) {
  const { crop } = image;
  return <span className={`supplied-image ${className}`} style={{ aspectRatio: `${crop.width} / ${crop.height}` }}>
    <img src={image.src} alt={image.alt} width={image.width} height={image.height}
      loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} decoding="async"
      style={{ width: `${image.width / crop.width * 100}%`, left: `${-crop.x / crop.width * 100}%`, top: `${-crop.y / crop.height * 100}%` }}/>
  </span>;
}

export function Portrait({ large = false }: { large?: boolean }) {
  return <SuppliedImage image={media.portrait} className={`portrait${large ? ' portrait-large' : ''}`} priority={!large}/>;
}

export function AdditionalPreview() {
  return <article className="additional-preview" aria-labelledby="tailorpro-title">
    <div className="additional-preview-art"><div className="screenshot-phone"><SuppliedImage image={media.tailorpro}/></div></div>
    <div className="additional-preview-copy"><span className="eyebrow">MORE INTERFACE WORK</span><h3 id="tailorpro-title">TailorPro ERP<span>.</span></h3><p>A focused sign-in interface with email, password, and fingerprint entry options.</p><div className="tags"><span>Sign-in interface</span><span>Mobile-sized layout</span></div><p className="media-note">Supplied interface preview. Backend behavior and platform releases are not established by this screenshot.</p></div>
  </article>;
}
