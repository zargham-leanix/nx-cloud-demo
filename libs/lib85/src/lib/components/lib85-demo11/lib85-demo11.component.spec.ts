import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo11Component } from './lib85-demo11.component';

describe('Lib85Demo11Component', () => {
  let component: Lib85Demo11Component;
  let fixture: ComponentFixture<Lib85Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
