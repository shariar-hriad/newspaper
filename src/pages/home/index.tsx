import Article from '@/components/sections/article'
import Banner from '@/components/sections/banner'
import PricingPlan from '@/components/sections/pricingPlan'
import Publisher from '@/components/sections/publisher'
import Statistic from '@/components/sections/statistic'

const index = () => {
    return (
        <>
            <Banner />
            <PricingPlan />
            <Statistic />
            <Publisher />
            <Article />
        </>
    )
}

export default index
