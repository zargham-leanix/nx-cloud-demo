import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo11Component } from './lib59-demo11.component';

describe('Lib59Demo11Component', () => {
  let component: Lib59Demo11Component;
  let fixture: ComponentFixture<Lib59Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
