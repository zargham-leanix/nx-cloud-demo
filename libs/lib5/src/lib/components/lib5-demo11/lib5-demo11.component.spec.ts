import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo11Component } from './lib5-demo11.component';

describe('Lib5Demo11Component', () => {
  let component: Lib5Demo11Component;
  let fixture: ComponentFixture<Lib5Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
