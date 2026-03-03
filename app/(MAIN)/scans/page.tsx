import TopBar from "@/components/dashboard/TopBar";
import ScanProgress from "@/components/scans/ScanProgress";
import ScanInfoBar from "@/components/scans/ScanInfoBar";
import LiveConsole from "@/components/scans/LiveConsole";
import ScanStatusBar from "@/components/scans/ScanStatusBar";

export const metadata = {
  title: "Scans — aps",
};

export default function ScansPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <TopBar />
      <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-5 lg:p-6">
        <ScanProgress />
        <ScanInfoBar />
        <LiveConsole />
      </div>
      <ScanStatusBar />
    </div>
  );
}
