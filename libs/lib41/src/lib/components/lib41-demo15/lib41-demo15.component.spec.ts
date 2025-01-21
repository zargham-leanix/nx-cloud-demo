import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo15Component } from './lib41-demo15.component';

describe('Lib41Demo15Component', () => {
  let component: Lib41Demo15Component;
  let fixture: ComponentFixture<Lib41Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
