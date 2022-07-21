import TitleAndSearch from '../../components/organisms/TitleAndSearch'
import filterArticles from '../../api/articles'

const About = () => {
  return (
    <div className='blogPage'>
      <TitleAndSearch filterArticles={filterArticles} />
      {/* <div className='blogPage__mainContent'>
        <ArticlesList articlesData={articlesData} filtered={filtered} />
        <aside className='blogPage__aside'>
          <AdvertisingCard data={AdvertisingData} />
          <TastyRecipes />
        </aside>
      </div>
      <Newsletter /> */}
    </div>
  )
}
export default About