import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo14Component } from './lib86-demo14.component';

describe('Lib86Demo14Component', () => {
  let component: Lib86Demo14Component;
  let fixture: ComponentFixture<Lib86Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
