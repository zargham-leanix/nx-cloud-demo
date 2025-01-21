import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo35Component } from './lib26-demo35.component';

describe('Lib26Demo35Component', () => {
  let component: Lib26Demo35Component;
  let fixture: ComponentFixture<Lib26Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
