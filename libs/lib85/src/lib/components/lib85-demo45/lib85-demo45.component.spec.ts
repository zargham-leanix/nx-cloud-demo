import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo45Component } from './lib85-demo45.component';

describe('Lib85Demo45Component', () => {
  let component: Lib85Demo45Component;
  let fixture: ComponentFixture<Lib85Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
