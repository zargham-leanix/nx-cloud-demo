import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo45Component } from './lib80-demo45.component';

describe('Lib80Demo45Component', () => {
  let component: Lib80Demo45Component;
  let fixture: ComponentFixture<Lib80Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
