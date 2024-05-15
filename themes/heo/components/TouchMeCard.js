
import FlipCard from '@/components/FlipCard'
import Link from 'next/link'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
    if (!JSON.parse(siteConfig('HEO_SOCIAL_CARD', null, CONFIG))) {
      return <></>
    }
  
    const frontSrcUrl = "https://cn.widgetstore.net/view/index.html?q=807102f6623d939101d5b1cd3ee9e8d6.880c3388663cd3eb0089a0665bafa3fb";
    const backSrcUrl = "https://cn.widgetstore.net/view/index.html?q=b69f67c062af00d807c80a7605e48aa3.aefa8b0064f4e39100e8889d6142d1ae";
    
    return (
      <div className={'relative h-64 text-white flex flex-col'}>
          <FlipCard
              className='cursor-pointer lg:p-6 p-4 border rounded-xl bg-[#4f65f0] dark:bg-yellow-600 dark:border-gray-600'
              frontContent={
                  <a href={frontSrcUrl} target="_blank" className="cursor-pointer">
                      <div className='font-[1000] text-xl h-full'>
                          <iframe src={frontSrcUrl} style={{ width: '100%', height: '100%' }}></iframe>
                      </div>
                  </a>}
              backContent={
                  <Link href={backSrcUrl}>
                      <a>
                          <div className='font-[1000] text-xl h-full'>
                              <iframe src={backSrcUrl} style={{ width: '100%', height: '100%' }}></iframe>
                          </div>
                      </a>
                  </Link>}
          />
      </div>
  )
  }
