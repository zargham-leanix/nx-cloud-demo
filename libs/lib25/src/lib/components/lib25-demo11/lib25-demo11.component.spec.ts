import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo11Component } from './lib25-demo11.component';

describe('Lib25Demo11Component', () => {
  let component: Lib25Demo11Component;
  let fixture: ComponentFixture<Lib25Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
