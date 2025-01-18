import { FC, useState } from 'react'

const WarningIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-16 text-white/80">
    <path
      fill="currentColor"
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8m-1 3h2v6h-2zm0 8h2v2h-2z"
    />
  </svg>
)

export const App: FC = () => {
  const [bgImageError, setBgImageError] = useState(false)
  const [mainImageError, setMainImageError] = useState(false)

  return (
    <div class="flex justify-center items-center size-full relative overflow-hidden">
      {!bgImageError ? (
        <img
          src="/image.jpg"
          alt="Background"
          class="size-full object-cover opacity-40 blur-3xl fixed inset-0 -z-10"
          onError={() => setBgImageError(true)}
        />
      ) : (
        <div className="fixed inset-0 -z-10 bg-neutral-900" />
      )}

      {!mainImageError ? (
        <img
          src="/image.jpg"
          alt="終わらない　未知でー"
          class="size-full object-contain"
          onError={() => setMainImageError(true)}
        />
      ) : (
        <div class="flex flex-col items-center gap-4 text-white/80">
          <WarningIcon />
          <span>画像の読み込みに失敗しました</span>
        </div>
      )}

      <div class="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2 items-center justify-center">
        <div class="text-white/80 text-xs text-center">
          非公式ファンサイトです。
          <br />
          ©「劇場版プロジェクトセカイ　壊れたセカイと歌えないミク」製作委員会
        </div>

        <a
          href="https://github.com/GalvinGao/kowaretasekaitoutaenaimiku.com"
          target="_blank"
          class="size-8 rounded-xl hover:bg-neutral-500/70 active:bg-neutral-500/90 transition-all backdrop-blur-xl hover:border-neutral-500/90 flex items-center justify-center shrink-0 text-white/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="size-4"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}
