import {blockContentType} from './blockContentType'
import {postType} from './postType'
import patient from './patient'
import prescription from './prescription'
import appointment from './appointment'

export const schema = {
  types: [blockContentType, postType, patient, prescription, appointment],
}