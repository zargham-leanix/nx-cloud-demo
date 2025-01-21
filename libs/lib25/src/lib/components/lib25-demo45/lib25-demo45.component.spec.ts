import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo45Component } from './lib25-demo45.component';

describe('Lib25Demo45Component', () => {
  let component: Lib25Demo45Component;
  let fixture: ComponentFixture<Lib25Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
