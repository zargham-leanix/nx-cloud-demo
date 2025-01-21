import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo45Component } from './lib59-demo45.component';

describe('Lib59Demo45Component', () => {
  let component: Lib59Demo45Component;
  let fixture: ComponentFixture<Lib59Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
