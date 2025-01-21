import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo45Component } from './lib63-demo45.component';

describe('Lib63Demo45Component', () => {
  let component: Lib63Demo45Component;
  let fixture: ComponentFixture<Lib63Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
