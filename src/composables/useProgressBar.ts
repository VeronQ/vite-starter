import NProgress from 'nprogress'

export function useProgressBar() {
  NProgress.configure({
    speed: 500,
  })

  return {
    start: () => NProgress.start(),
    done: () => NProgress.done(),
  }
}
