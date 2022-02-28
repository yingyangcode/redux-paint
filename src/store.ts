import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension"
import { currentStroke } from "./modules/currentStroke/slice"
import { modalVisible } from "./modules/modals/slice"
import historyIndex from "./modules/historyIndex/slice"
import strokes from "./modules/strokes/slice"
import { logger } from "redux-logger"
import { RootState } from "./utils/types"


export const store = configureStore({
    reducer: {
      historyIndex,
      strokes,
      currentStroke,
      modalVisible
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger)
  })

export type AppThunk = ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
>
