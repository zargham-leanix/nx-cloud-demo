import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo45Component } from './lib28-demo45.component';

describe('Lib28Demo45Component', () => {
  let component: Lib28Demo45Component;
  let fixture: ComponentFixture<Lib28Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
