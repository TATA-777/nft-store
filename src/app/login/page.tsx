'use client'

import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const { user, loginWithGoogle, loginWithGitHub, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.replace('/')
    }
  }, [user, loading, router])

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-[420px] bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        {/* 로고 / 제목 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-black-700">NFT 로그인</h1>
          <p className="text-sm text-gray-500 mt-2">
            계정으로 로그인하여 개인 스토어를 이용해보세요.
          </p>
        </div>

        {/* 소셜 로그인 버튼들 */}
        <div className="space-y-3">
          <button
            onClick={loginWithGoogle}
            className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Google 계정으로 로그인
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
