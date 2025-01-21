import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo11Component } from './lib94-demo11.component';

describe('Lib94Demo11Component', () => {
  let component: Lib94Demo11Component;
  let fixture: ComponentFixture<Lib94Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
