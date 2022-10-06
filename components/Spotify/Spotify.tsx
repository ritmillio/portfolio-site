import Image from 'next/image'

const Spotify: React.FC = () => {
  return (
  <div className='rounded-sm hidden xl:block'>
    <a href='https://open.spotify.com/playlist/1DgMS1ijBNF6DXwFYEkqYf?si=f566169303a84109'>
      <img className='w-48 h-64' src="https://spotify-github-profile.vercel.app/api/view?uid=z35eh0oli5z5qokmsiaq6pm54&cover_image=true&theme=default&bar_color_cover=false" />
    </a>
  </div>)
}
  
export default Spotify