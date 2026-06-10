class PhotoDescriptionJob < ApplicationJob
  queue_as :default

  def perform(photo)
    Celery.enqueue "hedonism.who_dis.worker.caption_image", photo.to_gid_param
  end
end
