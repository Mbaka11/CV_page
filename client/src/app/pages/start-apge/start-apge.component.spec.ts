import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartApgeComponent } from './start-apge.component';

describe('StartApgeComponent', () => {
  let component: StartApgeComponent;
  let fixture: ComponentFixture<StartApgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartApgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartApgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
