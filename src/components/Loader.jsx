import { Html, useProgress } from '@react-three/drei'

export function LoaderProgress() {
  const { progress } = useProgress()
  return <Html center>
    <div className='loadingDiv'>
        <span>Bem vindo ao meu quarto</span>
        <div>
        <span>Loading: </span>
        <span className='numberLoading'>{progress.toFixed(2)}%</span>
        </div>
    </div>
  </Html>
}