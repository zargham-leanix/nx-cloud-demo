import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo45Component } from './lib53-demo45.component';

describe('Lib53Demo45Component', () => {
  let component: Lib53Demo45Component;
  let fixture: ComponentFixture<Lib53Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
