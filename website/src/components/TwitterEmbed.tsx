import { Tweet } from 'react-tweet'

interface TwitterEmbedProps {
  tweetId: string
}

export function TwitterEmbed({ tweetId }: TwitterEmbedProps) {
  return (
    <div className="bg-[#15202b] rounded-xl border border-stroke-subtle shadow-soft h-[600px] overflow-hidden">
      <div className="h-full overflow-y-auto">
        <Tweet id={tweetId} />
      </div>
    </div>
  )
}
