//package com.vehicleservicereservator.VehicleService;
//
//import java.util.*;
//import java.util.stream.Collectors;
//
//public class main {
//
//    public static void main(String[] args) {
//        String[] board = new String[9];
//
//
//        // User Marking X , We have to check if 5 is already marked or not
//        board[5]="x";
//        // Place user added x
//        int latest_added_block_number=5;
//
//
//
//        List<List<Integer>> listOfwinningPossibilities = new ArrayList<>();
//
//        listOfwinningPossibilities.add(new ArrayList<>(List.of(1,5,9)));
//        listOfwinningPossibilities.add(new ArrayList<>(List.of(2,5,8)));
//        listOfwinningPossibilities.add(new ArrayList<>(List.of(3,5,7)));
//        listOfwinningPossibilities.add(new ArrayList<>(List.of(4,5,6)));
//        listOfwinningPossibilities.add(new ArrayList<>(List.of(3,7,8)));
//
//
//
//        List<List<Integer>> listsWithNumberN = listOfwinningPossibilities.stream()
//                .filter(innerList -> innerList.contains(5))
//                .collect(Collectors.toList());
//
//        System.out.println(listsWithNumberN);
//
//    //    System.out.println(listsWithNumberN.size());
//
//
//        for (int i=0;i<listsWithNumberN.size();i++){
//            if (board[listsWithNumberN.get(i).get(0)].equals("x")){
//                if (board[listsWithNumberN.get(i).get(2)].equals("x")){
//                    if (!board[listsWithNumberN.get(i).get(3)].equals("")){
//                        // Adding "o" to a risk
//                        board[listsWithNumberN.get(i).get(3)]="o";
//
//                        // Ask user to go to next step
//                        System.out.println(board);
//                        System.out.println( "Enter Next Value");
//                    }
//                }else if (board[listsWithNumberN.get(i).get(2)].equals("")){
//                    if (!board[listsWithNumberN.get(i).get(3)].equals("x")){
//                        board[listsWithNumberN.get(i).get(2)]="o";
//
//                        // Ask user to go to next step
//                        System.out.println(board);
//                        System.out.println( "Enter Next Value");
//                    }
//                }
//            } else if (listsWithNumberN.get(i).get(1).equals("")) {
//                if (board[listsWithNumberN.get(i).get(2)].equals("x") && board[listsWithNumberN.get(i).get(2)].equals("x")) {
//                    board[listsWithNumberN.get(i).get(1)]="o";
//
//                    // Ask user to go to next step
//                    System.out.println(board);
//                    System.out.println( "Enter Next Value");
//                }
//            }
//        }
//
//
//        System.out.println(board);
//
//    }
//
//}
//        // To enter the X
