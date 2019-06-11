import {
  addCreatedAt, sendEmailNotification, checkPermission
} from './middleware';

class MessageService {
  @middleware([
    addCreatedAt,
    sendEmailNotification
  ])
  create(data, params) {
    // Insert data e.g. into MongoDB
    return mongodb.collection('messages').insertOne(data);
  }

  @middleware([
    checkPermission
  ])
  remove(id, params) {}
}
