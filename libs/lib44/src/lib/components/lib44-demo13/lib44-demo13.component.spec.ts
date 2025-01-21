import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo13Component } from './lib44-demo13.component';

describe('Lib44Demo13Component', () => {
  let component: Lib44Demo13Component;
  let fixture: ComponentFixture<Lib44Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
