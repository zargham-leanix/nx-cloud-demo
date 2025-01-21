import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo14Component } from './lib44-demo14.component';

describe('Lib44Demo14Component', () => {
  let component: Lib44Demo14Component;
  let fixture: ComponentFixture<Lib44Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
