import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo11Component } from './lib21-demo11.component';

describe('Lib21Demo11Component', () => {
  let component: Lib21Demo11Component;
  let fixture: ComponentFixture<Lib21Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
