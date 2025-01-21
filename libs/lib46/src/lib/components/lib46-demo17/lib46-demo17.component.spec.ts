import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo17Component } from './lib46-demo17.component';

describe('Lib46Demo17Component', () => {
  let component: Lib46Demo17Component;
  let fixture: ComponentFixture<Lib46Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
