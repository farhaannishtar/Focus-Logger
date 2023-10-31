import YesterdaysFocusTime from "./components/YesterdaysFocusTime"
import StartFocus from "./components/StartFocus"

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <YesterdaysFocusTime />
      <StartFocus />
    </main>
  )
}
