import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo35Component } from './lib99-demo35.component';

describe('Lib99Demo35Component', () => {
  let component: Lib99Demo35Component;
  let fixture: ComponentFixture<Lib99Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
