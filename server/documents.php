<?php

// sleep() here is for testing slow connections only and should be removed in production
sleep(2);

header('Content-Type: application/json;charset=utf-8');

print <<<QWERTYUIOP
[
  {"AttachmentId":263, "FileName":"Requirements spec 1.doc", "DateAdded":"2009-10-06 11:46:12", "FileSize":"9.7 KB"},
  {"AttachmentId":264, "FileName":"A dummy document.ocr", "DateAdded":"2009-10-07 11:46:12", "FileSize":"23.7 KB"},
  {"AttachmentId":265, "FileName":"Test plan.pdf", "DateAdded":"2009-10-08 11:46:12", "FileSize":"30.0 KB"},
  {"AttachmentId":266, "FileName":"Phone list.xlsx", "DateAdded":"2009-10-09 11:46:12", "FileSize":"220.2 KB"},
  {"AttachmentId":271, "FileName":"det här är på svenska.docx", "DateAdded":"2009-10-14 17:14:29", "FileSize":"9.7 KB"},
  {"AttachmentId":272, "FileName":"error.png", "DateAdded":"2009-10-16 18:58:28", "FileSize":"20.9 KB"},
  {"AttachmentId":273, "FileName":"GUI - ugly error message.jpg", "DateAdded":"2009-10-16 19:02:32", "FileSize":"13.8 KB"},
  {"AttachmentId":274, "FileName":"message.txt", "DateAdded":"2009-10-16 19:09:34", "FileSize":"1.0 KB"}
]
QWERTYUIOP;
