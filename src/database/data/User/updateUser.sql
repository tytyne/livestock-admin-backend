UPDATE dbo.Users
SET [FirstName]=@FirstName,
    [LastName]=@LastName,
    [Email]=@Email,
    [Password]=@Password,
    [Status]=@Status,
    [CreatedAt]=@Created,
    [UpdatedAt]=@UpdatedAt,
    [LastLogin]=@LastLogin,
    [VerificationID]=@VerificationID,
    [Balance]=@Balance,
    [Role]=@Role,
    [Phone]=@Phone,
    [PhoneStatus]=@PhoneStatus,
    [PasswordResetCode]=@PasswordResetCode,
    [ImageUrl]=@ImageUrl
WHERE [Id]=@Id

SELECT  [FirstName],
        [LastName],
        [Email],
        [Password],
        [Status],
        [CreatedAt],
        [UpdatedAt],
        [LastLogin],
        [VerificationID],
        [Balance],
        [Role],
        [Phone],
        [PhoneStatus],
        [PasswordResetCode],
        [ImageUrl]
FROM dbo.Users 
WHERE [Id]=@Id
