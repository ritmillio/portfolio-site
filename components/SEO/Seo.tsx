import Head from 'next/head'

const Seo = (props) => {
  const { title, description, image } = props;
  return (
    <Head>
        <title>{title} | App</title>
        <meta name="description" content={description} />
        <meta itemprop="name" content={title} />
        <meta itemprop="description" content={description} />
        <meta itemprop="image" content={image} />
    </Head>
  )
}

SEO.defaultProps = {
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.meta.description,
  image:
    settings &&
    settings.meta &&
    settings.meta.social &&
    settings.meta.social.graphic,
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Seo
