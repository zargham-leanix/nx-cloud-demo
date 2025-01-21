import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo35Component } from './lib25-demo35.component';

describe('Lib25Demo35Component', () => {
  let component: Lib25Demo35Component;
  let fixture: ComponentFixture<Lib25Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
