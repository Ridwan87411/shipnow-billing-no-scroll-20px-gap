import { useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiCheck,
  FiMoreVertical,
  FiPaperclip,
  FiPhone,
  FiSearch,
  FiSend,
} from "react-icons/fi";
import PageHeader from "../../components/common/PageHeader";

const conversations = [
  { id: 1, name: "Arif Hossain", role: "Driver · FLT-201", message: "I have reached the Cumilla checkpoint.", time: "10:42 AM", unread: 2, online: true, initials: "AH", color: "bg-brand-600" },
  { id: 2, name: "Mehedi Hasan", role: "Driver · FLT-202", message: "The shipment has been loaded successfully.", time: "10:18 AM", unread: 1, online: true, initials: "MH", color: "bg-[#4d8df7]" },
  { id: 3, name: "GreenHaven Logistics", role: "Customer · SH9283746", message: "Can you confirm today’s delivery time?", time: "9:55 AM", unread: 3, online: false, initials: "GL", color: "bg-success" },
  { id: 4, name: "Rakib Ahmed", role: "Driver · FLT-203", message: "Traffic is clear. ETA remains unchanged.", time: "9:32 AM", unread: 0, online: true, initials: "RA", color: "bg-[#ee9b45]" },
  { id: 5, name: "FreshNest Warehouse", role: "Warehouse · Chattogram", message: "Dock 3 is ready for the incoming truck.", time: "9:14 AM", unread: 0, online: true, initials: "FW", color: "bg-[#7b68c9]" },
  { id: 6, name: "Tanvir Rahman", role: "Driver · FLT-204", message: "Vehicle inspection has been completed.", time: "8:48 AM", unread: 0, online: false, initials: "TR", color: "bg-[#607d8b]" },
  { id: 7, name: "Sabbir Khan", role: "Driver · FLT-205", message: "Pickup documents are attached.", time: "8:25 AM", unread: 1, online: true, initials: "SK", color: "bg-[#d06b8a]" },
  { id: 8, name: "TechGear Inc.", role: "Customer · SH9182635", message: "Thank you for the delivery confirmation.", time: "Yesterday", unread: 0, online: false, initials: "TI", color: "bg-[#455a64]" },
  { id: 9, name: "Imran Chowdhury", role: "Driver · FLT-206", message: "Cold storage temperature is stable.", time: "Yesterday", unread: 0, online: true, initials: "IC", color: "bg-[#258a94]" },
  { id: 10, name: "Fahim Islam", role: "Driver · FLT-207", message: "Starting the Mymensingh route now.", time: "Yesterday", unread: 0, online: false, initials: "FI", color: "bg-[#8c6dc1]" },
  { id: 11, name: "StyleHub Support", role: "Customer · SH9037821", message: "Please update the recipient phone number.", time: "Yesterday", unread: 2, online: true, initials: "SS", color: "bg-[#d27b45]" },
  { id: 12, name: "Nayeem Uddin", role: "Driver · FLT-208", message: "Maintenance team has received the vehicle.", time: "Mon", unread: 0, online: false, initials: "NU", color: "bg-[#667db5]" },
  { id: 13, name: "Shakil Mia", role: "Driver · FLT-209", message: "Arriving at Jessore in approximately 30 minutes.", time: "Mon", unread: 0, online: true, initials: "SM", color: "bg-[#39956b]" },
  { id: 14, name: "Delta Logistics", role: "Carrier Partner", message: "The weekly performance report is ready.", time: "Sun", unread: 0, online: false, initials: "DL", color: "bg-[#52699b]" },
  { id: 15, name: "Rifat Karim", role: "Driver · FLT-210", message: "Vehicle fuel level is at 94%.", time: "Sun", unread: 0, online: true, initials: "RK", color: "bg-[#7556b6]" },
  { id: 16, name: "Jahidul Alam", role: "Driver · FLT-211", message: "I will resume duty tomorrow morning.", time: "Sat", unread: 0, online: false, initials: "JA", color: "bg-[#a76b40]" },
  { id: 17, name: "Sohel Rana", role: "Driver · FLT-212", message: "The refrigerated cargo was delivered safely.", time: "Sat", unread: 0, online: true, initials: "SR", color: "bg-[#27828c]" },
  { id: 18, name: "Operations Team", role: "Internal Channel", message: "Tomorrow’s dispatch schedule has been published.", time: "Fri", unread: 4, online: true, initials: "OT", color: "bg-[#3f51b5]" },
  { id: 19, name: "Warehouse A", role: "Warehouse Channel", message: "Zone A-01 inventory count is complete.", time: "Fri", unread: 0, online: true, initials: "WA", color: "bg-[#6f8e45]" },
];

const unreadConversations = conversations.map((item) => ({ ...item, unread: Math.max(1, item.unread) }));

function receivedMessage(conversation) {
  return [{ id: `received-${conversation.id}`, mine: false, text: conversation.message, time: conversation.time }];
}

export default function Messages() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(unreadConversations[0]);
  const [mobileChatOpen, setMobileChatOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [chatMessages, setChatMessages] = useState(receivedMessage(unreadConversations[0]));
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    return value
      ? unreadConversations.filter((item) => `${item.name} ${item.role} ${item.message}`.toLowerCase().includes(value))
      : unreadConversations;
  }, [query]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (!draft.trim()) return;
    setChatMessages((current) => [...current, { id: Date.now(), mine: true, text: draft.trim(), time: "Now" }]);
    setDraft("");
  };

  return (
    <div>
      <PageHeader title="Messages" breadcrumb="Messages" />
      <div className="mb-4 md:hidden">
        <h1 className="text-[22px] font-semibold tracking-[-0.03em] text-ink">Messages</h1>
        <p className="mt-1 text-[12px] text-muted">19 active conversations</p>
      </div>

      <section className="card grid min-h-[620px] overflow-hidden md:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[350px_minmax(0,1fr)]">
        <aside className={`${mobileChatOpen ? "hidden" : "flex"} min-w-0 flex-col border-r border-line md:flex`}>
          <div className="border-b border-line p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div><h2 className="text-[17px] font-semibold text-ink">Inbox</h2><p className="mt-1 text-[10px] text-muted">{unreadConversations.length} messages · 19 unread</p></div>
              <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold text-brand-700">19</span>
            </div>
            <label className="relative mt-3 block">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search messages" className="h-10 w-full rounded-lg bg-[#f5f5f6] pl-9 pr-3 text-[12px] placeholder:text-[#aaa]" />
            </label>
          </div>
          <div className="max-h-[650px] flex-1 overflow-y-auto scrollbar-thin">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelected(item);
                  setChatMessages(receivedMessage(item));
                  setDraft("");
                  setMobileChatOpen(true);
                }}
                className={`flex w-full gap-3 border-b border-line p-3 text-left transition sm:p-4 ${selected.id === item.id ? "bg-brand-50" : "hover:bg-[#fafafa]"}`}
              >
                <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white ${item.color}`}>
                  {item.initials}
                  {item.online && <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2"><p className="truncate text-[13px] font-semibold text-ink">{item.name}</p><span className="shrink-0 text-[9px] text-muted">{item.time}</span></div>
                  <p className="mt-0.5 truncate text-[10px] text-brand-600">{item.role}</p>
                  <div className="mt-1 flex items-center gap-2"><p className="min-w-0 flex-1 truncate text-[11px] text-muted">{item.message}</p>{item.unread > 0 && <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1 text-[9px] font-semibold text-white">{item.unread}</span>}</div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <div className={`${mobileChatOpen ? "flex" : "hidden"} min-w-0 flex-col md:flex`}>
          <header className="flex h-[70px] items-center gap-3 border-b border-line px-3 sm:px-4">
            <button onClick={() => setMobileChatOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f3f3f4] md:hidden" aria-label="Back to messages"><FiArrowLeft /></button>
            <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white ${selected.color}`}>{selected.initials}{selected.online && <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success" />}</div>
            <div className="min-w-0 flex-1"><h2 className="truncate text-[14px] font-semibold text-ink sm:text-[16px]">{selected.name}</h2><p className="mt-0.5 truncate text-[10px] text-muted">{selected.online ? "Online now" : selected.role}</p></div>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f3f3f4] text-[#666]" aria-label="Call contact"><FiPhone /></button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-[#666]" aria-label="More options"><FiMoreVertical /></button>
          </header>

          <div className="flex-1 overflow-y-auto bg-[#fafafa] p-3 sm:p-5 scrollbar-thin">
            <div className="mx-auto max-w-[760px]">
              <div className="mb-5 text-center"><span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-medium text-muted shadow-card">Today</span></div>
              <div className="space-y-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.mine ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-[12px] leading-relaxed sm:max-w-[70%] sm:text-[13px] ${message.mine ? "rounded-br-md bg-brand-600 text-white" : "rounded-bl-md border border-line bg-white text-[#4d4d52]"}`}>
                      {!message.mine && <p className="mb-1.5 text-[10px] font-semibold text-brand-600">{selected.name}</p>}
                      <p>{message.text}</p>
                      <p className={`mt-1.5 flex items-center justify-end gap-1 text-[9px] ${message.mine ? "text-white/70" : "text-muted"}`}>{message.time}{message.mine && <FiCheck />}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-line p-3 sm:p-4">
            <button type="button" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f3f4] text-[#666]" aria-label="Attach file"><FiPaperclip /></button>
            <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Write a message..." className="h-11 min-w-0 flex-1 rounded-lg bg-[#f5f5f6] px-4 text-[12px] placeholder:text-[#aaa]" />
            <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white" aria-label="Send message"><FiSend /></button>
          </form>
        </div>
      </section>
    </div>
  );
}
