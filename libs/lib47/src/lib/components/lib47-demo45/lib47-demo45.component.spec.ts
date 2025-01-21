import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo45Component } from './lib47-demo45.component';

describe('Lib47Demo45Component', () => {
  let component: Lib47Demo45Component;
  let fixture: ComponentFixture<Lib47Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
