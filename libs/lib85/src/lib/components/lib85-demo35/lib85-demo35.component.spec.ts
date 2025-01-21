import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo35Component } from './lib85-demo35.component';

describe('Lib85Demo35Component', () => {
  let component: Lib85Demo35Component;
  let fixture: ComponentFixture<Lib85Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
