import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <div className="text-secondary bg-secondary-foreground p-10 rounded-xl">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">Join our community</h2>
            <Button className="bg-primary-foreground text-primary hover:bg-secondary w-fit mt-4">
              <a href="https://t.me/blockcmd" target='_blank'>Go to group chat</a>
            </Button>
          </div>
          <div className="text-secondary bg-secondary-foreground p-10 rounded-xl grow">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-6">Here are some links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <h3 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">Team</h3>
                <Link href="/our-story" className="text-gray-400 text-sm">Our story</Link>
                <Link href="/support" className="text-gray-400 text-sm">Support</Link>
                <Link href="/contributors" className="text-gray-400 text-sm">Contributors</Link>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">Legal</h3>
                <Link href="/privacy" className="text-gray-400 text-sm">Privacy policy</Link>
                <Link href="/community-rules" className="text-gray-400 text-sm">Community rules</Link>
                <Link href="/company-info" className="text-gray-400 text-sm">Company info</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grow text-secondary bg-secondary-foreground p-10 rounded-xl">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">Contact us</h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6 text-gray-400">Follow us on Twitter or join our Telegram group to get in touch, keep up with the latest updates and receive product support.</p>
            <a className="flex flex-row gap-2 items-center text-blue-400 text-2xl" href="https://twitter.com/blockcmdHQ" target="_blank">
              𝕏 <ArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div className="text-sm text-muted-foreground text-center">BlockCMD is built by <a href="https://twitter.com/zxstim" className="text-blue-400 underline underline-offset-2">zxstim</a> and contributors</div>
    </footer>
  )
}