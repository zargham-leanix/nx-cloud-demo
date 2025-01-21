import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo32Component } from './lib46-demo32.component';

describe('Lib46Demo32Component', () => {
  let component: Lib46Demo32Component;
  let fixture: ComponentFixture<Lib46Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
