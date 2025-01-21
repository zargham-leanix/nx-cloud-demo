import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo35Component } from './lib59-demo35.component';

describe('Lib59Demo35Component', () => {
  let component: Lib59Demo35Component;
  let fixture: ComponentFixture<Lib59Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
