import Image from 'next/image'

const Spotify: React.FC = () => {
  return (
  <div className='bg-happyhues_11-background-button dark:bg-happyhues_4-background-button p-2 rounded-sm'>

    <h5 className='flex items-center justify-center'>
        <span>Currently listening</span>
        <a className='ml-4' href='https://open.spotify.com/playlist/1DgMS1ijBNF6DXwFYEkqYf?si=f566169303a84109'>
            <img className='w-8' src="https://zoltanfodor.b-cdn.net/spotify-3771073-3147690.png" alt="" />
        </a>
    </h5>
    <img className='w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[350px]' src="https://spotify-github-profile.vercel.app/api/view?uid=z35eh0oli5z5qokmsiaq6pm54&cover_image=true&theme=novatorem&bar_color_cover=false" />
  </div>)
}
  
export default Spotify