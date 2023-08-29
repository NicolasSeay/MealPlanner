package com.nico.mp.util;

import com.nico.mp.domain.User;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JWTUtil implements Serializable {

    private static final Long serialVersionUID = -2550185165626007488L;

    @Value("${jwt.expiration}")
    private Long jwt_duration;

    @Value("${jwt.secret}")
    private String jwt_secret;

    public String generateToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        return "Bearer " + Jwts.builder()
                .setClaims(claims)
                .setSubject(String.valueOf(user.getId()))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwt_duration * 60000))
                .signWith(SignatureAlgorithm.HS512, jwt_secret).compact();
    }

    public void validateToken(String token)  {
        try {
            Jwts.parser().setSigningKey(jwt_secret).parseClaimsJws(token.substring(7));
        } catch (Exception e) {
            throw new JwtException(e.getMessage());
        }
    }

}
