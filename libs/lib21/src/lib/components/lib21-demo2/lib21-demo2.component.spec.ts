import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo2Component } from './lib21-demo2.component';

describe('Lib21Demo2Component', () => {
  let component: Lib21Demo2Component;
  let fixture: ComponentFixture<Lib21Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
