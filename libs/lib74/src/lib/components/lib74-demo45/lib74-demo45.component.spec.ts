import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo45Component } from './lib74-demo45.component';

describe('Lib74Demo45Component', () => {
  let component: Lib74Demo45Component;
  let fixture: ComponentFixture<Lib74Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
