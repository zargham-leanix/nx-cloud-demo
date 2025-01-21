import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo45Component } from './lib93-demo45.component';

describe('Lib93Demo45Component', () => {
  let component: Lib93Demo45Component;
  let fixture: ComponentFixture<Lib93Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
