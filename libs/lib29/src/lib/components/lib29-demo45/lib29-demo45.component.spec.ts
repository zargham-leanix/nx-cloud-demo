import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo45Component } from './lib29-demo45.component';

describe('Lib29Demo45Component', () => {
  let component: Lib29Demo45Component;
  let fixture: ComponentFixture<Lib29Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
