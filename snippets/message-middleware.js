import {
  addCreatedAt, sendEmailNotification, checkPermission
} from './middleware';

class MessageService {
  @middleware([
    addCreatedAt,
    sendEmailNotification
  ])
  create(data, params) {},

  @middleware([
    checkPermission
  ])
  remove(id, params) {}
}
