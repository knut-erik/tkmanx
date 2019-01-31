<?php


class TKHelper
{

    private $resourcePath = './css/';
    private $cqstylesheet = 'tk.css';

    public function __construct()
    {
        $this->cqstylesheet = $this->resourcePath . $this->cqstylesheet;
    }

    private function getStyleSheetPath()
    {
        return $this->cqstylesheet;
    }

    private function getMTime($fileName)
    {
        return filemtime($fileName);
    }

    public function getStyleSheet()
    {
        $stylesheetfile = $this->getStyleSheetPath();
        return '<link rel="stylesheet" href="' . $stylesheetfile . '?' . $this->getMTime($stylesheetfile) . '">';
    }
}
?>
