import Link from 'next/link';

export const SocialLinks = () => {
  return (
    <div className="mt-4 text-center">
      {/* Twitter */}
      <Link href="https://x.com/hermenautasl" className="btn-social btn-social-outline btn-twitter" style={{ marginRight: "0.25rem"}}>
        <i className="fab fa-twitter"></i>
      </Link>
      {/* Youtube */}
      <Link href="https://www.youtube.com/@hermenautas" className="btn-social btn-social-outline btn-youtube">
        <i className="fab fa-youtube"></i>
      </Link>{' '}
      {/* Facebook */}
      <Link href="https://www.facebook.com/hermenautasoficial/" className="btn-social btn-social-outline btn-facebook">
        <i className="fab fa-facebook"></i>
      </Link>{' '}								
      {/* Instagram */}
      <Link href="https://www.instagram.com/hermenautas.oficial/" className="btn-social btn-social-outline btn-instagram">
        <i className="fab fa-instagram"></i>
      </Link>{' '}
      {/* Twitch */}
      <Link href="https://www.twitch.tv/hermenautas" className="btn-social btn-social-outline btn-twitch">
        <i className="fab fa-twitch"></i>
      </Link>
      {/* Linkedin */}
      <Link href="https://www.linkedin.com/company/hermenautas-sl/" className="btn-social btn-social-outline btn-linkedin" style={{ marginLeft: "0.25rem"}}>
        <i className="fab fa-linkedin"></i>
      </Link>								
    </div>
  )
}
