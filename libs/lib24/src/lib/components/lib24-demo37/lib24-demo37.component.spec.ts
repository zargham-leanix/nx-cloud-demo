import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo37Component } from './lib24-demo37.component';

describe('Lib24Demo37Component', () => {
  let component: Lib24Demo37Component;
  let fixture: ComponentFixture<Lib24Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
