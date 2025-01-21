import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo14Component } from './lib21-demo14.component';

describe('Lib21Demo14Component', () => {
  let component: Lib21Demo14Component;
  let fixture: ComponentFixture<Lib21Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
