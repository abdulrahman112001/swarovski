import { notifications } from "@mantine/notifications"

type notifyStatus_TP = "success" | "error" | "info" | "warning" |'loading'

export const notify = (
  status?: notifyStatus_TP,
  err?: unknown,
  title?: string,
  message?: string,
  isLoading?:boolean
): void => {
  switch (status) {
    case "success": {
        notifications.show({
            title: title || "تمت العملية بنجاح",
            message: message,
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.green[6],
                borderColor: theme.colors.green[6],
    
                "&::before": { backgroundColor: theme.white },
              },
    
              title: { color: theme.white },
              description: { color: theme.white },
              closeButton: {
                color: theme.white,
                "&:hover": { backgroundColor: theme.colors.green[9] },
              },
            }),
          })
      break
    }
    case "error": {
      notifications.show({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        title: title || err?.response?.data?.message,
        message: message || "حدث خطأ حاول مره أخرى",
        styles: (theme) => ({
          root: {
            backgroundColor: theme.colors.red[6],
            borderColor: theme.colors.red[6],

            "&::before": { backgroundColor: theme.white },
          },

          title: { color: theme.white },
          description: { color: theme.white },
          closeButton: {
            color: theme.white,
            "&:hover": { backgroundColor: theme.colors.red[9] },
          },
        }),
      })
      break
    }
    case "info": {
      notifications.show({
        title: title,
        message: message,
        styles: (theme) => ({
          root: {
            backgroundColor: theme.colors.blue[6],
            borderColor: theme.colors.blue[6],

            "&::before": { backgroundColor: theme.white },
          },

          title: { color: theme.white },
          description: { color: theme.white },
          closeButton: {
            color: theme.white,
            "&:hover": { backgroundColor: theme.colors.blue[9] },
          },
        }),
      })
      break
    }
    case "warning": {
      notifications.show({
        title: title,
        message: message,
        loading:true,
        styles: (theme) => ({
          root: {
            backgroundColor: theme.colors.yellow[6],
            borderColor: theme.colors.yellow[6],

            "&::before": { backgroundColor: theme.white },
          },

          title: { color: theme.white },
          description: { color: theme.white },
          closeButton: {
            color: theme.white,
            "&:hover": { backgroundColor: theme.colors.yellow[9] },
          },
        }),
      })
      break
    }
    case "loading": {
      notifications.show({
        title: title,
        message: message,
        loading:isLoading,
        styles: (theme) => ({
          root: {
            backgroundColor: theme.colors.green[6],
            borderColor: theme.colors.green[6],

            "&::before": { backgroundColor: theme.white },
          },

          title: { color: theme.white },
          description: { color: theme.white },
          closeButton: {
            color: theme.white,
            "&:hover": { backgroundColor: theme.colors.green[6] },
          },
        }),
      })
      break
    }
  }
}
