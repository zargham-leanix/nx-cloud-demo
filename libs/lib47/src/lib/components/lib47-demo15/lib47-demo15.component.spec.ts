import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo15Component } from './lib47-demo15.component';

describe('Lib47Demo15Component', () => {
  let component: Lib47Demo15Component;
  let fixture: ComponentFixture<Lib47Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
