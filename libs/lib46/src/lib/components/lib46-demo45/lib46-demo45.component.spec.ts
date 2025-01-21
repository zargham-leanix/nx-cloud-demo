import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo45Component } from './lib46-demo45.component';

describe('Lib46Demo45Component', () => {
  let component: Lib46Demo45Component;
  let fixture: ComponentFixture<Lib46Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
