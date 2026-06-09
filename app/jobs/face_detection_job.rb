class FaceDetectionJob < ApplicationJob
  def perform(photo)
    Celery.enqueue "hedonism.who_dis.worker.extract_facial_data", photo.to_gid_param
    Celery.enqueue "hedonism.who_dis.worker.caption_image", photo.to_gid_param
  end
end
