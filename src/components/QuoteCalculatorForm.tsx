"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./QuoteCalculatorForm.module.css";

type Locale = "en" | "ru" | "sv" | "fi" | "da" | "no" | "et";

const SUPPORTED: Locale[] = ["en", "ru", "sv", "fi", "da", "no", "et"];

function detectLocale(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0] as Locale | undefined;
  if (seg && SUPPORTED.includes(seg)) return seg;
  return "en";
}

export default function QuoteCalculatorForm() {
  const pathname = usePathname() || "/";
  const locale = detectLocale(pathname);
  const ru = locale === "ru";

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [deadline, setDeadline] = useState("");
  const [workType, setWorkType] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");

  const requestText = useMemo(() => {
    return [
      ru ? "ЗАЯВКА С САЙТА AKWELD" : "AKWELD WEBSITE REQUEST",
      "",
      `${ru ? "Имя" : "Name"}: ${name || "-"}`,
      `${ru ? "Компания" : "Company"}: ${company || "-"}`,
      `${ru ? "Телефон / WhatsApp" : "Phone / WhatsApp"}: ${phone || "-"}`,
      `Email: ${email || "-"}`,
      `${ru ? "Локация проекта" : "Project location"}: ${location || "-"}`,
      `${ru ? "Срок" : "Deadline"}: ${deadline || "-"}`,
      `${ru ? "Что нужно" : "Work type"}: ${workType || "-"}`,
      "",
      `${ru ? "Описание" : "Description"}:`,
      message || "-",
    ].join("\n");
  }, [ru, name, company, phone, email, location, deadline, workType, message]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setServerMsg("");

    try {
      const formData = new FormData();
      formData.append("locale", locale);
      formData.append("name", name);
      formData.append("company", company);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("location", location);
      formData.append("deadline", deadline);
      formData.append("workType", workType);
      formData.append("message", message);
      formData.append("requestText", requestText);
      formData.append("createdAt", new Date().toISOString());

      for (const file of files) {
        formData.append("files", file);
      }

      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed");
      }

      setStatus("sent");
      setServerMsg(
        ru
          ? "Заявка отправлена. Ссылки на файлы добавлены в письмо."
          : "Request sent. File links were added to the email."
      );

      setName("");
      setCompany("");
      setPhone("");
      setEmail("");
      setLocation("");
      setDeadline("");
      setWorkType("");
      setMessage("");
      setFiles([]);
    } catch (e: any) {
      setStatus("error");
      setServerMsg(
        e?.message ||
          (ru ? "Ошибка отправки. Попробуйте позже." : "Send error. Please try again later.")
      );
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.title}>
          {ru ? "Запросить цену" : "Request a quote"}
        </h1>

        <p className={styles.sub}>
          {ru
            ? "Опишите задачу, укажите где находится проект и приложите чертежи, PDF или фотографии."
            : "Describe the task, add the project location and attach drawings, PDFs or photos."}
        </p>

        <form className={styles.grid} onSubmit={handleSubmit}>
          <div className={styles.block}>
            <h2 className={styles.h2}>{ru ? "Контакты" : "Contacts"}</h2>

            <div className={styles.row2}>
              <label className={styles.field}>
                <span>{ru ? "Имя" : "Name"}</span>
                <input value={name} onChange={(e) => setName(e.target.value)} />
              </label>

              <label className={styles.field}>
                <span>{ru ? "Компания" : "Company"}</span>
                <input value={company} onChange={(e) => setCompany(e.target.value)} />
              </label>
            </div>

            <div className={styles.row2}>
              <label className={styles.field}>
                <span>{ru ? "Телефон / WhatsApp" : "Phone / WhatsApp"}</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} />
              </label>

              <label className={styles.field}>
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className={styles.block}>
            <h2 className={styles.h2}>{ru ? "Проект" : "Project"}</h2>

            <div className={styles.row2}>
              <label className={styles.field}>
                <span>{ru ? "Где находится проект" : "Project location"}</span>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={ru ? "Например: Tallinn / Stockholm" : "For example: Tallinn / Stockholm"}
                />
              </label>

              <label className={styles.field}>
                <span>{ru ? "Срок" : "Deadline"}</span>
                <input
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  placeholder={ru ? "Например: срочно / 2 недели" : "For example: urgent / 2 weeks"}
                />
              </label>
            </div>

            <label className={styles.field}>
              <span>{ru ? "Что нужно сделать" : "What is needed"}</span>
              <input
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
                placeholder={
                  ru
                    ? "Изготовление, монтаж, ремонт, персонал"
                    : "Fabrication, installation, repair, workforce"
                }
              />
            </label>

            <label className={styles.field}>
              <span>{ru ? "Описание задачи" : "Task description"}</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  ru
                    ? "Опишите объём работ, материал, размеры и требования"
                    : "Describe the scope, material, dimensions and requirements"
                }
              />
            </label>
          </div>

          <div className={styles.block}>
            <h2 className={styles.h2}>{ru ? "Файлы" : "Files"}</h2>

            <label className={styles.field}>
              <span>
                {ru
                  ? "Чертежи, PDF, фотографии"
                  : "Drawings, PDFs, photos"}
              </span>
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.webp"
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
              />
            </label>

            {files.length > 0 ? (
              <div className={styles.preview}>
                <div className={styles.previewTitle}>
                  {ru ? "Выбранные файлы" : "Selected files"}
                </div>
                <textarea
                  readOnly
                  value={files.map((f) => `${f.name} (${Math.round(f.size / 1024)} KB)`).join("\n")}
                />
              </div>
            ) : null}

            <div className={styles.actions}>
              <button className={styles.primary} type="submit" disabled={status === "sending"}>
                {status === "sending"
                  ? ru
                    ? "Отправляем..."
                    : "Sending..."
                  : ru
                  ? "Отправить запрос"
                  : "Send request"}
              </button>
            </div>

            {serverMsg ? (
              <div className={status === "error" ? styles.msgErr : styles.msgOk}>
                {serverMsg}
              </div>
            ) : null}

            <div className={styles.preview}>
              <div className={styles.previewTitle}>
                {ru ? "Текст заявки" : "Request text"}
              </div>
              <textarea readOnly value={requestText} />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}