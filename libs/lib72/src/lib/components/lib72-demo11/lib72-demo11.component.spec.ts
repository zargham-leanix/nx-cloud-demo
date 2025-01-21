import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo11Component } from './lib72-demo11.component';

describe('Lib72Demo11Component', () => {
  let component: Lib72Demo11Component;
  let fixture: ComponentFixture<Lib72Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
