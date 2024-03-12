package com.fdmgroup.budgetTracker.service;

import com.fdmgroup.budgetTracker.api.model.RegistrationBody;
import com.fdmgroup.budgetTracker.exception.EmailAlreadyRegisteredToAUserException;
import com.fdmgroup.budgetTracker.model.BudgetCategory;
import com.fdmgroup.budgetTracker.model.Category;
import com.fdmgroup.budgetTracker.model.User;
import com.fdmgroup.budgetTracker.respository.BudgetCategoryRepository;
import com.fdmgroup.budgetTracker.respository.CategoryRepository;
import com.fdmgroup.budgetTracker.respository.UserRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;


@SpringBootTest
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class UserServiceTest {

//    @Mock
//    private UserRepository userRepo;
//    @Mock
//    private CategoryRepository categoryRepo;
//    @Mock
//    private BudgetCategoryRepository budgetCategoryRepo;
//    @Mock
//    private EncryptionService encryptionService;
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

//    @Test
//    public void testSuccessfulRegistration() throws EmailAlreadyRegisteredToAUserException {
//        // Mock behavior for userRepo.findByEmail
//        when(userRepo.findByEmail(anyString())).thenReturn(Optional.empty());
//
//        // Mock behavior for categoryRepo.findAll
//        List<Category> categoryList = Arrays.asList(new Category(55,"Category1"), new Category(56,"Category2"));
//        when(categoryRepo.findAll()).thenReturn(categoryList);
//
//        // Mock behavior for userRepo.save
//        User savedUser = new User();
//        savedUser.setEmail("test@example.com");
//        savedUser.setPassword("encryptedPassword");
//        when(userRepo.save(savedUser)).thenReturn(savedUser);
//
//        // Mock behavior for budgetCategoryRepo.save
//        when(budgetCategoryRepo.save(Mockito.any(BudgetCategory.class))).thenReturn(new BudgetCategory(savedUser, categoryList.get(0)));
//
//        // Mock behavior for encryptionService.encryptPassword
//        when(encryptionService.encryptPassword(anyString())).thenReturn("encryptedPassword");
//
//        // Test the registerUser method
//        RegistrationBody registrationBody = new RegistrationBody();
//        registrationBody.setEmail("test@example.com");
//        registrationBody.setPassword("password");
//
//        User result = userService.registerUser(registrationBody);
//
//        // Verify that the userRepo.save method was called with the expected user
//        verify(userRepo.save(Mockito.any(User.class)));
//
//        // Verify that budgetCategoryRepo.save was called for each category in the categoryList
//        verify(budgetCategoryRepo, times(categoryList.size())).save(any(BudgetCategory.class));
//
//        // Assert the result
//        assertNotNull(result);
//        assertEquals("test@example.com", result.getEmail());
//    }


    @Test
    @Transactional
    public void testIfEmailAlreadyUsedWhenRegistering() throws EmailAlreadyRegisteredToAUserException {
        RegistrationBody body = new RegistrationBody();
        body.setEmail("test@gmail.com");
        body.setPassword("PasswordA1");
        userService.registerUser(body);
        Assertions.assertThrows(EmailAlreadyRegisteredToAUserException.class, () -> userService.registerUser(body),
                "Email should already be registered to a user");
    }

    @Test
    @Transactional
    public void testIfNewUserRegisteredSuccessfully() {
        RegistrationBody body = new RegistrationBody();
        body.setEmail("UserA@junit.com");
        body.setPassword("PasswordA1");
        Assertions.assertDoesNotThrow(() -> userService.registerUser(body),
                "User should register successfully");
    }

}
