Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('public/Dr.Okema''s logo.png')
$bmp = New-Object System.Drawing.Bitmap 180,180
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, 0,0,180,180)
$bmp.Save('public/apple-touch-icon.png', [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
$img.Dispose()
