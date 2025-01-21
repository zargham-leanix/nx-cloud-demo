import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo45Component } from './lib44-demo45.component';

describe('Lib44Demo45Component', () => {
  let component: Lib44Demo45Component;
  let fixture: ComponentFixture<Lib44Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
