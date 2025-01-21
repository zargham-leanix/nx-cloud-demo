import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo35Component } from './lib88-demo35.component';

describe('Lib88Demo35Component', () => {
  let component: Lib88Demo35Component;
  let fixture: ComponentFixture<Lib88Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
