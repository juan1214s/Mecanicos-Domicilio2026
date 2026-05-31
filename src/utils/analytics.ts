import { AnalyticsEvents, PageNames } from "../constants/enums";

type AnalyticsPayload = Record<string, unknown>;

let lastPageView: { path: string; ts: number } | null = null;

export function pushDataLayerEvent(payload: AnalyticsPayload): void {
  window.dataLayer?.push(payload);
}

export function getCurrentPageName(pathname: string = window.location.pathname): string {
  if (pathname === "/") return PageNames.HOME;
  if (pathname.startsWith("/contact")) return PageNames.CONTACT;
  if (pathname.startsWith("/aboutUs")) return PageNames.ABOUT;
  return pathname;
}

export function pushPageView(pathname: string = window.location.pathname): void {
  const now = Date.now();

  // React StrictMode in development can mount/unmount components twice.
  // This avoids immediate duplicate page_view pushes for the same route.
  if (lastPageView && lastPageView.path === pathname && now - lastPageView.ts < 1200) {
    return;
  }

  lastPageView = { path: pathname, ts: now };

  pushDataLayerEvent({
    event: AnalyticsEvents.PAGE_VIEW,
    page_path: pathname,
    page_title: document.title,
    page_name: getCurrentPageName(pathname),
  });
}
