
CREATE POLICY "Anyone can upload contact videos"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'videos');
