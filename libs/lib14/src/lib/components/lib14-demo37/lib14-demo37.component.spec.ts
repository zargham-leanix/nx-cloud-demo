import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo37Component } from './lib14-demo37.component';

describe('Lib14Demo37Component', () => {
  let component: Lib14Demo37Component;
  let fixture: ComponentFixture<Lib14Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
