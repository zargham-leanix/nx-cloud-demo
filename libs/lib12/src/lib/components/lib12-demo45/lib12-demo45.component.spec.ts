import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo45Component } from './lib12-demo45.component';

describe('Lib12Demo45Component', () => {
  let component: Lib12Demo45Component;
  let fixture: ComponentFixture<Lib12Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
