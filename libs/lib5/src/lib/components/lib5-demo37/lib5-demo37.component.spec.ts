import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo37Component } from './lib5-demo37.component';

describe('Lib5Demo37Component', () => {
  let component: Lib5Demo37Component;
  let fixture: ComponentFixture<Lib5Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
