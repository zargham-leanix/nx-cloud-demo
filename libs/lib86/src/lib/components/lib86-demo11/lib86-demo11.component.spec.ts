import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo11Component } from './lib86-demo11.component';

describe('Lib86Demo11Component', () => {
  let component: Lib86Demo11Component;
  let fixture: ComponentFixture<Lib86Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
