
insert into dbo.Admins
    (
        [FirstName],
        [LastName],
        [Email],
        [Password],
        [Status],
        [CreatedAt],
        [UpdatedAt],
        [LastLogin],
        [VerificationID],
        [Role],
        [Phone],
        [PhoneStatus],
        [PasswordResetCode],
        [ImageUrl]


    )
 VALUES 
    (
        @FirstName,
        @LastName,
        @Email,
        @Password,
        @Status,
        @CreatedAt,
        @UpdatedAt,
        @LastLogin,
        @VerificationID,
        @Role,
        @Phone,
        @PhoneStatus,
        @PasswordResetCode,
        @ImageUrl
       
    )

Select SCOPE_IDENTITY() AS Id;