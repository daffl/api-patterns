export const addCreatedAt = async (context, next) => {
  context.data.createdAt = new Date();

  await next();
}

export const sendEmailNotification = async (context, next) => {
  await next();

  const { user } = context.params;
  const message = context.result;

  await context.service('/emails').create({
    email: message.receiver.email,
    subject: `You have a new message!`,
    body: `Hi there!
      ${user.username} sent you a new message:
      ${message.text}
    `
  });
}

export const checkPermission = async (context, next) => {
  const { user } = context.params;

  // e.g. { permissions: [ 'editor', 'admin' ] }
  if (!user.permissions.includes('editor')) {
    throw new Error('You are not allowed to do this!');
  }

  await next();
}
