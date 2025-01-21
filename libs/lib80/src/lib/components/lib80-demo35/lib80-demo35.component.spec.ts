import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo35Component } from './lib80-demo35.component';

describe('Lib80Demo35Component', () => {
  let component: Lib80Demo35Component;
  let fixture: ComponentFixture<Lib80Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
