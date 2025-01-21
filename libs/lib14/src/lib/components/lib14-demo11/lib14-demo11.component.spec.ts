import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo11Component } from './lib14-demo11.component';

describe('Lib14Demo11Component', () => {
  let component: Lib14Demo11Component;
  let fixture: ComponentFixture<Lib14Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
