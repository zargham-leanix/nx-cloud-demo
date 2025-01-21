import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo37Component } from './lib86-demo37.component';

describe('Lib86Demo37Component', () => {
  let component: Lib86Demo37Component;
  let fixture: ComponentFixture<Lib86Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
