import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo35Component } from './lib72-demo35.component';

describe('Lib72Demo35Component', () => {
  let component: Lib72Demo35Component;
  let fixture: ComponentFixture<Lib72Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
