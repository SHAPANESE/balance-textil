Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$catalog = Join-Path $root 'assets/catalog'
$output = Join-Path $root 'assets/products'

# source page, file prefix, and crop rectangles (x, y, width, height)
$crops = @{
  '13' = @(@(25,90,270,310), @(315,90,270,310), @(605,90,270,310))
  '15' = @(@(65,100,225,330), @(345,100,225,330), @(640,100,225,330))
  '18' = @(@(35,155,285,310), @(330,155,265,310))
  '21' = @(@(50,125,240,315), @(330,125,240,315), @(615,125,240,315), @(50,480,240,315), @(335,480,240,315))
  '23' = @(@(10,165,280,315), @(305,165,280,315), @(590,165,290,315), @(10,650,280,315), @(305,650,280,315), @(590,650,290,315))
  '25' = @(@(25,90,260,270), @(320,90,260,270), @(610,90,260,270), @(25,395,260,270), @(320,395,260,270), @(610,395,260,270), @(25,690,260,270), @(320,690,260,270), @(610,690,260,270))
  '27' = @(@(50,125,240,330), @(335,125,240,330), @(610,125,240,330), @(50,470,250,330), @(335,470,250,330))
  '32' = @(@(20,80,270,275), @(315,80,270,275), @(605,80,270,275), @(20,390,270,275), @(315,390,270,275))
  '38' = @(@(35,95,260,295), @(325,95,260,295), @(610,95,260,295), @(35,425,260,295), @(325,425,260,295), @(610,425,260,295), @(35,720,260,295), @(325,720,260,295), @(610,720,260,295))
  '41' = @(@(25,85,260,300), @(310,85,260,300), @(600,85,260,300), @(25,455,260,300))
}

foreach ($page in $crops.Keys) {
  $source = [System.Drawing.Image]::FromFile((Join-Path $catalog "page-$page.png"))
  for ($index = 0; $index -lt $crops[$page].Count; $index++) {
    $rect = $crops[$page][$index]
    $bitmap = New-Object System.Drawing.Bitmap($rect[2], $rect[3])
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.DrawImage($source, (New-Object System.Drawing.Rectangle(0, 0, $rect[2], $rect[3])), (New-Object System.Drawing.Rectangle($rect[0], $rect[1], $rect[2], $rect[3])), [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.Dispose()
    $bitmap.Save((Join-Path $output "catalog-$page-$index.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $bitmap.Dispose()
  }
  $source.Dispose()
}
