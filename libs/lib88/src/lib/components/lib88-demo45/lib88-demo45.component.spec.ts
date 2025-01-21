import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo45Component } from './lib88-demo45.component';

describe('Lib88Demo45Component', () => {
  let component: Lib88Demo45Component;
  let fixture: ComponentFixture<Lib88Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
