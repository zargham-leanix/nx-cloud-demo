import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo17Component } from './lib44-demo17.component';

describe('Lib44Demo17Component', () => {
  let component: Lib44Demo17Component;
  let fixture: ComponentFixture<Lib44Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
