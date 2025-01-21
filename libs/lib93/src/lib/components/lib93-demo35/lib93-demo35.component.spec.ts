import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo35Component } from './lib93-demo35.component';

describe('Lib93Demo35Component', () => {
  let component: Lib93Demo35Component;
  let fixture: ComponentFixture<Lib93Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
