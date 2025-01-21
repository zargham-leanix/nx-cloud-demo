import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo45Component } from './lib33-demo45.component';

describe('Lib33Demo45Component', () => {
  let component: Lib33Demo45Component;
  let fixture: ComponentFixture<Lib33Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
