import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo35Component } from './lib5-demo35.component';

describe('Lib5Demo35Component', () => {
  let component: Lib5Demo35Component;
  let fixture: ComponentFixture<Lib5Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
