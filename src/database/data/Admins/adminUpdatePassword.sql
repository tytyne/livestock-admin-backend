
UPDATE dbo.Admins
<<<<<<< HEAD
SET [Password]=@Password
WHERE [Id]=@Id

SELECT [Password]
=======
SET Password=@hash,
WHERE [Id]=@Id

SELECT [Password],
>>>>>>> d317fd869b2979ef68db592d7e099cc1bd409b7e
  FROM dbo.Admins
  WHERE Id=@Id



  