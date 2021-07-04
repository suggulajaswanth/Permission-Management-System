<?php
    ob_start();
    //Include pagination class file
    include('../phpclasses/pagination.php');

    include('../inc/header.php');

    $action = mysqli_real_escape_String($db_connect, $_POST['action']);

    if($action == "retrieve"){    
        $record_id = mysqli_real_escape_String($db_connect, $_POST['record_id']);
        
        $getinfo = mysqli_query($db_connect, "SELECT * FROM sharp_emp WHERE id = '$record_id' ");
        $getinfocount = mysqli_num_rows($getinfo);

        if($getinfocount == 1){
            if($fetch = mysqli_fetch_assoc($getinfo)){
                $employee_id = $fetch['employee_id'];
                $firstname = $fetch['first_name'];
                $middlename = $fetch['middle_name'];
                $lastname = $fetch['last_name'];
                $phone = $fetch['phone'];
                $employee_image = $fetch['employee_image'];
                $id_type = $fetch['id_type'];
                $id_number = $fetch['id_number'];
                $residence_address = $fetch['residence_address'];
                $residence_location = $fetch['residence_location'];
                $residence_direction = $fetch['residence_direction'];
                $residence_gps = $fetch['residence_gps'];
                $next_of_kin = $fetch['next_of_kin'];
                $relationship = $fetch['relationship'];
                $phone_of_kin = $fetch['phone_of_kin'];
                $kin_residence = $fetch['kin_residence'];
                $kin_residence_direction = $fetch['kin_residence_direction'];
                $date_employed = $fetch['date_employed'];
                $job_type = $fetch['job_type'];
                $status = $fetch['status'];

                if($middlename != ""){
                    $fullname = $firstname." ".$middlename." ".$lastname;
                } else {
                     $fullname = $firstname." ".$lastname;
                }

                echo '<table class="table">
                        <tr class="table_row logo">
                            <td class="table_column logo">
                            <p>PERMISSION MANAGEMENT SYSTEM</p>
                            </td>
                        </tr>
                        <tr class="table_row table_part">
                            <td class="table_column">
                                PERSONAL DATA
                            </td>
                        </tr>
                        <tr class="table_row">
                            <td class="table_column table_head m-column">
                                Employee ID
                            </td>
                            <td class="table_column m-column">
                                '.$employee_id.'
                            </td><br>
                            <td class="table_column p-column">
                               <img src="../uploads/employees_photos/'.$employee_image.'"
                            </td>
                        </tr>
                        <tr class="table_row">
                            <td class="table_column table_head m-column">
                                Full Name
                            </td>
                            <td class="table_column m-column">
                                '.$fullname.'
                            </td>
                        </tr>
                        <tr class="table_row clearfix">
                            <td class="table_column table_head s-column">
                                Job Type
                            </td>
                            <td class="table_column table_head s-column">
                                Date Employed
                            </td>
                            <td class="table_column table_head s-column">
                                Employment Status
                            </td>
                            <td class="table_column s-column">
                               '.$job_type.'
                            </td>
                            <td class="table_column s-column">
                                '.$date_employed.'
                            </td>
                            <td class="table_column s-column">
                                '.$status.'
                            </td>
                        </tr>
                        <tr class="table_row clearfix">
                            <td class="table_column table_head s-column">
                                Phone number
                            </td>
                            <td class="table_column table_head s-column">
                                National ID Type
                            </td>
                            <td class="table_column table_head s-column">
                                National ID Number (Selected ID Type)
                            </td>
                            <td class="table_column s-column">
                                '.$phone.'
                            </td>
                            <td class="table_column s-column">
                                '.$id_type.'
                            </td>
                            <td class="table_column s-column">
                                '.$id_number.'
                            </td>
                        </tr>
                        <tr class="table_row clearfix">
                            <td class="table_column table_head s-column">
                                Residential Address
                            </td>
                            <td class="table_column table_head s-column">
                                Location of Residence
                            </td>
                            <td class="table_column table_head s-column">
                                GPS location of residence
                            </td>
                            <td class="table_column s-column">
                                '.$residence_address.'
                            </td>
                            <td class="table_column s-column">
                                '.$residence_location.'
                            </td>
                            <td class="table_column s-column">
                                '.$residence_gps.'
                            </td>
                        </tr>
                        <tr class="table_row clearfix">
                            <td class="table_column table_head l-column">
                                Direction to Residential Address
                            </td>
                            <td class="table_column l-column">
                                '.$residence_direction.'
                            </td>
                        </tr>
                        <tr class="table_row table_part">
                            <td class="table_column">
                                Next of Kin
                            </td>
                        </tr>
                        <tr class="table_row kin_row clearfix">
                            <td class="table_column table_head m-column">
                                Full Name
                            </td>
                            <td class="table_column table_head m-column">
                                Relationship to employee
                            </td>
                            <td class="table_column m-column">
                                '.$next_of_kin.'
                            </td>
                            <td class="table_column  m-column">
                                '.$relationship.'
                            </td>
                        </tr>
                        <tr class="table_row kin_row clearfix">
                            <td class="table_column table_head m-column">
                                Phone number
                            </td>
                            <td class="table_column table_head m-column">
                                Residential Address
                            </td>
                            <td class="table_column m-column">
                               '.$phone_of_kin.'
                            </td>
                            <td class="table_column  m-column">
                                '.$kin_residence.'
                            </td>
                        </tr>
                        <tr class="table_row kin_row clearfix">
                            <td class="table_column table_head l-column">
                                Direction to Residence
                            </td>
                            <td class="table_column l-column">
                               '.$kin_residence_direction.'
                            </td>
                        </tr>
                        </table>

                ';
            }
        } else {
            echo '

                 <tr class="table_row clearfix">
                    <td class="table_column l-column">
                        No Records Found in the system.
                    </td>
                </tr>
            ';
        }
    }

    if($action == "delete"){    
        $record_id = mysqli_real_escape_String($db_connect, $_POST['record_id']);

        $getinfo = mysqli_query($db_connect, "DELETE FROM `sharp_emp` WHERE `sharp_emp`.`id` = '$record_id' ");

        ob_end_clean();
        if($getinfo){
            echo json_encode(array("status"=>"success"));
            exit();
        } else {
            echo json_encode(array("status"=>"failed"));
            exit();
        }
    }

?>