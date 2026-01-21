import { Download, FileText, FileSpreadsheet, File } from 'lucide-react'

interface DownloadCardProps {
  name: string
  url: string
  size?: string
  type?: string
}

const getFileIcon = (url: string) => {
  if (url.endsWith('.pdf')) return FileText
  if (url.endsWith('.xlsx') || url.endsWith('.xls')) return FileSpreadsheet
  return File
}

export function DownloadCard({ name, url, size, type }: DownloadCardProps) {
  const FileIcon = getFileIcon(url)

  return (
    <a
      href={url}
      download
      className="flex items-center gap-4 bg-[#16162A] border border-white/10 rounded-xl p-4 hover:border-[#7C3AED]/50 transition-colors group"
    >
      <div className="w-12 h-12 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0">
        <FileIcon className="w-6 h-6 text-[#A78BFA]" />
      </div>

      <div className="flex-grow min-w-0">
        <p className="font-medium text-white truncate group-hover:text-[#A78BFA] transition-colors">
          {name}
        </p>
        {(size || type) && (
          <p className="text-sm text-[#9CA3AF]">
            {type && <span>{type}</span>}
            {type && size && <span> • </span>}
            {size && <span>{size}</span>}
          </p>
        )}
      </div>

      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#7C3AED]/20 transition-colors">
          <Download className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#A78BFA] transition-colors" />
        </div>
      </div>
    </a>
  )
}
