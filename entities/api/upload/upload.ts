/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Loan API
 * 지역, 상품 등을 Query를 통해 여러 개를 보낼 때는 콤마(,)로 구분하여 보내주세요. 예시: ?location=서울,부산,대구
 * OpenAPI spec version: 1.0
 */
import { useMutation } from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryClient,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'

import type {
  UploadControllerUploadFileBody,
  UploadResponseDto,
} from '../../const'

import { customInstance } from '../../../shared/lib/axios/customAxios'
import type { ErrorType, BodyType } from '../../../shared/lib/axios/customAxios'

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1]

export const uploadControllerUploadFile = (
  uploadControllerUploadFileBody: BodyType<UploadControllerUploadFileBody>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  const formData = new FormData()
  if (uploadControllerUploadFileBody.file !== undefined) {
    formData.append(`file`, uploadControllerUploadFileBody.file)
  }

  return customInstance<UploadResponseDto | void>(
    {
      url: `/upload/file`,
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
      signal,
    },
    options
  )
}

export const getUploadControllerUploadFileMutationOptions = <
  TError = ErrorType<void>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadControllerUploadFile>>,
    TError,
    { data: BodyType<UploadControllerUploadFileBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof uploadControllerUploadFile>>,
  TError,
  { data: BodyType<UploadControllerUploadFileBody> },
  TContext
> => {
  const mutationKey = ['uploadControllerUploadFile']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof uploadControllerUploadFile>>,
    { data: BodyType<UploadControllerUploadFileBody> }
  > = props => {
    const { data } = props ?? {}

    return uploadControllerUploadFile(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UploadControllerUploadFileMutationResult = NonNullable<
  Awaited<ReturnType<typeof uploadControllerUploadFile>>
>
export type UploadControllerUploadFileMutationBody =
  BodyType<UploadControllerUploadFileBody>
export type UploadControllerUploadFileMutationError = ErrorType<void>

export const useUploadControllerUploadFile = <
  TError = ErrorType<void>,
  TContext = unknown,
>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof uploadControllerUploadFile>>,
      TError,
      { data: BodyType<UploadControllerUploadFileBody> },
      TContext
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof uploadControllerUploadFile>>,
  TError,
  { data: BodyType<UploadControllerUploadFileBody> },
  TContext
> => {
  const mutationOptions = getUploadControllerUploadFileMutationOptions(options)

  return useMutation(mutationOptions, queryClient)
}
