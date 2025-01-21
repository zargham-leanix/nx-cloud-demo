import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo11Component } from './lib93-demo11.component';

describe('Lib93Demo11Component', () => {
  let component: Lib93Demo11Component;
  let fixture: ComponentFixture<Lib93Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
