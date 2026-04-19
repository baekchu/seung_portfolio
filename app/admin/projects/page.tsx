"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { STACKS } from "@/common/constants/stacks";

const ALL_STACKS = Object.keys(STACKS);

const initialForm = {
  title: "",
  slug: "",
  description: "",
  image: "",
  link_demo: "",
  link_github: "",
  stacks: [] as string[],
  content: "",
  is_show: true,
  is_featured: false,
};

export default function AdminProjectsPage() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSlugGenerate = () => {
    const slug = form.title
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, "")
      .trim()
      .replace(/[\s]+/g, "-")
      .replace(/[가-힣]+/g, (m) =>
        encodeURIComponent(m).replace(/%[0-9A-F]{2}/gi, "").toLowerCase(),
      )
      .replace(/-+/g, "-")
      .slice(0, 60)
      || `project-${Date.now()}`;
    setForm((prev) => ({ ...prev, slug }));
  };

  const toggleStack = (stack: string) => {
    setForm((prev) => ({
      ...prev,
      stacks: prev.stacks.includes(stack)
        ? prev.stacks.filter((s) => s !== stack)
        : [...prev.stacks, stack],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/projects/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          link_demo: form.link_demo || undefined,
          link_github: form.link_github || undefined,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: `✅ ${data.message}` });
        setForm(initialForm);
        setTimeout(() => router.push("/projects"), 1500);
      } else {
        setMessage({ type: "error", text: `❌ ${data.message}` });
      }
    } catch {
      setMessage({ type: "error", text: "❌ 네트워크 오류가 발생했습니다." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
              프로젝트 추가
            </h1>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              개발 모드에서만 동작합니다. 저장 후 서버를 재시작해 주세요.
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/projects")}
            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800"
          >
            ← 프로젝트 목록
          </button>
        </div>

        {message && (
          <div
            className={`mb-6 rounded-lg p-4 text-sm font-medium ${
              message.type === "success"
                ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
            }`}
          >
            {message.text}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
        >
          {/* 제목 */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              프로젝트 제목 <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="예: 웹 취약점 스캐너"
              className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-50"
            />
          </div>

          {/* 슬러그 */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              슬러그 (URL) <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                name="slug"
                value={form.slug}
                onChange={handleChange}
                required
                placeholder="예: web-vulnerability-scanner"
                className="flex-1 rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-50"
              />
              <button
                type="button"
                onClick={handleSlugGenerate}
                className="whitespace-nowrap rounded-lg bg-neutral-200 px-3 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-500"
              >
                자동 생성
              </button>
            </div>
          </div>

          {/* 설명 */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              설명 <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={3}
              placeholder="프로젝트에 대한 간단한 설명을 입력하세요."
              className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-50"
            />
          </div>

          {/* 상세 내용 */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              상세 내용
            </label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={2}
              placeholder="프로젝트 카드에 표시될 짧은 한 줄 설명"
              className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-50"
            />
          </div>

          {/* 이미지 경로 */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              이미지 경로
            </label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="예: /images/projects/my-project.jpg (비워두면 자동 설정)"
              className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-50"
            />
            <p className="text-xs text-neutral-400">
              이미지 파일은{" "}
              <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-700">
                public/images/projects/
              </code>{" "}
              에 직접 업로드해 주세요.
            </p>
          </div>

          {/* 링크 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                GitHub 링크
              </label>
              <input
                name="link_github"
                value={form.link_github}
                onChange={handleChange}
                placeholder="https://github.com/..."
                className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                데모 링크
              </label>
              <input
                name="link_demo"
                value={form.link_demo}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-50"
              />
            </div>
          </div>

          {/* 기술 스택 */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              기술 스택
            </label>
            <div className="flex flex-wrap gap-2">
              {ALL_STACKS.map((stack) => (
                <button
                  key={stack}
                  type="button"
                  onClick={() => toggleStack(stack)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                    form.stacks.includes(stack)
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-neutral-300 bg-neutral-100 text-neutral-600 hover:border-blue-400 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {stack}
                </button>
              ))}
            </div>
            {form.stacks.length > 0 && (
              <p className="text-xs text-neutral-500">
                선택됨: {form.stacks.join(", ")}
              </p>
            )}
          </div>

          {/* 옵션 */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              <input
                type="checkbox"
                name="is_show"
                checked={form.is_show}
                onChange={handleChange}
                className="h-4 w-4 rounded border-neutral-300 text-blue-500"
              />
              공개 표시
            </label>
            <label className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              <input
                type="checkbox"
                name="is_featured"
                checked={form.is_featured}
                onChange={handleChange}
                className="h-4 w-4 rounded border-neutral-300 text-blue-500"
              />
              추천 프로젝트
            </label>
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "추가 중..." : "프로젝트 추가"}
          </button>
        </form>
      </div>
    </div>
  );
}
