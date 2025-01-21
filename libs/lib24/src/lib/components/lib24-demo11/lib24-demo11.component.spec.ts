import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo11Component } from './lib24-demo11.component';

describe('Lib24Demo11Component', () => {
  let component: Lib24Demo11Component;
  let fixture: ComponentFixture<Lib24Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
