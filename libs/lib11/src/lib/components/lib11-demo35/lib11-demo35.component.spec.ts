import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo35Component } from './lib11-demo35.component';

describe('Lib11Demo35Component', () => {
  let component: Lib11Demo35Component;
  let fixture: ComponentFixture<Lib11Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
