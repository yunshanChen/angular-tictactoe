import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackCapooComponent } from './black-capoo.component';

describe('BlackCapooComponent', () => {
  let component: BlackCapooComponent;
  let fixture: ComponentFixture<BlackCapooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackCapooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackCapooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
