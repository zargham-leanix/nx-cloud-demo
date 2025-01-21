import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo11Component } from './lib44-demo11.component';

describe('Lib44Demo11Component', () => {
  let component: Lib44Demo11Component;
  let fixture: ComponentFixture<Lib44Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
