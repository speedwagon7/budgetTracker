package com.fdmgroup.budgetTracker.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fdmgroup.budgetTracker.model.User;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JWTService {

    @Value("${jwt.algorithm.key}")
    private String algorithmKey;
    @Value("${jwt.issuer}")
    private String issuer;
    @Value("${jwt.expiryInSecs}")
    private int expiryInSecs;

    private Algorithm algorithm;
    private static final String EMAIL_KEY = "EMAIL";

    @PostConstruct
    public void postConstruct() {
        algorithm = Algorithm.HMAC256(algorithmKey);
    }

    public String generateJWT (User user) {
        return JWT.create()
                .withClaim(EMAIL_KEY,user.getEmail())
                .withIssuer(issuer)
                .withExpiresAt(new Date(System.currentTimeMillis() + 1000L * expiryInSecs))
                .sign(algorithm);
    }

    public String getEmail(String token) {
        return JWT.decode(token).getClaim(EMAIL_KEY).asString();
    }
}
