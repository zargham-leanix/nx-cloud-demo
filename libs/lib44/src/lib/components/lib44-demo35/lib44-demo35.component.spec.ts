import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo35Component } from './lib44-demo35.component';

describe('Lib44Demo35Component', () => {
  let component: Lib44Demo35Component;
  let fixture: ComponentFixture<Lib44Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
