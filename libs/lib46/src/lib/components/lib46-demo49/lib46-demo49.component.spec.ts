import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo49Component } from './lib46-demo49.component';

describe('Lib46Demo49Component', () => {
  let component: Lib46Demo49Component;
  let fixture: ComponentFixture<Lib46Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
