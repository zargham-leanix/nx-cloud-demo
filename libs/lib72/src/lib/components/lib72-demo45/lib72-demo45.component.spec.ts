import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo45Component } from './lib72-demo45.component';

describe('Lib72Demo45Component', () => {
  let component: Lib72Demo45Component;
  let fixture: ComponentFixture<Lib72Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
