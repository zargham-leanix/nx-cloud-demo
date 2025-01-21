import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo4Component } from './lib100-demo4.component';

describe('Lib100Demo4Component', () => {
  let component: Lib100Demo4Component;
  let fixture: ComponentFixture<Lib100Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
