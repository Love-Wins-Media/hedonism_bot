# frozen_string_literal: true
require 'celery'

class UploadController < ApplicationController
  def cluster
    Celery.enqueue 'hedonism.who_dis.worker.cluster_faces', nil do |r|
      r.each_with_object(Hash.new { |h, k| h[k] = [] }) do |(key, value), hash|
        hash[key] << value
      end

      r.each do |cluster, person_photo_id|
        next if person_photo_id.nil?
        p = PhotoPerson.find(person_photo_id)
        p.cluster_number = cluster
        p.save
      end


    head :ok
  end

  def index
  end

  def upload
    file = params[:file]
    filename = ActiveStorage::Filename.new(params[:file].original_filename)
    basename = File.basename(filename, ".*")
    extension = File.extname(filename).lstrip(".")

    configuration = Photo.configuration_for_extension extension

    photo = Photo.find_or_create_by!(original_filename: basename, tenant: @tenant)

    if configuration[:raw]
      photo.content_type = configuration[:mime_type]
      photo.byte_size = file.size
    end

    logger.info "Performing Upload for Image #{basename} with configuration => #{configuration}"

    photo.images.attach(
      io: file,
      filename: filename,
      content_type: configuration[:mime_type],
      identify: false
    )

    photo.save!

    PhotoMetadataJob.perform_later photo.id

    head :ok
  end
  end
  end