import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo2Component } from './lib44-demo2.component';

describe('Lib44Demo2Component', () => {
  let component: Lib44Demo2Component;
  let fixture: ComponentFixture<Lib44Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
